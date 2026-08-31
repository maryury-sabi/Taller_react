import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Aquí ya quedó corregido con el nombre exacto que pide el PDF
export const contactosRef = collection(db, 'contactos');

export const guardarContacto = async (contacto) => {
  return addDoc(contactosRef, contacto);
};

export const escucharContactos = (callback) => {
  return onSnapshot(contactosRef, (snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    callback(lista);
  });
};