import type ProductInterface  from "./modules";

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

}

export class GiftWrapDecorator extends ProductDecorator {
  get price() {
    return parseInt(this.product.productPrice.toString())+ 800;
  }
}

export class ExpressShippingDecorator extends ProductDecorator {

  get price() {
    return parseInt(this.product.productPrice.toString()) + 1000;
  }
}