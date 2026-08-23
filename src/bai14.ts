class Employee {
  constructor(public name: string, public salary: number) {}

  work(): void {
    console.log(`${this.name} đang làm`);
  }
}

class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} đang quản lý team`);
  }
}

class Developer extends Employee {
  code(): void {
    console.log(`${this.name} đang viết code`);
  }
}

const manager = new Manager("Hảo", 3000);
const developer = new Developer("An", 2500);

manager.work();
manager.manage();

developer.work();
developer.code();
