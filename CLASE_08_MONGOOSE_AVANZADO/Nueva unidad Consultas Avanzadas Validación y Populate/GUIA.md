# Nueva Unidad: Consultas Avanzadas, Validación y Populate

## Guión de la Clase - Práctica Completa

- Semana 8: Consultas Avanzadas, Validación y Populate
  - Filtros, paginación y ordenamiento en MongoDB
  - Validación de datos con Zod o Joi
  - Relaciones entre colecciones y uso de populate (lookup en agregaciones)
  - Práctica Integradora: Consultas, Validación y Relaciones
  - Consultas Avanzadas, Validación y Populate

Ejemplo filtro productos por envío gratis o no:

```javascript
db.products.find({ free_shipping: true });
```

Ejemplo de ordenamiento por precio ascendente:

```javascript
db.products.find().sort({ price: 1 });
```

Ejemplo de ordenamiento por precio descendente:

```javascript
db.products.find().sort({ price: -1 });
```

Bienvenido a la sesión de cierre de nuestro módulo. En esta clase en vivo, dejaremos de lado la teoría aislada para enfrentarnos a desafíos reales de arquitectura y base de datos. Consolidaremos cómo transformar un backend funcional en uno profesional, eficiente y seguro.

---

## Tabla de Contenidos

1. [Preparación del Entorno](#1-preparación-del-entorno)
2. [Consultas Avanzadas con Agregaciones](#2-consultas-avanzadas-con-agregaciones)
   - 2.1. Introducción a `aggregate()`
   - 2.2. Operadores clave: `$match`, `$group`, `$sort`, `$project`
   - 2.3. `$lookup` para unir colecciones
   - 2.4. `$unwind` para aplanar arreglos
   - 2.5. `$facet` y `$bucket` para estadísticas
3. [Query Quest: El Desafío de Optimización](#3-query-quest-el-desafío-de-optimización)
   - 3.1. Consulta ineficiente #1 (sin índices)
   - 3.2. Consulta ineficiente #2 (N+1 con populate)
   - 3.3. Consulta ineficiente #3 (múltiples etapas sin filtro)
   - 3.4. Análisis con `explain()`
4. [Validación Robusta con Zod y Joi](#4-validación-robusta-con-zod-y-joi)
   - 4.1. Comparativa Zod vs Joi
   - 4.2. Esquemas de validación para endpoints
   - 4.3. Middleware de validación
   - 4.4. Manejo de errores y mensajes personalizados
5. [Detección de Errores: Blindando el Backend](#5-detección-de-errores-blindando-el-backend)
   - 5.1. Código con bugs (validación y populate)
   - 5.2. Correcciones y explicación
6. [Relaciones y Populate en Profundidad](#6-relaciones-y-populate-en-profundidad)
   - 6.1. El problema N+1
   - 6.2. Solución con `populate` optimizado (select, match)
   - 6.3. Alternativa escalable: `$lookup` con pipeline
   - 6.4. Denormalización y caching
7. [Debugging en Vivo](#7-debugging-en-vivo)
   - 7.1. Identificar consultas lentas con MongoDB Profiler
   - 7.2. Uso de `explain()` y análisis de índices
   - 7.3. Herramientas: Compass, Atlas Performance Advisor
8. [Casos Reales: Shopify y Netflix](#8-casos-reales-shopify-y-netflix)
9. [Proyecto Final: Red Social Minimalista](#9-proyecto-final-red-social-minimalista)
10. [Conclusión y Próximos Pasos](#10-conclusión-y-próximos-pasos)

---

## 1. Preparación del Entorno

Antes de comenzar, asegúrate de tener configurado lo siguiente:

- **VS Code** con el proyecto del módulo 5 cargado.
- **MongoDB** (local o Atlas) con datos de prueba.
- **Postman** o **Insomnia** para probar endpoints.
- **Node.js** v18+ y **npm**.
- Dependencias instaladas:

```bash
npm install express mongoose zod joi dotenv
npm install -D nodemon
```

Estructura base del proyecto:

```
proyecto-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── postController.js
│   │   └── commentController.js
│   ├── middleware/
│   │   ├── validate.js
│   │   └── errorHandler.js
│   └── app.js
├── .env
└── package.json
```

Conecta a MongoDB:

```javascript
// src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado exitosamente");
  } catch (error) {
    console.error("Error de conexión:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

## 2. Consultas Avanzadas con Agregaciones

### 2.1. Introducción a `aggregate()`

Las agregaciones en MongoDB permiten procesar documentos en etapas (pipeline). Son ideales para transformaciones, cálculos y uniones.

```javascript
// Ejemplo básico: obtener usuarios con edad > 18, ordenados por nombre
const users = await User.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $sort: { name: 1 } },
  { $project: { name: 1, email: 1, age: 1 } },
]);
```

### 2.2. Operadores clave

- **`$match`**: Filtra documentos (similar a `find`).
- **`$group`**: Agrupa por un campo y aplica acumuladores (`$sum`, `$avg`, `$max`, etc.).
- **`$sort`**: Ordena.
- **`$project`**: Selecciona o transforma campos.

**Ejemplo de agrupación:**

```javascript
// Total de publicaciones por usuario
const postsPerUser = await Post.aggregate([
  { $group: { _id: "$author", totalPosts: { $sum: 1 } } },
  { $sort: { totalPosts: -1 } },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user",
    },
  },
  { $unwind: "$user" },
  { $project: { "user.name": 1, totalPosts: 1 } },
]);
```

### 2.3. `$lookup` para unir colecciones

`$lookup` realiza un left outer join entre colecciones.

```javascript
// Obtener publicaciones con datos del autor
const postsWithAuthor = await Post.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "authorInfo",
    },
  },
  { $unwind: "$authorInfo" }, // Convierte el arreglo en objeto
  {
    $project: {
      title: 1,
      content: 1,
      "authorInfo.name": 1,
      "authorInfo.email": 1,
    },
  },
]);
```

### 2.4. `$unwind` para aplanar arreglos

Cuando un campo es un arreglo, `$unwind` genera un documento por cada elemento.

```javascript
// Publicaciones con comentarios y sus autores
const postsWithComments = await Post.aggregate([
  { $unwind: { path: "$comments", preserveNullAndEmptyArrays: true } },
  {
    $lookup: {
      from: "users",
      localField: "comments.user",
      foreignField: "_id",
      as: "commentAuthor",
    },
  },
  { $unwind: { path: "$commentAuthor", preserveNullAndEmptyArrays: true } },
]);
```

### 2.5. `$facet` y `$bucket` para estadísticas

- **`$facet`**: Múltiples pipelines en una sola etapa.
- **`$bucket`**: Agrupa por rangos numéricos.

```javascript
// Estadísticas de usuarios por edad
const stats = await User.aggregate([
  {
    $facet: {
      ageGroups: [
        {
          $bucket: {
            groupBy: "$age",
            boundaries: [0, 18, 30, 50, 100],
            default: "other",
          },
        },
      ],
      averageAge: [{ $group: { _id: null, avg: { $avg: "$age" } } }],
      totalUsers: [{ $count: "count" }],
    },
  },
]);
```

---

## 3. Query Quest: El Desafío de Optimización

A continuación, tres consultas ineficientes que tardan >500ms en un dataset grande (100k documentos). Los estudiantes deben reescribirlas usando agregaciones y optimización.

### 3.1. Consulta ineficiente #1 (sin índices)

**Original (lenta):**

```javascript
// Buscar publicaciones con más de 10 likes y ordenar por fecha
const posts = await Post.find({ likes: { $gt: 10 } }).sort({ createdAt: -1 });
```

**Problema:** Falta índice en `likes` y `createdAt`.

**Solución con agregación e índice compuesto:**

```javascript
// Crear índice en MongoDB (una sola vez)
// db.posts.createIndex({ likes: 1, createdAt: -1 });

const postsOptimized = await Post.aggregate([
  { $match: { likes: { $gt: 10 } } },
  { $sort: { createdAt: -1 } },
  { $project: { title: 1, content: 1, likes: 1, createdAt: 1 } },
]);
```

### 3.2. Consulta ineficiente #2 (N+1 con populate)

**Original (lenta):**

```javascript
// Obtener publicaciones con autor (N+1)
const posts = await Post.find().populate("author");
// Esto genera 1 consulta para posts + N consultas para cada autor.
```

**Solución con `$lookup` (una sola consulta):**

```javascript
const postsOptimized = await Post.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "author",
    },
  },
  { $unwind: "$author" },
  { $project: { title: 1, content: 1, "author.name": 1, "author.email": 1 } },
]);
```

### 3.3. Consulta ineficiente #3 (múltiples etapas sin filtro)

**Original (lenta):**

```javascript
// Calcular promedio de likes por usuario, pero sin filtrar
const result = await Post.aggregate([
  { $group: { _id: "$author", avgLikes: { $avg: "$likes" } } },
  { $sort: { avgLikes: -1 } },
]);
// Procesa todos los documentos sin filtro previo
```

**Solución:** Agregar `$match` inicial para limitar el conjunto, y usar índices.

```javascript
const resultOptimized = await Post.aggregate([
  { $match: { createdAt: { $gte: new Date("2023-01-01") } } }, // solo publicaciones recientes
  { $group: { _id: "$author", avgLikes: { $avg: "$likes" } } },
  { $sort: { avgLikes: -1 } },
  { $limit: 10 },
]);
```

### 3.4. Análisis con `explain()`

Usa `explain('executionStats')` para comparar rendimiento.

```javascript
const explainResult = await Post.aggregate([
  { $match: { likes: { $gt: 10 } } },
  { $sort: { createdAt: -1 } },
]).explain("executionStats");
console.log(explainResult.executionStats);
// Analiza: totalDocsExamined, executionTimeMillis, indexUsed, etc.
```

**Resultado esperado:** La versión optimizada reduce `totalDocsExamined` y `executionTimeMillis`.

---

## 4. Validación Robusta con Zod y Joi

### 4.1. Comparativa Zod vs Joi

- **Zod**: TypeScript-first, inferencia de tipos, más ligero.
- **Joi**: Maduro, amplia documentación, amplia gama de validaciones.

Ambos son excelentes. Usaremos Zod para ejemplos (por su integración con TypeScript), pero los conceptos aplican a Joi.

### 4.2. Esquemas de validación para endpoints

Definimos esquemas para las rutas.

```javascript
// src/validators/userValidator.js
const z = require("zod");

