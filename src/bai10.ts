class Account {
  public owner: string;
  private balance: number;
  readonly id: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new Account(2, "Di Van Dong", 5000);

console.log("ID:", account.id);
console.log("Owner:", account.owner);
console.log("Balance:", account.getBalance());


