import React from 'react';
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import fondoInicio from '../../../assets/images/fondo-inicio.png'; 

export default function Inicio({ navigation }) {
  return (
    <ImageBackground
      source={fondoInicio} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>VICINO</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.buttonText}>Entrar sin registrarme</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#6F4E37',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 90,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  text: {
    color: '#000000', // Texto principal en color negro
    fontSize: 30,
    letterSpacing: 4,
  }
});
