/* eslint-disable class-methods-use-this */
/* eslint-disable prettier/prettier */
import type ProductInterface from "./modules";

/* eslint-disable no-use-before-define */
class ProductCatalog {
  private static instance: ProductCatalog;

  private products: ProductInterface[];

  private constructor() {
    if (localStorage.getItem("products") === undefined) {
      localStorage.setItem("products", JSON.stringify([]));
      this.products = [];
    } else {
      this.products = JSON.parse(`${localStorage.getItem("products")}`);
    }
   
  }
  
  public static getInstance(): ProductCatalog {
    if (!ProductCatalog.instance) {
      ProductCatalog.instance = new ProductCatalog();
    }
    return ProductCatalog.instance;
  }
  // function to play sound when a product is added
  private static playSound(source:string):void {
    // const sound = new Audio(source);
    // sound.play();
    // sound.onended = () => delete(sound);
  }
  public addProduct(productName: ProductInterface): void {

    this.products = [...this.products,productName];
    // play sound
    ProductCatalog.playSound("../sound/beep-29.mp3");
    // saving products on persistent storage.
    localStorage.setItem("products", JSON.stringify(this.products));
    console.log(this.products);

  }

  public getProducts(): ProductInterface[] {
    // retrive saved products from localStorage
    return this.products;
  }
}

export default ProductCatalog;
