import type ProductInterface from './modules';
import type { Observer , CartServiceInterface } from './modules';
 export class CartService implements CartServiceInterface {
    private observers: Observer[] = [];
    private cart: ProductInterface[] = [];
    public registerObserver(observer: Observer): void {
      this.observers =  [...this.observers,observer];
    }

    // addObserver(observer: Observer) {
    //   this.observers = [...this.observers, observer];
    // }
   
    notifyObservers() {
      for (const observer of this.observers) {
        observer.notify(this.cart[this.cart.length - 1]);
      }
    }
  
    addProduct(product: ProductInterface) {
      this.cart = [...this.cart, product];
      this.notifyObservers();
    }
  }
  
 class Salesperson implements Observer {
    public notify(product: ProductInterface) {
      console.log(`Salesperson notified of new product added to cart: ${product.productName}`);
      }
    }
  const service = new CartService();

  const salesperson = new Salesperson();
