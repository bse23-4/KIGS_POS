import type { PaymentMethod } from "./modules";

  class Airtel implements PaymentMethod {
    constructor(private readonly phone: string, private readonly pin: string) {}
    pay(amount: string): string {
      return (`Paying ${amount} with ${this.phone}.`);
    }
  }
  
  class MTN implements PaymentMethod {
    
    constructor(private readonly phone:string, private readonly pin: string) {
     
    }
  
    pay(amount: string): string {
      return (`Paying ${amount} with ${this.phone}.`);
    }
  }
  
  export default class PaymentGateWay {
    private amount: string;
    private phone: string;
    constructor(amount: string,phone:string) {
      this.amount = amount;
      this.phone = phone;
    }
  
    setGateway(method: string): string {
      switch (method) {
        case 'MTN':
            const mtn = new MTN(this.phone, '2580');
           return mtn.pay(this.amount);
        default:
          const airtel = new Airtel(this.phone, '2580');
          return airtel.pay(this.amount);
      }
  }
}
  // Example usage
  // const airtel = new Airtel('0750482089' , '2580');
  // const payment = new PaymentGateWay(airtel);
  
  // payment.pay(100); // outputs: Paying 100 with credit card 1234 5678 9012 3456
  
 
  
  // payment.pay(50); // outputs: Paying 50 with PayPal account johndoe@example.com
  