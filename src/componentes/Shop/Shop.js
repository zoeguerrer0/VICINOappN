import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import Products from '../Products/Products';
import { DataProvider } from '../Context/DataContext';
import bagIcon from '../../../assets/images/bag.png';
import accountIcon from '../../../assets/images/account.png';
import homeIcon from '../../../assets/images/home.png';
import ModalComponent from '../ModalComponent/ModalComponent';

const Shop = ({navigation}) => {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Products />
        <ModalComponent />
      </View>
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
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80, // Ajuste para diferentes plataformas
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    paddingVertical: 35,
    position: 'absolute', 
    bottom: 0,  // Asegura que esté en la parte inferior
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,  // Solo redondea las esquinas superiores
    borderTopRightRadius: 30, 
    paddingBottom: Platform.OS === 'ios' ? 20 : 10, // Ajustes para iOS vs Android
    zIndex: 10,  // Asegura que el tab esté sobre otros elementos
  },
  navButton: {
    alignItems: 'center',
  }, 
  icon: {
    width: 45, // Puedes usar tamaños más pequeños si deseas
    height: 45,
    resizeMode: 'contain', // Asegura que la imagen se ajuste sin deformarse
  },
});

export default Shop;
