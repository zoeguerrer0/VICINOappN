import React, { useContext } from 'react';
import { DataContext } from "../Context/DataContext"; 
import { Pressable, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();
  const { buyProducts } = useContext(DataContext);

  const productos = [
    {
      id: 1,
      productName: "Conjundo Candy",
      price: 1000,
      img: require("../../../assets/images/candyconjunto.jpg"),
      description: "Descripción del producto 1",
      details: "Detalles del producto 1",
    },
    {
      id: 2,
      productName: "Conjunto Eco Andino",
      price: 1500,
      img: require("../../../assets/images/Conjuntoeco.jpg"),
      description: "Descripción del producto 2",
      details: "Detalles del producto 2",
    },
    {
        id: 3,
        productName: "Tacones",
        price: 4500,
        img: require("../../../assets/images/Tacones.jpg"),
        description: "Descripción del producto 3",
        details: "Detalles del producto 3",
      },
    
  ];

  const handleBuyPress = (product) => {
    if (buyProducts) {
      buyProducts(product); // Call buyProducts function from context
    } else {
      console.error('buyProducts is not a function');
    }
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleProductPress(item)}>
            <View style={styles.productItem}>
              <Image source={item.img} style={styles.productImage} />
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productPrice}>$ {item.price}</Text>
              <Pressable style={styles.buyButton} onPress={() => handleBuyPress(item)}>
                <Text style={styles.buyButtonText}>Agregar al carrito</Text>
              </Pressable>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9c2a7',
  },
  productItem: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productImage: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
  },
  productName: {
    marginTop: 10,
    fontWeight: 'bold',
    color: "black",
  },
  productPrice: {
    color: 'green',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buyButton: {
    backgroundColor: "#000",
    padding: 8,
    width: 150,
    marginTop: 28,
    borderRadius: 50,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Products;
