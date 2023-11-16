import type { PaymentMethod } from "./modules";

  class Airtel implements PaymentMethod {
    constructor(private readonly phone: string, private readonly pin: string) {}
    pay(amount: string): string {
      return (`Paying with Airtel ${amount} using ${this.phone}.`);
    }
  }
  class MTN implements PaymentMethod {
    
    constructor(private readonly phone:string, private readonly pin: string) {
    }
    pay(amount: string): string {
      return (`Paying with MTN  ${amount} using ${this.phone}.`);
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
<<<<<<< HEAD
  
  // Example usage
  const airtel = new Airtel('0750482089' , '2580');
  const payment = new PaymentGateWay(airtel);
  
  payment.pay(100); // outputs: Paying 100
  
  const mtn = new MTN('0778743490', '2580');
  payment.setGateway(mtn);
  
  payment.pay(50); // outputs: Paying 50
  
=======
}
>>>>>>> 6cb1f948dc3368c1249033b2e9b72696938c0b92
