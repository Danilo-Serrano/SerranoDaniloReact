import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "./Admin.css";

// Según la configuración del proyecto, Firebase informa las credenciales erróneas con
// distintos códigos; a propósito el mensaje no revela si el email existe.
const CREDENCIALES_INVALIDAS = "Email o contraseña incorrectos.";

const MENSAJES_ERROR = {
    "auth/invalid-credential": CREDENCIALES_INVALIDAS,
    "auth/wrong-password": CREDENCIALES_INVALIDAS,
    "auth/user-not-found": CREDENCIALES_INVALIDAS,
    "auth/invalid-email": "El email no es válido.",
    "auth/user-disabled": "Esta cuenta está deshabilitada.",
    "auth/too-many-requests": "Demasiados intentos fallidos. Esperá unos minutos e intentá de nuevo.",
    "auth/network-request-failed": "No hay conexión. Revisá tu internet e intentá de nuevo.",
};

const AdminLogin = () => {
    const { usuario, cargando, login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState("");

    // Si ya hay sesión, no tiene sentido mostrar el login.
    if (!cargando && usuario) {
        return <Navigate to="/admin" replace />;
    }

    const manejadorLogin = async (e) => {
        e.preventDefault();
        setError("");
        setEnviando(true);
        try {
            await login(email.trim(), password);
            navigate(location.state?.from ?? "/admin", { replace: true });
        } catch (err) {
            setError(MENSAJES_ERROR[err.code] || "No pudimos iniciar sesión. Intentá nuevamente.");
            setEnviando(false);
        }
    };

    return (
        <section className="admin-login">
            <form className="admin-card admin-login__form" onSubmit={manejadorLogin}>
                <h2 className="admin-titulo">Acceso administrador</h2>

                <label className="admin-label" htmlFor="admin-email">Email</label>
                <input
                    id="admin-email"
                    className="admin-input"
                    type="email"
                    autoComplete="username"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="admin-label" htmlFor="admin-password">Contraseña</label>
                <input
                    id="admin-password"
                    className="admin-input"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="admin-error" role="alert">{error}</p>}

                <button className="admin-boton" disabled={enviando}>
                    {enviando ? "Ingresando..." : "Ingresar"}
                </button>
            </form>
        </section>
    );
};

export default AdminLogin;
