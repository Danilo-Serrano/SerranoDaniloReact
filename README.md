# MendoShop

Tienda online de indumentaria y calzado deportivo de cuatro marcas: Nike, Adidas, Umbro y New Balance. Hecha con React y Vite. Catálogo por marca, sección "Próximamente", carrito persistente, checkout con Mercado Pago (Checkout Pro y QR dinámico) y panel de administración con Firebase Auth + Firestore.

---

## Stack

- **Frontend:** React 18, React Router 7, Vite 6
- **Datos y Auth:** Firebase 11 (Firestore, Authentication)
- **Pagos:** Mercado Pago (`@mercadopago/sdk-react`) — Checkout Pro y QR dinámico
- **Backend de pagos:** Cloud Functions (`firebase-functions` 7, SDK `mercadopago` 3, Node 24) en `functions/`
- **API externa:** [FakeStoreAPI](https://fakestoreapi.com) para la sección "Próximamente" (ropa de hombre y mujer)
- **Otros:** react-toastify, qrcode.react, Font Awesome, lucide-react

---

## Funcionalidades

- **Catálogo por marca:** Nike, Adidas, Umbro y New Balance (`/categoria/:idCategoria`).
- **Detalle de producto:** foto, marca, precio en ARS, descripción y selector de cantidad según stock.
- **Carrito:** agregar, modificar cantidades y vaciar. Se guarda en `localStorage`.
- **Checkout:** formulario de datos del cliente y pago con Mercado Pago, por botón o QR.
- **Próximamente:** productos traídos de FakeStoreAPI, precios en USD.
- **Panel de administración** (`/admin`): login con Firebase Auth, alta de productos y edición de precio y stock.

---

## Requisitos

- Node.js 24 (requerido por `functions/`)
- Firebase CLI (`npm i -g firebase-tools`) con acceso al proyecto definido en `.firebaserc`
- Cuenta de Mercado Pago con credenciales de prueba

---

## Inicio rápido

```bash
# 1. Dependencias
npm install
cd functions && npm install && cd ..

# 2. Variables de entorno
cp .env.example .env
cp functions/.env.example functions/.env.local
cp functions/.secret.local.example functions/.secret.local

# 3. Levantar emuladores (functions + auth + firestore)
firebase emulators:start

# 4. Levantar el frontend
npm run dev
```

UI de emuladores: `http://127.0.0.1:4000` · Auth `9099` · Firestore `8080` · Functions `5001`.

---

## Modelo de producto (Firestore, colección `productos`)

| Campo         | Tipo   | Notas                                       |
| ------------- | ------ | ------------------------------------------- |
| `nombre`      | string | Obligatorio                                 |
| `precio`      | number | ARS, mayor a 0                              |
| `stock`       | number | Entero, 0 o mayor                           |
| `categoria`   | string | `nike` · `adidas` · `umbro` · `new-balance` |
| `descripcion` | string | Obligatorio                                 |
| `imagen`      | string | URL de la foto                              |

Las marcas válidas están definidas en `CATEGORIAS` (`src/Components/services/productos.js`).

---

## Estructura del proyecto

```
src/
  Components/
    Admin/                 Login, AuthContext, RutaProtegida, panel, tabla y formulario de productos
    Banner/ Marquee/       Portada y cinta de mensajes de la home
    CartWidget/            Ícono del carrito con contador
    Categorias/            Navegación por marca
    Ofertas/               Sección "Próximamente" (FakeStoreAPI)
    Context/               CarritoContext + vista de carrito
    Formulario/            Checkout (datos del cliente, botón MP)
    Home/                  Home
    Item/                  Tarjeta de producto y selector de cantidad (ItemCount)
    ItemList/ ItemListContainer/       Listado de productos (general y por marca)
    ItemDetail/ ItemDetailContainer/   Detalle de producto por :id
    NavBar/ Footer/        Layout general
    PagoQR/                Flujo de pago con QR dinámico
    ResultadoPago/         Pantallas de éxito / pendiente / error
    Productos/             Vista de productos
    services/
      config.js            Inicialización de Firebase (y emuladores opcionales)
      productos.js         CRUD y validación de productos en Firestore
      mercadopago.js       Llamadas a las Cloud Functions de pago
      carritoStorage.js    Persistencia del carrito en localStorage
  App.jsx                  Rutas de la app
  main.jsx                 Punto de entrada

functions/
  index.js                 Cloud Functions: crearPreferencia, crearOrdenQr,
                           estadoOrden, cancelarOrdenQr, mpWebhook
```

---

## Rutas

| Ruta                                                   | Descripción                              |
| ------------------------------------------------------ | ---------------------------------------- |
| `/`                                                    | Home: portada, catálogo y "Próximamente" |
| `/categoria/nike` · `adidas` · `umbro` · `new-balance` | Catálogo filtrado por marca              |
| `/item/:id`                                            | Detalle de producto                      |
| `/carrito`                                             | Carrito                                  |
| `/checkout`                                            | Datos del cliente y pago                 |
| `/pago/exito` · `/pago/pendiente` · `/pago/error`      | Resultado del pago (`back_urls` de MP)   |
| `/admin/login`                                         | Login de administración                  |
| `/admin`                                               | Panel de administración (ruta protegida) |
| `*`                                                    | 404                                      |

---

## Backend de pagos (Cloud Functions)

Toda la lógica sensible vive en `functions/index.js`. Los precios y el stock se leen siempre de Firestore; no se confía en lo que envía el navegador.

- `crearPreferencia` — crea una preferencia de Checkout Pro y la orden en Firestore.
- `crearOrdenQr` — crea una orden dinámica de MP y devuelve el texto EMVCo para el QR.
- `estadoOrden` — consulta pública del estado de una orden (sin datos personales).
- `cancelarOrdenQr` — cancela un QR pendiente.
- `mpWebhook` — recibe notificaciones de pago/orden, valida la firma, actualiza el estado de la orden y descuenta stock de forma idempotente.

---

## Configuración

### Frontend (`.env`)

Ver `.env.example`. Todo lo que empieza con `VITE_` queda público en el bundle, por eso solo va la *Public Key*:

```
VITE_MP_PUBLIC_KEY=TEST-xxxx...
VITE_FUNCTIONS_BASE_URL=http://127.0.0.1:5001/<proyecto>/us-central1
# VITE_USE_EMULATORS=true   (opcional: Auth y Firestore contra emuladores)
```

En producción, `VITE_FUNCTIONS_BASE_URL` apunta a `https://us-central1-<proyecto>.cloudfunctions.net`.

### Backend (`functions/`)

El Access Token y la clave de firma del webhook **nunca** van en el frontend:

- Secretos en producción: `firebase functions:secrets:set MP_ACCESS_TOKEN` y `firebase functions:secrets:set MP_WEBHOOK_SECRET`
- Secretos en local: `functions/.secret.local` (ver `.secret.local.example`)
- Variables no secretas (`APP_URL`, `WEBHOOK_URL`, `QR_POS_ID`): `functions/.env` (prod) / `functions/.env.local` (local, pisa a `.env`)

Para recibir el webhook en local hace falta exponer el emulador con un túnel (por ejemplo ngrok) y usar esa URL en `WEBHOOK_URL`.

---

## Scripts

Frontend:

```bash
npm run dev       # desarrollo (Vite)
npm run build     # build de producción
npm run preview   # sirve el build localmente
npm run lint      # ESLint
npm run deploy    # build + publica dist/ en GitHub Pages
```

Cloud Functions (`cd functions`):

```bash
npm run serve     # emulador de functions
npm run shell     # shell interactiva
npm run deploy    # deploy a Firebase
npm run logs      # logs en producción
```

---

## Despliegue

- **Frontend:** Vercel (`vercel.json` reescribe todas las rutas a `index.html`) o GitHub Pages (`npm run deploy`, ajustar `homepage` en `package.json`).
- **Backend:** `firebase deploy --only functions`.
- **Reglas de Firestore:** ver `firestore.rules.sugeridas`.
