const express = require("express");
const app = express();
const fs = require("fs").promises;
const path = require("path");


app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes -> body {} -> {kvcndjk}

const productsFilePath = path.join(__dirname, "products.json");

console.log(productsFilePath);
// C:\Users\mauuu\OneDrive\Escritorio\95195 BACK-I LUNES 20.30 a 22.30\95195-CLASE\CLASE_25-10-27\server-llora\products.json

// FUNCION de lectura de archivo JSON
const readProductsFile = async () => {
  try {
    const data = await fs.readFile(productsFilePath, "utf-8");
    return JSON.parse(data); // [{obeject}]
  } catch (error) {
    console.error("Error reading products file:", error);
    return [];
  }
};

const writeProductsFile = async (products) => {
  try {
    await fs.writeFile(
      productsFilePath,
      JSON.stringify(products, null, 2),
      "utf-8",
    );
  } catch (error) {
    console.error("Error writing products file:", error);
  }
};

// app {use, get, post, put, delete, listen, set, engine, render, ...}

const port = 3000;

app.get("/", (req, res) => {
  res.send({
    title: "Bienvenido a mi API",
    version: "1.0.0",
  });
});

// CRUD - POST - CREATE -- Read - GET -- U - Update - PUT -- D - Delete - DELETE

app.get("/products", async (req, res) => {
  const products = await readProductsFile();
  const activeProducts = products.filter((p) => p.active);
  res.json(activeProducts);
});

app.post("/products", async (req, res) => {
  const newProduct = req.body;
  const products = await readProductsFile();
  products.push(newProduct);
  await writeProductsFile(products);
  res.status(201).json(newProduct);
});

// /products/122
app.get("/products/:id_super", async (req, res) => {
  const productId = parseInt(req.params.id_super);
  // params {id_super: '122'}
  const products = await readProductsFile();
  const product = products.find((p) => p.id === productId && p.active);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});


// PUT - UPDATE

app.put("/products/update/:id_super", async (req, res) => {
  const productId = parseInt(req.params.id_super);
  const updatedProduct = req.body;
  const products = await readProductsFile();
  const productIndex = products.findIndex((p) => p.id === productId && p.active);
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    await writeProductsFile(products);
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE

app.delete("/products/delete/:id_super", async (req, res) => {
    const productId = parseInt(req.params.id_super);
    const products = await readProductsFile();
    const productIndex = products.findIndex((p) => p.id === productId && p.active);
    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1)[0];
        await writeProductsFile(products);
        res.json(deletedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});


// SOFT DELETE

app.delete("/products/soft-delete/:id_super", async (req, res) => {
    const productId = parseInt(req.params.id_super);
    const products = await readProductsFile();
    const productIndex = products.findIndex((p) => p.id === productId && p.active);
    if (productIndex !== -1) {
        products[productIndex].active = false;
        await writeProductsFile(products);
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


/*
Ejemplos de prueba:

product1 {
  "id": 122,
  "name": "TV Samsung",
  "price": 1003
}

product2 {
  "id": 243,
  "name": "TV LG",
  "price": 20099
}

product3 {
  "id": 345,
  "name": "TV Sony",
  "price": 3000
}
*/