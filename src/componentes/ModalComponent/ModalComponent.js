import React, { useContext, useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList, Image } from "react-native";
import { DataContext } from "../Context/DataContext"; // Asegúrate de importar el contexto correctamente
import carrito from "../../../assets/images/carrito.jpg";
import addIcon from "../../../assets/images/add.png";
import closeIcon from "../../../assets/images/close.png";
import minusIcon from "../../../assets/images/remove.png";

const ModalComponent = () => {
  const { cart, setCart, saveCartToFirestore, userId } = useContext(DataContext); // Accedemos al contexto
  const [modalVisible, setModalVisible] = useState(false);

  // Guardar el carrito en Firestore cuando el cart cambie y si hay un userId
  useEffect(() => {
    if (userId) {
      const saveCart = async () => {
        try {
          await saveCartToFirestore(userId, cart);
          console.log('Carrito guardado en Firestore');
        } catch (error) {
          console.error('Error al guardar el carrito:', error);
        }
      };

      saveCart(); // Guardar carrito en Firestore
    }
  }, [cart]);

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleIncrease = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedCart;
    });
  };

  const handleDecrease = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCart;
    });
  };

  const handleDelete = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  return (
    <View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Image source={carrito} style={styles.cartIcon} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
              <Image source={closeIcon} style={styles.buttonClose} />
            </Pressable>
            <Text style={styles.modalText}>Productos en el carrito:</Text>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Text>{item.productName}</Text>
                  <View style={styles.quantityControls}>
                    <Pressable onPress={() => handleDecrease(item)}>
                      <Image source={minusIcon} style={styles.carritoIcons} />
                    </Pressable>
                    <Text>{item.quantity}</Text>
                    <Pressable onPress={() => handleIncrease(item)}>
                      <Image source={addIcon} style={styles.carritoIcons} />
                    </Pressable>
                  </View>
                  <Pressable onPress={() => handleDelete(item)}>
                    <Image source={closeIcon} style={styles.carritoIcons} />
                  </Pressable>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Text>Total: ${total}</Text>
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
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  buttonClose: {
    width: 30,
    height: 30,
  },
  modalButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 5,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  carritoIcons: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  cartItem: {
    marginBottom: 15,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default ModalComponent;
