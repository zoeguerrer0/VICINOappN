import React, { createContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../firebase"; // Ya está correctamente importado
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importar métodos para trabajar con documentos de Firestore

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  // Obtener el userId del usuario autenticado
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserId(user.uid); // Guardamos el userId en el estado
    }
  }, []);

  // Función para guardar el carrito en Firestore
  const saveCartToFirestore = async (userId, cart) => {
    try {
      const cartRef = doc(firestore, "carts", userId); // Usamos doc en lugar de collection
      await setDoc(cartRef, { cart });
      console.log("Carrito guardado en Firestore");
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
    }
  };

  // Función para cargar el carrito desde Firestore
  const loadCartFromFirestore = async (userId) => {
    try {
      const cartRef = doc(firestore, "carts", userId); // Usamos doc en lugar de collection
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

  // Función para agregar un producto al carrito
  const buyProducts = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      if (userId) {
        saveCartToFirestore(userId, updatedCart); // Guardamos el carrito en Firestore si existe el userId
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
        buyProducts, // Proporcionamos la función buyProducts
        userId, // Proporcionamos el userId
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
