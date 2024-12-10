import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { DataContext } from "../Context/DataContext.js"; // Importa tu contexto para manejar la función buyProducts

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const { buyProducts, cart, setCart } = useContext(DataContext); // Usa el contexto para obtener la función buyProducts

  const handleBuyPress = (product) => {
    if (buyProducts) {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        setCart(cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      buyProducts(product); // Llama a la función buyProducts del contexto
      alert('Producto agregado al carrito');
    } else {
      console.error('buyProducts is not a function');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={product.img} style={styles.productImage} />
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.productPrice}>$ {product.price}</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>
        <Text style={styles.detailsText}>{product.details}</Text>
        <Pressable style={styles.buyButton} onPress={() => handleBuyPress(product)}>
          <Text style={styles.buyButtonText}>Agregar al carrito</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b79a86', // Color más oscuro para el fondo
  },
  scrollContainer: {
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
    color: '#333',
  },
  productPrice: {
    color: 'green',
    fontSize: 20,
    marginBottom: 10,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'justify',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 2,
  },
  detailsText: {
    marginTop: 1,
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'justify',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 2,
  },
  buyButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
