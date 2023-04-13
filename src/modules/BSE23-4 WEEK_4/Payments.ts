import type { PaymentMethod } from "./modules";

  class Airtel implements PaymentMethod {
    constructor(private readonly phone: number, private readonly pin: number) {}
  
    pay(amount: number): void {
      console.log(`Paying  ${amount} with Airtel mobile money.`);
    }
  }
  
  class MTN implements PaymentMethod {
    constructor(private readonly phone: number, private readonly pin: number) {}
  
    pay(amount: number): void {
      console.log(`Paying ${amount} with MTN mobile money`);
    }
  }
  
  class PaymentGateWay {
    private method: PaymentMethod;
  
    constructor(method: PaymentMethod) {
      this.method = method;
    }
  
    setGateway(method: PaymentMethod): void {
      this.method = method;
    }
  
    pay(amount: number): void {
      this.method.pay(amount);
    }
  }
  
  // Example usage
  const airtel = new Airtel(0750482089 , 2580);
  const payment = new PaymentGateWay(airtel);
  
  payment.pay(100); // outputs: Paying 100 with credit card 1234 5678 9012 3456
  
  const mtn = new MTN(0778743490, 2580);
  payment.setGateway(mtn);
  
  payment.pay(50); // outputs: Paying 50 with PayPal account johndoe@example.com
  