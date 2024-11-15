import { initializeApp } from "firebase/app"; // Asegúrate de que la importación sea correcta
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    authDomain: Constants.manifest.extra.authDomain,
    messagingSenderId: Constants.manifest.extra.messagingSenderId, // Agregada la coma aquí
    appId: Constants.manifest.extra.appId,
    databaseURL: Constants.manifest.extra.databaseURL
};

initializeApp(firebaseConfig);
export const database = getFirestore();