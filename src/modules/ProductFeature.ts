import type { Product } from "./modules";
class BaseProduct implements Product {
  constructor(public name: string, public price: number) {}
}

class ProductDecorator implements Product {
  constructor(public product: Product) {}

  get name() {
    return this.product.name;
  }

  get price() {
    return this.product.price;
  }
}

class GiftWrapDecorator extends ProductDecorator {
  get name() {
    return `${this.product.name} (Gift Wrapped)`;
  }

  get price() {
    return this.product.price + 5;
  }
}

class ExpressShippingDecorator extends ProductDecorator {
  get name() {
    return `${this.product.name} (Express Shipping)`;
  }

  get price() {
    return this.product.price + 10;
  }
}

const baseProduct = new BaseProduct("Product", 10);
const giftWrappedProduct = new GiftWrapDecorator(baseProduct);
const expressShippingProduct = new ExpressShippingDecorator(baseProduct);

console.log(baseProduct.name); // "Product"
console.log(baseProduct.price); // 10

console.log(giftWrappedProduct.name); // "Product (Gift Wrapped)"
console.log(giftWrappedProduct.price); // 15

console.log(expressShippingProduct.name); // "Product (Express Shipping)"
console.log(expressShippingProduct.price); // 20