class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name}: Quấu Quấu Quấu`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name}: Méo méo méo`);
  }
}

const dog = new Dog("Kiki");
const cat = new Cat("Chau Do");

dog.bark();
cat.meow();
