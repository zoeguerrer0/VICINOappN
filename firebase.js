
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEfRSuZWgdeqXcf5DANF5C4rSct21YbZM",
  authDomain: "vicino-6c24e.firebaseapp.com",
  projectId: "vicino-6c24e",
  storageBucket: "vicino-6c24e.appspot.com", 
  messagingSenderId: "32746161057",
  appId: "1:32746161057:android:9bc417b6e8efdec6d801e0",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); //autenticación
export const firestore = getFirestore(app); //  Firestore
export const storage = getStorage(app); //Storage

export default app;
