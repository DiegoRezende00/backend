class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  } // Método para adicionar um produto
  addProduct(title, description, price, thumbnail, code, stock) {
    // Validação de campos obrigatórios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Erro: Todos os campos são obrigatórios.");
      return;
    } // Verificação se o código é único
    if (this.products.find((product) => product.code === code)) {
      console.log(`Erro: O código "${code}" já está em uso.`);
      return;
    } // Criação do novo produto com ID automático
    const product = {
      id: this.nextId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    console.log(`Produto adicionado: ${title}`);
  } // Método para buscar produto pelo ID
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(`Produto encontrado: ${product.title}`);
      return product;
    } else {
      console.log("Erro: Não encontrado");
      return null;
    }
  } // Método para listar todos os produtos
  listProducts() {
    if (this.products.length === 0) {
      console.log("Nenhum produto disponível.");
    } else {
      console.log("Produtos disponíveis:");
      this.products.forEach((product) => {
        console.log(
          `- ${product.title} (Código: ${product.code}, ID: ${product.id})`
        );
      });
    }
  }
} // Exemplo de uso
const productManager = new ProductManager();
productManager.addProduct(
  "Produto 1",
  "Descrição do Produto 1",
  10.0,
  "/caminho/imagem1.jpg",
  "P001",
  100
);
productManager.addProduct(
  "Produto 2",
  "Descrição do Produto 2",
  20.0,
  "/caminho/imagem2.jpg",
  "P002",
  200
);
productManager.addProduct(
  "Produto 1",
  "Descrição do Produto 1",
  10.0,
  "/caminho/imagem1.jpg",
  "P001",
  100
); // Deve gerar erro de código duplicado
productManager.listProducts();
productManager.getProductById(1); // Deve retornar o Produto 1
productManager.getProductById(3); // Deve gerar erro "Não encontrado"
