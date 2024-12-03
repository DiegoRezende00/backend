const fs = require("fs");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const usuariosFile = "Usuarios.json";

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.nextId = 1;

    if (fs.existsSync(this.path)) {
      const data = fs.readFileSync(this.path);
      this.products = JSON.parse(data);
      this.nextId =
        this.products.length > 0
          ? this.products[this.products.length - 1].id + 1
          : 1;
    } else {
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  } // Método para adicionar um produto
  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;
    // Validação de campos obrigatórios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Erro: Todos os campos são obrigatórios.");
      return;
    } // Verificação se o código é único
    if (this.products.find((product) => product.code === code)) {
      console.log(`Erro: O código "${code}" já está em uso.`);
      return;
    } // Criação do novo produto com ID automático
    const newProduct = {
      id: this.nextId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    this._saveToFile();
    console.log(`Produto adicionado: ${title}`);
  }

  // Método para buscar produto pelo ID
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(`Produto encontrado: ${product.title}`);
      return product;
    } else {
      console.log("Erro: Não encontrado");
      return null;
    }
  }

  getProducts() {
    if (this.products.length === 0) {
      console.log("Nenhum produto disponível!");
    } else {
      console.log("Produtos disponíveis:");
      return this.products;
    }
  }

  updateProduct(id, updateProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updateProduct, id };
      this._saveToFile();
      console.log(`Produto atualizado: ${this.products[index].title}`);
    } else {
      console.log("Erro: Não encontrado");
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const removeProduct = this.products.splice(index, 1);
      this._saveToFile();
      console.log(`Produto removido: ${removeProduct[0].title}`);
    } else {
      console.log("Erro: Não encontrado");
    }
  }

  _saveToFile() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
  }
}
const productManager = new ProductManager("products.json"); // Adicionar produtos
productManager.addProduct({
  title: "Tênis nike",
  description: "Nike air force",
  price: 1050.0,
  thumbnail: "https://imgnike-a.akamaihd.net/1300x1300/024583IDA10.jpg",
  code: "P001",
  stock: 100,
});
productManager.addProduct({
  title: "Tênis adidas",
  description: "Tênis adidas Originals Samba",
  price: 220.0,
  thumbnail:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e0564c27f754915b743afa200c7db08_9366/Tenis_adidas_Originals_Samba_Branco_ID2047_01_standard.jpg",
  code: "P002",
  stock: 200,
}); // Listar todos os produtos // Buscar produto por ID
productManager.getProductById(1);
productManager.getProductById(3); // Deve gerar erro "Não encontrado" // Atualizar produto
productManager.updateProduct(1, { price: 950.0, stock: 90 }); // Deletar produto
productManager.deleteProduct(2);
