import React, { createContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../firebase"; 
import { doc, setDoc, getDoc } from "firebase/firestore"; 

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserId(user.uid); 
    }
  }, []);

  const saveCartToFirestore = async (userId, cart) => {
    try {
      const cartRef = doc(firestore, "carts", userId); 
      await setDoc(cartRef, { cart });
      console.log("Carrito guardado en Firestore");
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
    }
  };

 
  const loadCartFromFirestore = async (userId) => {
    try {
      const cartRef = doc(firestore, "carts", userId); 
      const docSnap = await getDoc(cartRef);
      if (docSnap.exists()) {
        setCart(docSnap.data().cart);
        console.log("Carrito cargado desde Firestore:", docSnap.data().cart);
      } else {
        console.log("No se encontró un carrito para este usuario");
      }
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
    }
  };

 
  const buyProducts = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      if (userId) {
        saveCartToFirestore(userId, updatedCart); 
      }
      return updatedCart;
    });
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <DataContext.Provider
      value={{
        cart,
        setCart,
        saveCartToFirestore,
        loadCartFromFirestore,
        buyProducts, 
        userId, 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
