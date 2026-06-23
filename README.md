# Programación Backend I: Desarrollo Avanzado de Backend Flex

---


## Convivencia
- Respeto
- Canales oficiales 

## Metodología de las CLASES
1. Ver los temas ASYNC
2. Traer preguntas para las clases en vivo 
3. Repaso
4. Networking - Estudiar - Codear - Trabajar en EQUIPO

## Canales
- Plataforma
  - Chat Comisión
  - Chat individuales
  - Mensajes Q&A por zoom -> Ivan -> al Grupal 
- Repo

- https://github.com/HX-MLuquez/{numero-de-la-comision}-Backend-I

Ejemplo: https://github.com/HX-MLuquez/95195-Backend-I

## En este repositorio iremos trabajando y guardando todo el material del curso


---


# REPASO - ESTRUCTURA de CARPETAS para una API REST con tech Node + Express + Mongo + Mongoose 
```bash
api/
│
├── src/
│   │
│   ├── data-access-object/    # or managers/    or dao/
│   │   └── UserManager.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── services/
│   │   └── UserService.js
│   │
│   ├── controllers/
│   │   └── UserController.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── database/
│   │    └── connect.js
│   └── app.js
│
│   
├── index.js
├── .env
└── package.json
```

```bash
FLOW

GET http://localhost:3000/api/users 

- app.js
app.use("/api", routes);

- routes/index.js 
router.use("/users", userRouter)

- routes/userRoutes.js
router.get("/", userController.getAllUsers);

- controllers/userController.js
class UserController {
  async getAllUsers(req, res) {

- services/userService.js
class UserService {
  async getAllUsers() {

- data-access-object/userDao.js

- models/user.model.js

- MongoDB - cloud

```
