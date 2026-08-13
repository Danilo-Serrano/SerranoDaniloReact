import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//30 días

// Configuración de tu nuevo proyecto (gamerzone2)
const firebaseConfig = {
  apiKey: "AIzaSyADPewYKF7iS_0t14rwVtAIzsVOsSo-tYU",
  authDomain: "gamerzone2.firebaseapp.com",
  projectId: "gamerzone2",
  storageBucket: "gamerzone2.firebasestorage.app",
  messagingSenderId: "515300556983",
  appId: "1:515300556983:web:3dfddee6eeb6457ea64d32"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos para usarla en tus componentes
export const db = getFirestore(app);