const userSchema = z.object({
  name: z.string().min(3, "Nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  age: z.number().int().positive().min(18, "Debe ser mayor de 18 años"),
  password: z.string().min(6, "Contraseña mínimo 6 caracteres"),
});

const updateUserSchema = userSchema.partial(); // todos opcionales
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

module.exports = { userSchema, updateUserSchema, loginSchema };
```

### 4.3. Middleware de validación

Creamos un middleware genérico que valida contra un esquema.

```javascript
// src/middleware/validate.js
const { z } = require("zod");

const validate = (schema) => (req, res, next) => {
  try {
    const validated = schema.parse(req.body);
    req.body = validated; // reemplazamos con datos validados
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));
      return res.status(400).json({ errors: formattedErrors });
    }
    next(error);
  }
};

module.exports = validate;
```

Uso en rutas:

```javascript
// src/routes/userRoutes.js
const router = require("express").Router();
const { userSchema, updateUserSchema } = require("../validators/userValidator");
const validate = require("../middleware/validate");
const { createUser, updateUser } = require("../controllers/userController");

router.post("/", validate(userSchema), createUser);
router.put("/:id", validate(updateUserSchema), updateUser);
```

### 4.4. Manejo de errores y mensajes personalizados

Podemos personalizar mensajes en el esquema:

```javascript
const userSchema = z.object({
  name: z.string().min(3, { message: "Nombre muy corto" }),
  email: z.string().email({ message: "Email incorrecto" }),
});
```

Y en el middleware capturar y devolver respuestas claras.

---

## 5. Detección de Errores: Blindando el Backend

### 5.1. Código con bugs (validación y populate)

Se entrega el siguiente código con 5 bugs:

**Bug 1:** No se valida el email (permite nulo).
**Bug 2:** Se permite `age` como string (debe ser número).
**Bug 3:** Populate sin verificar existencia del ID (referencia a usuario inexistente).
**Bug 4:** No se maneja error de población si el autor fue eliminado.
**Bug 5:** Se permite crear publicaciones sin título (campo obligatorio).

```javascript
// Ejemplo de código con bugs (controllers/postController.js)

