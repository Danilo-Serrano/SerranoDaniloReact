import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from '@mercadopago/sdk-react';
import "../Formulario/Formulario.css";
import { CarritoContext } from "../Context/CarritoContext";
import { crearPreferencia, crearOrdenQr, cancelarOrdenQr, mpConfigurado } from "../services/mercadopago";
import PagoQR from "../PagoQR/PagoQR";
import { toast } from 'react-toastify';

// onCerrar: lo pasa quien muestra el formulario dentro de otra pantalla (el carrito).
// Si se abre como página (/checkout) no hay onCerrar y se vuelve al carrito.
const Formulario = ({ onCerrar }) => {
    const navigate = useNavigate();
    const { carrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cargando, setCargando] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null); // botón de Mercado Pago
    const [qr, setQr] = useState(null); // { ordenId, qrData, expiraEn }

    const cerrar = () => {
        // Si había un QR activo se cancela para no dejar una orden abierta. Es un intento
        // "de cortesía": si ya se pagó, Mercado Pago no deja cancelar y el webhook la registra igual.
        if (qr) cancelarOrdenQr(qr.ordenId).catch(() => {});
        if (onCerrar) onCerrar();
        else navigate("/carrito");
    };

    // Con la tecla Escape también se sale.
    useEffect(() => {
        const alPresionar = (e) => {
            if (e.key === "Escape") cerrar();
        };
        window.addEventListener("keydown", alPresionar);
        return () => window.removeEventListener("keydown", alPresionar);
    });

    const manejadorFormulario = async (e) => {
        e.preventDefault();
        // Cada botón de envío indica el medio de pago elegido en su atributo value.
        const medioPago = e.nativeEvent.submitter?.value || "wallet";

        if (carrito.length === 0) {
            toast.error("Tu carrito está vacío.", { theme: "dark" });
            return;
        }

        if (!mpConfigurado) {
            toast.error("Mercado Pago no está configurado (revisá el archivo .env).", { theme: "dark" });
            return;
        }

        setCargando(true);
        try {
            // El servidor valida stock, calcula el total real y crea la orden pendiente.
            const cliente = { nombre, apellido, telefono };
            if (medioPago === "qr") {
                setQr(await crearOrdenQr(cliente, carrito));
            } else {
                const { preferenceId } = await crearPreferencia(cliente, carrito);
                setPreferenceId(preferenceId);
            }
        } catch (error) {
            console.error("❌ ERROR AL INICIAR EL PAGO:", error);
            toast.error(error.message || "Hubo un problema al iniciar el pago.", { theme: "dark" });
        } finally {
            setCargando(false);
        }
    };

    const pagoIniciado = Boolean(preferenceId || qr);

    return (
        <div className='form--container'>
            <form className="formulario" onSubmit={manejadorFormulario}>
                <button
                    type="button"
                    className="form--close-btn"
                    onClick={cerrar}
                    aria-label="Cerrar formulario"
                    title="Cerrar"
                >
                    ×
                </button>
                <h2 className='form--h2'>Formulario de Clientes</h2>

                <label className='form--label'>Nombre:</label>
                <input
                    required
                    className='form--input'
                    type='text'
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    disabled={pagoIniciado}
                />

                <label className='form--label'>Apellido:</label>
                <input
                    required
                    className='form--input'
                    type='text'
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                    disabled={pagoIniciado}
                />

                <label className='form--label'>Teléfono:</label>
                <input
                    required
                    className='form--input'
                    type='text'
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                    disabled={pagoIniciado}
                />

                {!pagoIniciado && (
                    <>
                        <button className='form--button' value="wallet" disabled={cargando}>
                            {cargando ? "Procesando..." : "Continuar al pago"}
                        </button>
                        <button className='form--button form--button--secundario' value="qr" disabled={cargando}>
                            Pagar con QR
                        </button>
                    </>
                )}
            </form>

            {preferenceId && (
                <div className="formulario">
                    <Wallet
                        initialization={{ preferenceId }}
                        customization={{ texts: { valueProp: 'smart_option' } }}
                        onError={(error) => {
                            console.error("❌ ERROR EN EL BOTÓN DE PAGO:", error);
                            toast.error("No pudimos cargar el botón de pago.", { theme: "dark" });
                        }}
                    />
                    <button
                        type="button"
                        className='form--button form--button--secundario'
                        onClick={() => setPreferenceId(null)}
                    >
                        Cambiar mis datos
                    </button>
                </div>
            )}

            {qr && (
                <PagoQR
                    ordenId={qr.ordenId}
                    qrData={qr.qrData}
                    expiraEn={qr.expiraEn}
                    onCerrar={() => setQr(null)}
                />
            )}
        </div>
    );
};

export default Formulario;
