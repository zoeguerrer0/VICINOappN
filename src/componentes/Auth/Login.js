import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import inicio from '../../../assets/images/inicio.jpg';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña

  const handleLogin = async () => {
    try {
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
    navigation.goBack();
  };

  return (
    <ImageBackground source={inicio} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>VICINO</Text>

        <Text style={styles.icon}>👤</Text>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Cambia según el estado
          />
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.iconButton}>
            <Text style={styles.iconToggle}>
              {showPassword ? '🙈' : '👁️'} {/* Cambia el icono según el estado */}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Continuar</Text>
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
  texto: {
    color: '#000',
    fontSize: 30,
    letterSpacing: 4,
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
  inputFocused: {
    borderColor: '#007BFF',
    borderWidth: 2,
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
