import React, { useState } from 'react'; // Importa useState
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native'; // Importa los componentes de React Native
import { Picker } from '@react-native-picker/picker';
import bagIcon from '../../../assets/images/bag.png';
import accountIcon from '../../../assets/images/account.png';
import homeIcon from '../../../assets/images/home.png';



const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params; // Obtén el producto de los parámetros de la ruta
  const [selectedSize, setSelectedSize] = useState("S"); // Inicializa el estado para selectedSize
  const [showDescription, setShowDescription] = useState(false); // Estado para mostrar/ocultar la descripción
  const [showDetails, setShowDetails] = useState(false); // Estado para mostrar/ocultar los detalles

  const toggleDescription = () => {
    setShowDescription(!showDescription); // Alterna el estado de la descripción
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={product.img} style={styles.productImage} />
        <Text style={styles.seasonText}>Nueva temporada</Text>
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Picker
          selectedValue={selectedSize}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSize(itemValue)}>
          <Picker.Item label="S" value="S" />
          <Picker.Item label="M" value="M" />
          <Picker.Item label="L" value="L" />
        </Picker>
        <Button
          style={styles.bcompra}
          title="Agregar al carrito"
          onPress={() => alert('Producto agregado al carrito')}
        />
        <Text style={styles.deliveryText}>Entrega estimada: el día que llegue el camión</Text>
      
	          {/* Botón para mostrar/ocultar la descripción */}
			  <TouchableOpacity onPress={() => setShowDescription(!showDescription)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Descripción del producto</Text>
        </TouchableOpacity>
        {showDescription && (
          <Text style={styles.descriptionText}>{product.description}</Text>
        )}

        {/* Botón para mostrar/ocultar detalles adicionales */}
        <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Detalles adicionales</Text>
        </TouchableOpacity>
        {showDetails && (
          <Text style={styles.detailsText}>{product.details}</Text>
		)}
	  
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,    
    paddingRight: 10,
    backgroundColor: '#e2caad',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 250, // Aumenta el padding para evitar superposición con la navbar
	marginbottom:30,
},
  productImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  seasonText: {
    marginTop: 8,
    fontSize: 16,
    color: '#888',
  },
  productName: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  productPrice: {
    color: 'green',
    fontSize: 20,
    paddingTop: 3.5,
},
  picker: {
    marginBottom: 120,
    borderRadius: 30,
    height: 50, 
    width: '100%',
    marginTop: 1,

  },
  bcompra: {
    marginTop: 10,
    borderRadius: 50,
    padding: 10,
  },
  deliveryText: {
    marginTop: 25,
    fontSize: 16,
    color: '#888',
  },
  toggleButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#d1c4b1',
    borderRadius: 5,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#333',
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  detailsText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6F4E37',
    paddingVertical: 10,
    position : 'absolute', // Fija la navbar
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

export default ProductDetail;