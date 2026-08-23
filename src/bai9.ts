interface Animal {
  name: string;
  sound(): void;
}

const meo: Animal = {
  name: "Mèo",
  sound(): void {
    console.log("meo méo meo mèo meo");
  },
};

console.log(dog.name);
dog.sound();
