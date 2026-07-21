export const PORT = 3000;
export const HOST = "localhost";

const sumar = (a, b) => {
  return a + b;
};

export default { sumar };

function restar(a, b) {
  return a - b;
}

var products = [];

const productManager = {
  // propiedades
  products: [],
  idCounter: 0,
  // métodos
  addProduct: function (product) {
    this.products.push(product);
    this.idCounter++;
  },
  getProducts: function () {
    console.log(this.idCounter);
    return this.products;
  },
};

productManager.addProduct({ name: "Producto 1", price: 10 });

class ProductManager {
  constructor(listName= "Lista de productos") {
    this.products = [];
    this.idCounter = 0;
    this.listName = listName
  }

  addProduct(product) {
    this.products.push(product);
    this.idCounter++;
  }

  getProducts() {
    console.log(this.idCounter);
    return this.products;
  }
}

const productManagerInstance = new ProductManager();

const productManagerInstanceB = new ProductManager("Lista de productos BBB");

productManagerInstance.addProduct({ name: "Producto 1", price: 10 });
productManagerInstanceB.listName // "Lista de productos BBB"
productManagerInstance.listName // "Lista de productos"