import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//30 días

// Configuración de tu nuevo proyecto (gamerzone2)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos para usarla en tus componentes
export const db = getFirestore(app);