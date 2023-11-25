
//abstract class

class Payment {
    constructor(amount){
        this.amount = amount;
    }

    pay(){
        throw new Error("This method must be implemented")
    }
}

//implementation class

class StripePayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount);
    }
    pay(){
        console.log(`Paying ${this.amount} vía Stripe`)
    }
}

class PayPalPayment extends Payment {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }
    pay(){
        console.log(`Paying ${this.amount} with the ${this.email} paypal acount`)
    }
}

const payment1 = new StripePayment(100);
payment1.pay();
const payment2 = new PayPalPayment(200,"jgermanmm@gmail.com");
payment2.pay();