import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import fondoInicio from '../../../assets/images/fondo-inicio.png'; // Imagen importada correctamente

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña:', confirmPassword);
  };

  return (
    <ImageBackground
      source={fondoInicio}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Registro</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
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
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Asegúrate de que la imagen se ajuste correctamente
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000', // Texto principal en color negro
    fontSize: 30,
    letterSpacing: 4,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#73482f',
    borderRadius: 5,
    color: '#FFF', // Color del texto en el campo de entrada
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});