/* eslint-disable class-methods-use-this */
/* eslint-disable prettier/prettier */
import ProductInterface from "renderer/modules/modules";

/* eslint-disable no-use-before-define */
class ProductCatalog {
  private static instance: ProductCatalog;

  private products: ProductInterface[];

  private constructor() {
    this.products = [];
  }

  public static getInstance(): ProductCatalog {
    if (!ProductCatalog.instance) {
      ProductCatalog.instance = new ProductCatalog();
    }
    return ProductCatalog.instance;
  }

  public addProduct(productName: ProductInterface): void {
    this.products = [...this.products,productName];
    // saving products on persistent storage.
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  public getProducts(): ProductInterface[] {
    // retrive saved products from localStorage
    const products = JSON.parse(`${localStorage.getItem("products")}`);
    if (products) {
      return products;
    }
    return [] as ProductInterface[];
  }
}

export default ProductCatalog;
