class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (!value.trim()) {
      throw new Error("Name cannot be empty.");
    }
    this._name = value;
  }
}

const user = new User("Nhut");
console.log(user.name);

user.name = "Hao";
console.log(user.name);
