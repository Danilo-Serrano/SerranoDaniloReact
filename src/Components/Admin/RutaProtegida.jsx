import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Solo renderiza a sus hijos si hay una sesión iniciada; si no, envía al login.
// Es una protección de interfaz: la seguridad real de los datos está en las reglas de Firestore.
const RutaProtegida = ({ children }) => {
    const { usuario, cargando } = useAuth();
    const location = useLocation();

    if (cargando) {
        return <p className="admin-estado">Verificando sesión...</p>;
    }

    if (!usuario) {
        return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
    }

    return children;
};

export default RutaProtegida;
