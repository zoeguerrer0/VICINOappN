import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import fondoInicio from '../../../assets/images/fondo-inicio.png';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      Alert.alert('Éxito', 'Usuario registrado correctamente.');
      navigation.goBack(); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al registrar el usuario.');
    }
  };

  const handleBack = () => {
    navigation.goBack(); 
  };

  return (
    <ImageBackground
      source={fondoInicio}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.texto}>VICINO</Text>
        <Text style={styles.icon}>👤</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={username}
          onChangeText={setUsername}
        />
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.iconButton}>
            <Text style={styles.iconToggle}>
              {showPassword ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword((prev) => !prev)}
            style={styles.iconButton}>
            <Text style={styles.iconToggle}>
              {showConfirmPassword ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 50,
    marginBottom: 20,
    color: '#fff',
  },
  texto: {
    color: '#000000',
    fontSize: 30,
    letterSpacing: 4,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#73482f',
    borderRadius: 100,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    marginLeft: '88%',
  },
  iconToggle: {
    fontSize: 20,
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
