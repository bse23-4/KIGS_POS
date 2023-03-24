/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable func-names */

import ProductInterface from 'renderer/modules/modules';

/**
 * KIGGS SUPERMARKET POS SYSTEM
 */
class Product implements ProductInterface {
  productName!: string;

  productPrice!: number;

  dateOfPurchase: any;

  productImage: any;

  productDescription!: string;

  productId!: number;

  productCategory!: string;

  productQuantity!: number;

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
class Clothing implements ProductInterface {
  productName!: string;

  productPrice!: number;

  dateOfPurchase: any;

  productImage: any;

  productDescription!: string;

  productId!: number;

  productCategory!: string;

  productQuantity!: number;
}
class ProductFactory {
  createProduct(params: ProductInterface): Product {
    switch (params.productCategory) {
      case 'Clothing':
        return new Clothing();
      default:
        return new Product(params);
    }
  }
}

//
export default ProductFactory;
