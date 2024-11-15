import React, { useState, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList , Image} from "react-native";
import { DataContext } from "../Context/DataContext";
import bagIcon from '../../../assets/images/bag.png';
import addIcon from '../../../assets/images/add.png';
import closeIcon from '../../../assets/images/close.png';
import closewIcon from '../../../assets/images/closew.png';
import minusIcon from '../../../assets/images/remove.png';

const handleAddToCart = (item) => {
	alert('Producto agregado al carrito');
	handleBuyPress(item);
  };

const ModalComponent = () => {
  const { cart, setCart, buyProducts } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  //total
  const total = cart.reduce((acc, el) => acc + el.quanty * el.price, 0);

  //increase
  const handleBuyPress = (product) => {
    buyProducts(product);
  };

  //drecrease
  const handleDreasePress = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quanty !== 1 &&
      setCart(cart.map((item) => (item.id === product.id ? { ...product, quanty: productRepeat.quanty - 1 } : item)));
  };

  //delete
  const handleDeletePress = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(true)}>
	  <Image source={bagIcon} style={styles.cartIcon} />
      </Pressable>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={[styles.button]} onPress={() => setModalVisible(!modalVisible)}>
			<Image source={closewIcon} style={styles.buttonClose} />
            </Pressable>
            <Text style={styles.modalText}>Cart Items:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text style={styles.modalTextProduct}>{item.productName}</Text>

                  <Text style={styles.modalTextProduct}>
                    <Pressable onPress={() => handleDreasePress(item)}>
					<Image source={minusIcon} style={styles.carritoIcons} />
                    </Pressable>

                    <Text style={styles.modalTextProduct}>{item.quanty}</Text>

                    <Pressable onPress={() => handleBuyPress(item)}>
					<Image source={addIcon} style={styles.carritoIcons} />
                    </Pressable>
                  </Text>

                  <Text style={styles.modalTextProduct}>
                    Total: ${item.quanty * item.price}
                    <Pressable onPress={() => handleDeletePress(item)}>
					<Image source={closeIcon} style={styles.carritoIcons} />
                    </Pressable>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
            <Text style={styles.totalText}>Total: ${total}</Text>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    left: 120,
  },
  buttonClose: {
    backgroundColor: "#d9c2a7",
	fontSize: 20,
	width: 40,
	height:40,
	margin: 5,
	borderRadius: 10,
	padding: 1,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  modalButton: {
    position: "absolute",
    bottom: 665,
    left: 310,
    padding: 10,
    borderRadius: 30,
	zIndex: 1000, 
  },
  cartIcon: {
    fontSize: 20,
	width: 40,
	height:40,
  },
  carritoIcons:{
	fontSize: 20,
	width: 30,
	height:30,
	margin: 5,
	marginHorizontal: 10,
	backgroundColor: "#d9c2a7",
	borderRadius: 30,
	padding: 2,
  },
  cartItem: {
    marginBottom: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 5, 
  },
  modalTextProduct: {
    marginBottom: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
	paddingleft:3,
	paddingRight:3,

  },
  totalText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalComponent;
export { handleAddToCart };