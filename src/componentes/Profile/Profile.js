import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../../../firebase'; //configuración de Firebase
import bagIcon from '../../../assets/images/bag.png';
import accountIcon from '../../../assets/images/account.png';
import homeIcon from '../../../assets/images/home.png';

const Profile = ({ navigation }) => {
  // email del usuario
  const [email, setEmail] = useState('');

  
  useEffect(() => {
    if (auth.currentUser) {
      setEmail(auth.currentUser.email); // Asigna el email del usuario
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.title}>VICINO</Text>
        <Text style={styles.username}>{auth.currentUser ? auth.currentUser.displayName : 'Usuario'}</Text>
        <Text style={styles.level}>Nivel: 3</Text>

       
        <Text style={styles.email}>{email}</Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Mi cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Correo: {email}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Direcciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Seguridad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Mis compras</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Shop')}>
          <Image source={bagIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Inicio')}>
          <Image source={homeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Image source={accountIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2caad',
    paddingHorizontal: 20,
    paddingTop: 110,
    paddingBottom: 210,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  level: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  optionsContainer: {
    flex: 1,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingVertical: 15,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    paddingVertical: 10,
    position: 'absolute', // Fija la navbar
    bottom: 85, // Mantiene la navbar 20 unidades hacia arriba
    left: 0,
    right: 0,
    borderRadius: 50,
  },
  navButton: {
    alignItems: 'center',
  },
  icon: {
    width: 50, // Ajusta el tamaño del ícono según sea necesario
    height: 50,
  },
});

export default Profile;
