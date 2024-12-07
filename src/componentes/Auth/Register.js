import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import fondoInicio from '../../../assets/images/fondo-inicio.png'; // Imagen importada correctamente

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para mostrar u ocultar la confirmación de contraseña

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña:', confirmPassword);
  };

  const handleBack = () => {
    navigation.goBack(); //Devuelve a la pantalla anterior
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
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
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
        
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword} // Cambia según el estado
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword((prev) => !prev)}
            style={styles.iconButton}>
            <Text style={styles.iconToggle}>
              {showConfirmPassword ? '🙈' : '👁️'} {/* Cambia el icono según el estado */}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Atras</Text>
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
    color: '#000000', // Texto principal en color negro
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
