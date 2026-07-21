# 📦 PROYECTO FINAL - BACKEND I


# Entrega 1 - Lógica de datos (API) | Entrega 2 - Generar las vistas | Entrega final - DB persistente
---

## 🚀 Entrega N.º 1 – API con FileSystem

### 🎯 Objetivo General

Desarrollar un servidor que gestione productos y carritos utilizando archivos (`products.json` y `carts.json`) como sistema de persistencia.

---

### 📁 Estructura General

- Servidor en **Node.js** con **Express**
- Escucha en puerto `3000` u `8080`
- Dos grupos de rutas:

  - `/api/products`
  - `/api/carts`

- Rutas implementadas con **Express Routers**

---

### 🛒 Endpoints de Productos (`/api/products`)

| Método | Ruta    | Función                                      |
| ------ | ------- | -------------------------------------------- |
| GET    | `/`     | Obtener todos los productos                  |
| GET    | `/:pid` | Obtener producto por ID                      |
| POST   | `/`     | Crear nuevo producto (ID se autogenera)      |
| PUT    | `/:pid` | Actualizar campos del producto excepto el ID |
| DELETE | `/:pid` | Eliminar producto por ID                     |

---

### 🧺 Endpoints de Carritos (`/api/carts`)

| Método | Ruta                 | Función                                                       |
| ------ | -------------------- | ------------------------------------------------------------- |
| POST   | `/`                  | Crear nuevo carrito con ID único                              |
| GET    | `/:cid`              | Obtener todos los productos del carrito                       |
| POST   | `/:cid/product/:pid` | Agregar producto al carrito (aumenta `quantity` si ya existe) |

---

### 💾 Persistencia de Datos

- Se utiliza el módulo **FileSystem (`fs`)**
- Archivos: `products.json` y `carts.json`
- Se implementa un `ProductManager.js` y un `CartManager.js`

---

## 🧩 Entrega N.º 2 – Websockets + Handlebars

### 🎯 Objetivo General

Agregar un sistema visual con **Handlebars** y **actualización en tiempo real** usando **WebSockets (Socket.IO)**.

---

### ⚙️ Configuración Técnica

- Integración de **Handlebars** como motor de plantillas.
- Configuración de **Socket.IO** junto a Express.

---

### 🖼️ Vistas

| Vista                         | Descripción                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `home.handlebars`             | Muestra la lista **estática** de productos (al recargar muestra todos los productos actuales).    |
| `realTimeProducts.handlebars` | Muestra una lista **dinámica** de productos, que se actualiza automáticamente vía **WebSockets**. |

---

### ⚡ Funcionalidades en tiempo real

- Formulario para crear productos (WebSocket).
- Botón de eliminar producto (WebSocket).
- Cada modificación **se refleja automáticamente** sin necesidad de recargar.

---

### 💡 Tips Técnicos

- Enviar el formulario de creación/eliminación mediante WebSockets desde el frontend.
- Alternativamente, se puede emitir desde el servidor HTTP accediendo al objeto `io` desde el router.

---

## 🧪 Entrega Final – MongoDB + Funciones Avanzadas

### 🎯 Objetivo General

- Persistencia con **MongoDB + Mongoose**
- Consultas profesionales (filtros, orden, paginación)
- Gestión completa de productos y carritos
- Nuevas vistas con información conectada a la base de datos

---

### 🛒 Endpoint `/api/products` con funcionalidades avanzadas

| Query Param | Descripción                                      |
| ----------- | ------------------------------------------------ |
| `limit`     | Cantidad de productos por página (default: `10`) |
| `page`      | Página a consultar (default: `1`)                |
| `query`     | Filtro por categoría o disponibilidad            |
| `sort`      | Ordenar por precio (`asc` o `desc`)              |

#### 🧾 Respuesta esperada:

```json
{
  "status": "success",
  "payload": [],
  "totalPages": 0,
  "prevPage": 0,
  "nextPage": 0,
  "page": 0,
  "hasPrevPage": true,
  "hasNextPage": true,
  "prevLink": null,
  "nextLink": null
}
```

---

### 🛒 Nuevos Endpoints de Carritos

