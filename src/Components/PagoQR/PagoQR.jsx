import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import "../Formulario/Formulario.css";
import "./PagoQR.css";
import { cancelarOrdenQr, consultarEstadoOrden } from "../services/mercadopago";

const INTERVALO_CONSULTA_MS = 3000;

const formatoTiempo = (ms) => {
    const segundos = Math.max(0, Math.ceil(ms / 1000));
    return `${Math.floor(segundos / 60)}:${String(segundos % 60).padStart(2, '0')}`;
};

// Muestra el QR dinámico y espera la confirmación del pago consultando el estado de la orden.
// La confirmación real la registra el webhook en el backend; acá solo se lee el resultado.
const PagoQR = ({ ordenId, qrData, expiraEn, onCerrar }) => {
    const navigate = useNavigate();
    const [restante, setRestante] = useState(() => expiraEn - Date.now());
    const [cancelando, setCancelando] = useState(false);
    const [terminado, setTerminado] = useState(false); // vencido o cancelado

    // Cuenta regresiva
    useEffect(() => {
        const timer = setInterval(() => setRestante(expiraEn - Date.now()), 1000);
        return () => clearInterval(timer);
    }, [expiraEn]);

    // Consulta periódica del estado de la orden
    useEffect(() => {
        if (terminado) return;
        let activo = true;

        const consultar = async () => {
            try {
                const { estado } = await consultarEstadoOrden(ordenId);
                if (!activo) return;
                if (estado === "pagada") {
                    navigate(`/pago/exito?external_reference=${ordenId}`);
                } else if (estado === "sin_stock" || estado === "monto_inconsistente") {
                    // Se cobró pero requiere revisión manual: no es un error del comprador.
                    navigate(`/pago/pendiente?external_reference=${ordenId}`);
                } else if (estado === "rechazada") {
                    setTerminado(true);
                }
            } catch (error) {
                console.error("❌ ERROR AL CONSULTAR EL PAGO QR:", error);
            }
        };

        const timer = setInterval(consultar, INTERVALO_CONSULTA_MS);
        return () => {
            activo = false;
            clearInterval(timer);
        };
    }, [ordenId, terminado, navigate]);

    const vencido = restante <= 0 || terminado;

    const cancelar = async () => {
        setCancelando(true);
        try {
            await cancelarOrdenQr(ordenId);
        } catch (error) {
            // Si ya se pagó (o venció) MP no permite cancelar; el polling lo resolverá.
            if (error.estado === "pagada") {
                navigate(`/pago/exito?external_reference=${ordenId}`);
                return;
            }
            console.error("❌ ERROR AL CANCELAR EL QR:", error);
        } finally {
            setCancelando(false);
        }
        onCerrar();
    };

    return (
        <div className="formulario pago-qr">
            <h2 className='form--h2'>Pagar con QR</h2>

            {vencido ? (
                <p className="pago-qr__aviso">El código QR venció o fue cancelado. Generá uno nuevo para pagar.</p>
            ) : (
                <>
                    <div className="pago-qr__codigo">
                        <QRCodeSVG value={qrData} size={240} marginSize={2} />
                    </div>
                    <p className="pago-qr__ayuda">
                        Escaneá el código con la app de Mercado Pago o la de tu banco.
                    </p>
                    <p className="pago-qr__tiempo">Vence en {formatoTiempo(restante)}</p>
                    <p className="pago-qr__ayuda">Esperando el pago…</p>
                </>
            )}

            <button
                type="button"
                className='form--button form--button--secundario'
                onClick={vencido ? onCerrar : cancelar}
                disabled={cancelando}
            >
                {vencido ? "Volver" : cancelando ? "Cancelando..." : "Cancelar y cambiar mis datos"}
            </button>
        </div>
    );
};

export default PagoQR;
