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
      description: "Este elegante set de joyería es el complemento perfecto para cualquier ocasión especial. Incluye un par de pendientes de diseño colgante, un anillo con un solitario diamante, y otro anillo con un diseño de infinito. La joyería está hecha de plata u oro blanco y adornada con diamantes o piedras similares, añadiendo un toque de lujo y distinción a tu estilo.",
      details: "Material: Plata u oro blanco. \nPiedras: Diamantes. \nIncluye: Un par de pendientes, un anillo de solitario, y un anillo de infinito.",
    },
    {
      id: 2,
      productName: "Conjunto Eco Andino",
      price: 1500,
      img: require("../../../assets/images/Conjuntoeco.jpg"),
      description: "Este conjunto se inspira en la tradición y la naturaleza. Perfecto para quienes buscan un estilo único y sostenible. Incluye una camisa y pantalones, con detalles andinos que reflejan la cultura y la artesanía local.",
      details: "Material: Algodón orgánico y lana \n Colores disponibles: Beige, verde oliva y marrón \n Características adicionales: Botones de madera y bordados tradicionales",
    },
    {
        id: 3,
        productName: "Tacones",
        price: 4500,
        img: require("../../../assets/images/Tacones.jpg"),
        description: "Estos tacones de diseño audaz son perfectos para aquellas que quieren destacar. Con un acabado brillante y una altura que estiliza la figura, son ideales para eventos y salidas nocturnas.",
        details: "Material: Cuero sintético \n Altura del tacón: 10 cm \n Colores disponibles: Negro, rojo y plateado \n Características adicionales: Plantilla acolchada para mayor comodidad",
      },
      {
        id: 3,
        productName: "Zapatos Vizzano",
        price: 2500,
        img: require("../../../assets/images/ZapatosVizzano.jpg"),
        description: "Los zapatos Vizzano combinan elegancia y comodidad. Con un diseño clásico y detalles modernos, son perfectos para cualquier ocasión, desde una reunión de trabajo hasta una cena elegante.",
        details: "Material: Cuero genuino \n Altura del tacón: 7 cm \n Colores disponibles: Negro, beige y azul marino \n Características adicionales: Suela antideslizante y plantilla ortopédica",
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
    borderRadius: 20,
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
