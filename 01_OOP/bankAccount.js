/**
 * BankAccount class
 *
 * - Properties
 *     - accountNumber
 *     - accountHolder
 *     - balance (defaults to 0 if not provided)
 *
 * - Methods
 *     - deposit(amt) - increases balance by amt
 *     - withdraw(amt) - decreases balance by amt
 */

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amt) {
        if (amt <= 0) {
            console.log("Invalid amount. Please enter a positive number.");
            return;
        }

        this.balance += amt;
        console.log(`You deposited $${amt}.\tNew balance: $${this.balance}`);
    }

    withdraw(amt) {
        if (amt <= 0) {
            console.log("Invalid amount. Please enter a positive number.");
            return;
        }
        if (amt > this.balance) {
            console.log(`You can't withdraw that much! Your balance is $${this.balance}`);
            return;
        }

        this.balance -= amt;
        console.log(`You withdrew $${amt}.\tNew balance: $${this.balance}`);
    }
}

const acc1 = new BankAccount(123456789, "John Doe", 1000);
console.log(acc1.getBalance());
acc1.deposit(500);
acc1.withdraw(200);
