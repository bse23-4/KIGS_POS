import type ProductInterface  from "./modules";
class BaseProduct implements ProductInterface {
  constructor(public name: string, public price: number) {}
  productName!: string;
  productPrice!: number;
  dateOfPurchase: any;
  productImage: any;
  productDescription!: string;
  productId!: number;
  productCategory!: string;
  productQuantity!: number;
}

class ProductDecorator implements ProductInterface {
  constructor(public product: ProductInterface) {}
  productName!: string;
  productPrice!: number;
  dateOfPurchase: any;
  productImage: any;
  productDescription!: string;
  productId!: number;
  productCategory!: string;
  productQuantity!: number;

  get name() {
    return this.product.productName;
  }

  get quantity() {
    return this.product.productQuantity;
  }
}

export class GiftWrapDecorator extends ProductDecorator {
  get name() {
    return this.product.productName;
  }

  get price() {
    return parseInt(this.product.productPrice.toString())+ 800;
  }
}

export class ExpressShippingDecorator extends ProductDecorator {
  get name() {
    return `${this.product.productName}`;
  }

  get price() {
    return parseInt(this.product.productPrice.toString()) + 1000;
  }
}