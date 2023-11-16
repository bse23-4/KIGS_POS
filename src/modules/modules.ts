<<<<<<< HEAD
export interface  Observer {
  notify: (productId: ProductInterface) => void;
=======
//observer interface for notifying observers and updating the cart.
export interface Observer {
  notify: (productId: ProductInterface) => string;
>>>>>>> 6cb1f948dc3368c1249033b2e9b72696938c0b92
  update: (productId: string) => void;
}

// product interface
export default interface ProductInterface {
  productName: string;
  productPrice: number;
  dateOfPurchase: Date | any;
  productImage: string | any;
  productDescription: string;
  productId: number;
  productCategory: string;
  productQuantity: number;
}
// cart service interface is the subject that notifies observers.
export interface CartServiceInterface {
  registerObserver: (observer: Observer) => void;
  notifyObservers: () => void;
}

export interface Product {
  name: string;
  price: number;
}

export interface PaymentMethod {
  pay(amount:string): string;
}
