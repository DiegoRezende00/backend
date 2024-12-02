class TicketManager {
  constructor(basePrice) {
    this.events = [];
    this.#basePrice = basePrice;
  }

  #basePrice;

  addEvent(name, price) {
    const finalPrice = price + this.#basePrice;
    this.events.push({ name, price: finalPrice });
  }
  listEvents() {
    return this.events.map((event) => `${event.name}: R$${event.price}`);
  }
}

const manager = new TicketManager(50); // Inicializa o TicketManager com um preço base de 50
manager.addEvent("Concerto", 200); // Adiciona um evento com o nome 'Concerto' e preço original de 200
manager.addEvent("Teatro", 150); // Adiciona um evento com o nome 'Teatro' e preço original de 150
console.log(manager.listEvents());

let joao = "     Teste";
console.log(joao.trim());
