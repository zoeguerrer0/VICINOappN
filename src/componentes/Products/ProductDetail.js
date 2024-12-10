import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={product.img} style={styles.productImage} />
        <Text style={styles.productName}>{product.productName}</Text>
        <Text style={styles.productPrice}>$ {product.price}</Text>
        <Text style={styles.descriptionText}>{product.description}</Text>
        <Text style={styles.detailsText}>{product.details}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2caad',
  },
  scrollContainer: {
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  productPrice: {
    color: 'green',
    fontSize: 20,
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
});

export default ProductDetail;