| Método | Ruta                            | Función                                                |
| ------ | ------------------------------- | ------------------------------------------------------ |
| DELETE | `/api/carts/:cid/products/:pid` | Eliminar un producto específico del carrito            |
| PUT    | `/api/carts/:cid`               | Reemplazar el contenido del carrito con un nuevo array |
| PUT    | `/api/carts/:cid/products/:pid` | Actualizar la cantidad de un producto específico       |
| DELETE | `/api/carts/:cid`               | Vaciar completamente un carrito                        |

---

### 🔗 Populate en Carritos

- Usar **populate** en `GET /api/carts/:cid` para mostrar detalles de productos en lugar de solo IDs.

---

### 🖼️ Vistas Finales

| Vista            | Descripción                                                     |
| ---------------- | --------------------------------------------------------------- |
| `/products`      | Lista paginada de productos con botón de **agregar al carrito** |
| `/products/:pid` | Vista detallada de un producto con opción de agregar al carrito |
| `/carts/:cid`    | Muestra el contenido completo del carrito con detalles poblados |

---

# 📌 RESUMEN FINAL: Funciones del Proyecto

## 🔄 CRUD de Productos

- Crear productos (`POST`)
- Obtener todos o por ID (`GET`)
- Actualizar productos (`PUT`)
- Eliminar productos (`DELETE`)
- Persistencia: primero con FileSystem, luego con MongoDB

## 🛒 CRUD de Carritos

- Crear carrito (`POST`)
- Agregar producto (`POST`)
- Obtener contenido (`GET`)
- Eliminar producto (`DELETE`)
- Actualizar cantidad o productos completos (`PUT`)
- Vaciar carrito (`DELETE`)
- Detalles de productos con `populate`

## 💻 Vistas con Handlebars

- `home`: lista estática
- `realTimeProducts`: lista dinámica vía WebSocket
- `products`: paginada, con opciones de filtro/orden
- `product detail`: detalle con botón de agregar
- `cart detail`: carrito poblado

## 🌐 WebSockets

- Crear y eliminar productos en tiempo real
- Comunicación bidireccional entre cliente y servidor

## ⚙️ Extras Técnicos

- Arquitectura con routers (`/api/products`, `/api/carts`, `/views`)
- Lógica desacoplada en managers o servicios
- Buen manejo de errores
- Validaciones completas

---

---


---


API  /api/products  - http
API  /api/carts - http

Views  /products   - socket
Views  /products/:pid - socket
Views  /carts/:cid - socket


# Temas según cada ENTREGA 

## Entrega 1 - API con FileSystem
- Node.js + Express
- FileSystem (fs) (asyn/await)
- Rutas y Routers
- CRUD básico
- Estructura de proyecto básica 

## Entrega 2 - Websockets + Handlebars - APP (Aplicación completa)
- Handlebars (plantillas, vistas)
- WebSockets (Socket.IO)
- Integración Handlebars + WebSockets + Express
- Actualización en tiempo real (frontend + backend)
- README con instrucciones de uso
- Estructura de proyecto avanzada
- .gitignore
- .env

## Entrega Final - MongoDB + Funciones Avanzadas - TENEMOS un APP + API con Base de Datos persistente
- MongoDB + Mongoose (conexión, schemas, modelos)
  - Utilizar MongoDB Atlas
  - Implementar async/await
  - Implementar manejo de errores y Validaciones
- CRUD avanzado (filtros, orden, paginación)
- Populate en Mongoose
- Nuevas vistas conectadas a la base de datos
- README con instrucciones de uso


Ejemplo: 

```js

const findByIdWithPopulate = async (req,res)=>{
  const {cid} = req.params;
  try{
    if(!isValidObjectId(cid)){
      return res.status(400).json({status: 'error', message: 'Invalid cart ID'});
    }
    const cart = await CartModel.findById(cid).populate('products.product');
    if(!cart){
      return res.status(404).json({status: 'error', message: 'Cart not found'});
    }
    res.json({status: 'success', payload: cart});
  }catch(error){
    res.status(500).json({status: 'error', message: error.message});
  }

}
```