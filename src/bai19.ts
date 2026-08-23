class Animal {
  sound(): void {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  override sound(): void {
    console.log("Chó thì sủa gâu gâu");
  }
}

class Cat extends Animal {
  override sound(): void {
    console.log("mèo kêu méo méo");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => animal.sound());
