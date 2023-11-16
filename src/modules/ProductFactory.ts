import type ProductInterface from './modules';
/**
 * KIGGS SUPERMARKET POS SYSTEM
 */
// concrete product
class ConcreteProduct implements ProductInterface {
  // implementing all properties of the ProductInterface
  productName!: string;
  productPrice!: number;
  dateOfPurchase: any;
  productImage: any;
  productDescription!: string;
  productId!: number;
  productCategory!: string;
  productQuantity!: number;
// constructor to assign values to the properties
  constructor(params: ProductInterface) {
    this.productName = params.productName;
    this.productPrice = params.productPrice;
    this.dateOfPurchase = params.dateOfPurchase;
    this.productImage = params.productImage;
    this.productDescription = params.productDescription;
    this.productId = params.productId;
    this.productCategory = params.productCategory;
    this.productQuantity = params.productQuantity;
  }
}
// class Clothing implements ProductInterface {
//   productName!: string;
//   productPrice!: number;
//   dateOfPurchase: any;
//   productImage: any;
//   productDescription!: string;
//   productId!: number;
//   productCategory!: string;
//   productQuantity!: number;
// }

class ProductFactory {
  // factory method to create products
  createProduct(params: ProductInterface): ProductInterface {
    switch (params.productCategory) {
      case 'cloth':
        // return new Clothing();
      default:
        return new ConcreteProduct(params);
    }
  }
}
export default ProductFactory;
