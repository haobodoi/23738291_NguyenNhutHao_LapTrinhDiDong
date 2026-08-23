class BankAccount {
  constructor(public balance: number = 0) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be greater than 0.");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient balance.");
      return;
    }
    this.balance -= amount;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log("Balance:", account.balance);
