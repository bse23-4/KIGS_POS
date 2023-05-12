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
}