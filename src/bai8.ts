class Product {
  constructor(public name: string, public price: number) {}
}

const products: Product[] = [
  new Product("bán phím", 80),
  new Product("màn hình", 250),
  new Product("Chuột", 120),
  new Product("USB", 20),
];

const expensiveProducts = products.filter(product => product.price > 100);

console.log(expensiveProducts);
