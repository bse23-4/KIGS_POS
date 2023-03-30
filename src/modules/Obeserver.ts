import type { Observer , Subject } from './modules';
 export class Cart implements Subject {
    private observers: Observer[] = [];
  
    public registerObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    public removeObserver(observer: Observer): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    public notifyObservers(productId: number): void {
      for (const observer of this.observers) {
        observer.update(productId);
      }
    }
  }
  
  class Salesperson implements Observer {
    public update(productId: number): void {
      console.log(`Salesperson notified of product ${productId} added to cart.`);
    }
  }
  
  const cart = new Cart();
  const salesperson = new Salesperson();
  
  cart.registerObserver(salesperson);
  
  // When a product is added to the cart
  cart.notifyObservers(123);
//   Received message. The Observer pattern