// Crear publicación
exports.createPost = async (req, res) => {
  const { title, content, author } = req.body;
  // BUG 1: No se valida title
  // BUG 2: author no se verifica que exista en DB
  const post = new Post({ title, content, author });
  await post.save();
  res.status(201).json(post);
};

// Obtener publicaciones con autor
exports.getPostsWithAuthor = async (req, res) => {
  const posts = await Post.find().populate("author");
  // BUG 3: Si author es null o no existe, populate devuelve null, pero no se maneja
  // BUG 4: No se filtran publicaciones cuyo autor fue eliminado
  res.json(posts);
};

// Actualizar usuario (validación)
exports.updateUser = async (req, res) => {
  const { name, email, age } = req.body;
  // BUG 5: Se permite email nulo y age como string
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, age },
    { new: true },
  );
  res.json(updated);
};
```

### 5.2. Correcciones y explicación

**Solución con validación Zod y manejo de referencias:**

```javascript
// controllers/postController.js
const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  // La validación ya se hizo en middleware, pero verificamos existencia del autor
  const { title, content, author } = req.body;
  const userExists = await User.findById(author);
  if (!userExists) {
    return res.status(400).json({ error: "El autor no existe" });
  }
  const post = new Post({ title, content, author });
  await post.save();
  res.status(201).json(post);
};

