import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importa Firebase Authentication

export default function Login({ navigation }) {
  const [username, setUsername] = useState(''); // Cambia 'username' a 'email' si usas email para el login
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth(); // Obtén la instancia de autenticación
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        console.log('Usuario logueado:', user);
        // Redirige a la pantalla principal o realiza alguna acción
        navigation.navigate('Inicio'); // Cambia 'Inicio' por el nombre de tu pantalla principal
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error de inicio de sesión:', errorCode, errorMessage);
        // Maneja el error (por ejemplo, mostrar un mensaje al usuario)
      });
  };

  const handleBack = () => {
    // Aquí puedes agregar la lógica para volver a la pantalla anterior
    console.log('Volver');
    navigation.goBack(); // Regresa a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>VICINO</Text>

      <Text style={styles.icon}>👤</Text>
      <TextInput
        style={styles.input}
        placeholder="Email" // Cambia a 'Email' si usas email para el login
        value={username}
        onChangeText={setUsername}
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});