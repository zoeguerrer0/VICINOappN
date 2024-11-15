import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Envio = () => {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => alert('Regresar')}>
          <Text style={styles.navButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Pedido</Text>
        <TouchableOpacity onPress={() => alert('Menú')}>
          <Text style={styles.navButton}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Envío</Text>
        <Text style={styles.subtitle}>Correspondencia privada</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputSection}>
        <TextInput placeholder="Calle*" style={styles.input} />
        <TextInput placeholder="Número*" style={styles.input} />
        <TextInput placeholder="Nombre del destinatario*" style={styles.input} />
        <TextInput placeholder="Descripción:" multiline style={styles.input} />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => alert('Siguiente')}>
        <Text style={styles.nextButtonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
    padding: 5,
    marginBottom:'auto',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    fontSize: 18,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
  },
  inputSection: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: ' #6F4E37',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  nextButton: {
    backgroundColor: '#6F4E37',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Envio;