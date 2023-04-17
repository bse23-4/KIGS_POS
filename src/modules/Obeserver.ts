import ProductCatalog from './ProductCatalog';
import type ProductInterface from './modules';
import type { Observer , CartServiceInterface } from './modules';
 export class CartService implements CartServiceInterface {
    private observers: Observer[] = [];
    private cart: ProductInterface[] = [];

    public registerObserver(observer: Observer): void {
      this.observers =  [...this.observers,observer];
    }
   
    notifyObservers():string {
      let msg = '';
      for (let index = 0; index < this.observers.length; index++) {
       msg = this.observers[index].notify(this.cart[index]);
      }
      return msg;
    }
    addProduct(product: ProductInterface):string {
      this.cart = [...this.cart, product];

     return this.notifyObservers();
    }
  }
 export class Salesperson implements Observer {
  private product:ProductInterface;
  constructor(product:ProductInterface){
    this.product = product;
  }
    public notify():string {
      return(`${this.product.productName} has been added to cart.`);
      }
    update(barcode: string): void {}
  }

  // Define the BarcodeScanner class, which implements the Observer interface
export default class BarcodeScanner implements Observer {
  constructor(private readonly cart: CartService) {}
    notify (productId: ProductInterface) {
      return "";
    };
  // Update method to handle barcode scan events
  update(barcode: string): void {
      let p = new ProductCatalog();
      let product = p.getProducts().find((product) => product.productName === barcode);
    // Look up the product from the barcode
    if (product) {
      // Add the product to the cart
      this.cart.addProduct(product);
      // this.cart.addProduct(product);
    } else {
      console.log(`Could not find product for barcode ${barcode}.`);
    }
  }
}