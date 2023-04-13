import ProductFactory from './ProductFactory';
import type ProductInterface from './modules';
import type { Observer , CartServiceInterface } from './modules';
 export class CartService implements CartServiceInterface {
    private observers: Observer[] = [];
    private cart: ProductInterface[] = [];

    public registerObserver(observer: Observer): void {
      this.observers =  [...this.observers,observer];
    }

    addObserver(observer: Observer) {
      this.observers = [...this.observers, observer];
    }
   
    notifyObservers() {
      for (const observer of this.observers) {
        observer.notify(this.cart[this.cart.length - 1]);
         observer.update(this.cart[this.cart.length - 1].productName);
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
    update(barcode: string): void {
      console.log(`Salesperson notified of new product added to cart: ${barcode}`);
    
    }
  }
    // Define the BarcodeScanner class, which implements the Observer interface
class BarcodeScanner implements Observer {
  constructor(private readonly cart: CartService) {}
  notify (productId: ProductInterface) {};

  // Update method to handle barcode scan events
  update(barcode: string): void {
    // Look up the product from the barcode
    const product = getProductFromBarcode(barcode);

    if (product) {
      // Add the product to the cart
      this.cart.addProduct(product);
    } else {
      console.log(`Could not find product for barcode ${barcode}.`);
    }
  }
}

// Helper function to look up a product from a barcode
function getProductFromBarcode(barcode: string) : ProductInterface {
  let p = new ProductFactory()
  let cart = new CartService();

   let product = {
      productName: 'Dell XPS3',
      productPrice: 1200,
      dateOfPurchase: Date.now(),
      productImage: '',
      productDescription: '13-inch laptop with Intel Core i7 processor',
      productId: 1,
      productCategory: 'Electronics',
      productQuantity: 3,
    };
let products :ProductInterface[] = [
  p.createProduct(product),
];
   return products.filter((product) => product.productName === barcode)[0];
}
  const service = new CartService();

  const salesperson = new Salesperson();
