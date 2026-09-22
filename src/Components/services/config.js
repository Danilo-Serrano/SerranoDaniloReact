import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Configuración de tu proyecto en Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyADPewYKF7iS_0t14rwVtAIzsVOsSo-tYU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gamerzone2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gamerzone2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gamerzone2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "515300556983",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:515300556983:web:3dfddee6eeb6457ea64d32"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos y la autenticación
export const db = getFirestore(app);
export const auth = getAuth(app);

// Opcional: con VITE_USE_EMULATORS=true la app usa los emuladores locales de
// Firestore y Auth en vez de producción (útil para probar el panel /admin sin tocar datos reales).
if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}
