import ProductCatalog from './ProductCatalog';
import ProductFactory from './ProductFactory';
import type ProductInterface from './modules';
import type { Observer , CartServiceInterface } from './modules';
 export class CartService implements CartServiceInterface {
    private observers: Observer[] = [];
    private cart: ProductInterface[] = [];

    public registerObserver(observer: Observer): void {
      this.observers =  [...this.observers,observer];
    }
   
    notifyObservers() {
      for (let index = 0; index < this.observers.length; index++) {
        this.observers[index].notify(this.cart[index]);
        //  observer.update(this.cart[this.cart.length - 1].productName);
      }
    }
    addProduct(product: ProductInterface) {
      this.cart = [...this.cart, product];
      // this.notifyObservers();
    }
  }
 export class Salesperson implements Observer {
    public notify(product: ProductInterface):string {
      return(`${product.productName} has been added to cart.`);
      }
    update(barcode: string): void {}
  }

  // Define the BarcodeScanner class, which implements the Observer interface
class BarcodeScanner implements Observer {
  constructor(private readonly cart: CartService) {}
    notify (productId: ProductInterface) {};
  // Update method to handle barcode scan events
  update(barcode: string): void {
      let p = new ProductCatalog();
      let product = p.getProducts().filter((product) => product.productName === barcode)[0];
    // Look up the product from the barcode

    if (product) {
      // Add the product to the cart
      // this.cart.addProduct(product);
    } else {
      console.log(`Could not find product for barcode ${barcode}.`);
    }
  }
}