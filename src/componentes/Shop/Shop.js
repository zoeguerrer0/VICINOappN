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
    paddingBottom: Platform.OS === 'ios' ? 100 : 80,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    paddingVertical: 35,
    position: 'absolute', 
    bottom: 0,  
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,  
    borderTopRightRadius: 30, 
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    zIndex: 10, 
  },
  navButton: {
    alignItems: 'center',
  }, 
  icon: {
    width: 45, 
    height: 45,
    resizeMode: 'contain', 
  },
});

export default Shop;
