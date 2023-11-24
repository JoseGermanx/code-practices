class Wallet {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance(){
    return console.log(`The balance of the acount is ${this.#balance}`);
  }

  getTransaction(amount) {
    this.#balance = amount;
    console.log(`The transaction is of ${this.#balance}`)
  }
}

const myWallet = new Wallet(100);
myWallet.getBalance();
myWallet.getTransaction(200);