exports.getPostsWithAuthor = async (req, res) => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    { $unwind: { path: "$author", preserveNullAndEmptyArrays: false } }, // elimina posts sin autor
  ]);
  res.json(posts);
};

exports.updateUser = async (req, res) => {
  // La validación del body ya está en middleware
  const { name, email, age } = req.body;
  // Aseguramos que age sea número
  const updateData = { name, email, age: Number(age) };
  const updated = await User.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!updated) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(updated);
};
```

**Lección:** Un error de validación puede causar caídas del sistema (ej. Twitter 2013: fallo en validación de tweets que permitía campos nulos y rompía la lógica de caché).

---

## 6. Relaciones y Populate en Profundidad

### 6.1. El problema N+1

Cuando usamos `populate` en Mongoose, por cada documento padre se realiza una consulta adicional para obtener los hijos. Si tenemos 100 publicaciones, haremos 1 consulta para las publicaciones + 100 para los autores = 101 consultas. Esto es ineficiente.

### 6.2. Solución con `populate` optimizado (select, match)

Podemos optimizar `populate` usando `select` para traer solo campos necesarios y `match` para filtrar.

```javascript
const posts = await Post.find().populate({
  path: "author",
  select: "name email",
  match: { active: true }, // solo autores activos
});
// Aún así, genera N+1 consultas, pero reduce datos transferidos.
```

### 6.3. Alternativa escalable: `$lookup` con pipeline

Usando `$lookup` con pipeline podemos filtrar, proyectar y ordenar en una sola consulta.

```javascript
const posts = await Post.aggregate([
  {
    $lookup: {
      from: "users",
      let: { authorId: "$author" },
      pipeline: [
        { $match: { $expr: { $eq: ["$_id", "$$authorId"] }, active: true } },
        { $project: { name: 1, email: 1 } },
      ],
      as: "author",
    },
  },
  { $unwind: { path: "$author", preserveNullAndEmptyArrays: false } },
]);
```

### 6.4. Denormalización y caching

Para datos de solo lectura, podemos denormalizar (guardar el nombre del autor dentro de la publicación) y actualizar en cascada. También usar caching con Redis para evitar consultas repetidas.

```javascript
// Modelo Post con campo denormalizado
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  authorName: String, // denormalizado
});

