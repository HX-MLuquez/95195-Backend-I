const express = require("express");
const app = express();

app.use(express.json());

// Importar rutas

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de mi proyecto final");
});

module.exports = app;
