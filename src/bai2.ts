class Person {
  constructor(public name: string, public age: number) {}

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, public grade: number) {
    super(name, age);
  }

  displayAllInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    );
  }
}

const student = new Student("Hao dep trai sieu cap", 21, 9.5);
student.displayAllInfo();