// Al crear/actualizar usuario, actualizar posts
// O usar middleware en User para actualizar posts relacionados.
```

---

## 7. Debugging en Vivo

### 7.1. Identificar consultas lentas con MongoDB Profiler

Habilitar el profiler en MongoDB:

```javascript
db.setProfilingLevel(1, { slowms: 100 }); // registra consultas >100ms
db.system.profile.find().pretty();
```

### 7.2. Uso de `explain()` y análisis de índices

Ejecutar `explain('executionStats')` en una agregación:

```javascript
const stats = await Post.aggregate([...]).explain('executionStats');
console.log(stats.executionStats);
// Buscar: totalDocsExamined, totalKeysExamined, executionTimeMillis
// Si totalDocsExamined >> totalKeysExamined, falta índice.
```

Crear índices compuestos según las consultas más frecuentes.

```javascript
// Ejemplo: índice para consultas de posts por autor y fecha
PostSchema.index({ author: 1, createdAt: -1 });
```

### 7.3. Herramientas: Compass, Atlas Performance Advisor

- **MongoDB Compass**: Interfaz gráfica para ejecutar agregaciones y ver planes de ejecución.
- **Atlas Performance Advisor**: Sugiere índices basados en consultas lentas.

---

## 8. Casos Reales: Shopify y Netflix

### Shopify y el Black Friday

Shopify usa agregaciones para generar reportes de ventas en tiempo real durante el Black Friday. Utilizan pipelines con `$group`, `$bucket` y `$facet` para agregar millones de transacciones y mostrar dashboards con latencia < 1s.

**Ejemplo simplificado:**

```javascript
const salesReport = await Order.aggregate([
  { $match: { date: { $gte: startDate, $lte: endDate } } },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
      totalSales: { $sum: "$amount" },
      count: { $sum: 1 },
    },
  },
  { $sort: { _id: 1 } },
]);
```

### Netflix y las listas de películas

Netflix gestiona listas de películas (populate) mediante sistemas de caché y proyecciones específicas. No hacen `populate` en caliente; precomputan las listas y las sirven desde Redis.

**Patrón:** Usan `$lookup` para unir catálogo con metadatos, pero cachean el resultado.

---

## 9. Proyecto Final: Red Social Minimalista

Construiremos una API REST para una red social con:

- Usuarios (registro, login, perfil)
- Publicaciones (CRUD)
- Comentarios (anidados en publicaciones)
- Likes

**Requisitos:**

1. **Validaciones robustas** (Zod) en todos los endpoints.
2. **Optimización de consultas**: uso de agregaciones para obtener el feed de un usuario (publicaciones de amigos + las propias).
3. **Relaciones profundas**: al obtener una publicación, debe incluir autor, comentarios (con autor de comentario) y número de likes.
4. **Manejo de errores** y respuestas consistentes.

**Ejemplo de endpoint de feed optimizado:**

```javascript
// GET /api/feed/:userId
exports.getFeed = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).select("following");
  const following = user.following.concat(userId); // incluir propias publicaciones

  const feed = await Post.aggregate([
    { $match: { author: { $in: following } } },
    { $sort: { createdAt: -1 } },
    { $limit: 20 },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    { $unwind: "$author" },
    {
      $lookup: {
        from: "comments",
        let: { postId: "$_id" },
        pipeline: [
          { $match: { $expr: { $eq: ["$post", "$$postId"] } } },
          { $sort: { createdAt: -1 } },
          { $limit: 5 },
          {
            $lookup: {
              from: "users",
              localField: "user",
              foreignField: "_id",
              as: "user",
            },
          },
          { $unwind: "$user" },
          { $project: { content: 1, "user.name": 1, createdAt: 1 } },
        ],
        as: "recentComments",
      },
    },
    {
      $addFields: {
        likesCount: { $size: "$likes" },
      },
    },
    {
      $project: {
        title: 1,
        content: 1,
        author: 1,
        recentComments: 1,
        likesCount: 1,
        createdAt: 1,
      },
    },
  ]);

  res.json(feed);
};
```

**Código completo de modelos:**

```javascript
// models/User.js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

// models/Post.js
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

// models/Comment.js
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});
```

**Validadores con Zod:**

```javascript
// validators/postValidator.js
const z = require("zod");

const postSchema = z.object({
  title: z.string().min(1, "Título requerido"),
  content: z.string().optional(),
  author: z.string().regex(/^[0-9a-fA-F]{24}$/, "ID de autor inválido"),
});

const commentSchema = z.object({
  content: z.string().min(1, "Comentario requerido"),
  post: z.string().regex(/^[0-9a-fA-F]{24}$/),
  user: z.string().regex(/^[0-9a-fA-F]{24}$/),
});
```

**Middleware de validación** (igual que antes) y **controladores** con lógica de negocio.

---

---

## Recursos Adicionales

- Documentación de [MongoDB Aggregation](https://www.mongodb.com/docs/manual/aggregation/)
- [Zod Documentation](https://zod.dev/)
- [Mongoose Populate](https://mongoosejs.com/docs/populate.html)
- [Explain Plan](https://www.mongodb.com/docs/manual/reference/method/cursor.explain/)

---
