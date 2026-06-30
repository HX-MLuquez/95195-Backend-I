// app -> server

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "db");
console.log("dbPath actual:", dbPath);

const app = express();
app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes -> body {} -> {kvcndjk}

app.get("/", (req, res) => {
  res.send(`<div>
    <h1>Bienvenido a mi aplicación</h1>
    <p>Esta es la página de inicio de mi aplicación.</p>
  </div>`);
});

// Crear la clase ProductManager (DAO) para manejar la lectura y escritura de productos en el archivo JSON
class ProductManager {
  constructor() {
    this.filePath = path.join(dbPath, "products.json");
  }

  async getProducts() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading products file:", error);
      return [];
    }
  }
  async addProduct(product) {
    try {
      const products = await this.getProducts();
      products.push(product);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(products, null, 2),
        "utf-8",
      );
    } catch (error) {
      console.error("Error writing products file:", error);
    }
  }
  async deleteProduct(product) {
    try {
      const products = await this.getProducts();
      const index = products.findIndex((p) => p.id === product.id);
      if (index === -1) {
        console.error("Product not found for deletion:", product);
        return false;
      }
      const updatedProducts = products.map((p) =>
        p.id === product.id ? { ...p, active: false } : p,
      );
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(updatedProducts, null, 2),
        "utf-8",
      );
      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      return false;
    }
  }
}
const productManager = new ProductManager();

/*
productA {
id: "code-001",
name: "Producto A",
price: 10.99,
description: "Descripción del producto A",
active: true
}
*/

// ROUTE
app.post("/products", async (req, res) => {
  try {
    // CONTROLLER
    const newProduct = req.body;
    // SERVICE (Lógica de negocio)
    if (!newProduct.name || !newProduct.price) {
      return res
        .status(400)
        .json({ message: "Nombre y precio son requeridos" });
    }
    await productManager.addProduct(newProduct);
    // CONTROLLER
    res.status(201).json({ message: "Producto agregado exitosamente" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Error al agregar el producto" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    const activeProducts = products.filter((p) => p.active);
    res.status(200).json(activeProducts);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const products = await productManager.getProducts();
    const product = products.find((p) => p.id === productId);
    if (product) {
      product.active = false; // Marcar como inactivo (soft delete)
      await productManager.deleteProduct(product);
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error getting product by ID:", error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
});

// soft delete
app.delete("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const products = await productManager.getProducts();
    const product = products.find((p) => p.id === productId);
    if (product) {
      const result = await productManager.deleteProduct(product);
      if (result) {
        res.status(200).json({ message: "Producto eliminado exitosamente" });
      } else {
        res.status(500).json({ message: "Error al eliminar el producto" });
      }
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
});

export default app;

/*
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
*/
