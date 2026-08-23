class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  constructor(public products: Product[]) {}

  calculateTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

const order = new Order([
  new Product("Keyboard", 80),
  new Product("Monitor", 250),
  new Product("Mouse", 120),
]);

console.log("Total price:", order.calculateTotalPrice());
