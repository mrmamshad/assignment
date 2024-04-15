class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}


const pubali = new BankAccount(1001, "John Doe", 500);
const nationalbank = new BankAccount(1002, "Jane Smith", 1000);


pubali.deposit(200);
pubali.withdraw(50);
pubali.displayAccountInfo();

console.log("-------------------------");

nationalbank.deposit(500);
nationalbank.withdraw(1500); 
nationalbank.displayAccountInfo();
