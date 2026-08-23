export class ProtectedAnimal {
    constructor(public name: string) {}

    protected makeSound(): void {
        console.log("Dong vat keu sao ");
    }

    public speak(): void {
        this.makeSound();
    }
}

export class ProtectedDog extends ProtectedAnimal {
    protected override makeSound(): void {
        console.log("Quấu Quấu Quấu");
    }
}

export class ProtectedCat extends ProtectedAnimal {
    protected override makeSound(): void {
        console.log("méo méo méo");
    }
}

console.log(`Bai 28`);
const protectedDog = new ProtectedDog("Kiki");
protectedDog.speak();

const protectedCat = new ProtectedCat("MeoMeo");
protectedCat.speak();