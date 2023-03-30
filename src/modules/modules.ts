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
export interface Observer {
  update: (productId: number) => void;
}

export interface Subject {
  registerObserver: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
  notifyObservers: (productId: number) => void;
}
