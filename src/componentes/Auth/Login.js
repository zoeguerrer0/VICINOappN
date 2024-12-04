import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; //con este se verifica el email

export default function Login({ navigation }) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      //RECOLECTOR de errores
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      const user = userCredential.user;
      console.log('Usuario logueado:', user);
      navigation.navigate('Shop'); 
    } catch (error) {
      console.error('Error de inicio de sesión:', error.code, error.message);
     
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  const handleBack = () => {
    navigation.goBack(); //Devuelve a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>VICINO</Text>

      <Text style={styles.icon}>👤</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2caad',
  },
  texto: {
    fontSize: 32,
    marginBottom: 20,
    color: '#73482f',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 50,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#73482f',
    borderRadius: 100,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#73482f',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
