import type ProductInterface from "./modules";
class ProductCatalog {
  private static instance: ProductCatalog;
   products: ProductInterface[];
  // static products: never[];
 constructor() {
  //  this.products = [];
   if (localStorage.getItem("products") == undefined || localStorage.getItem("products") == null) {
       localStorage.setItem("products", JSON.stringify([]));
       this.products = JSON.parse(`${localStorage.getItem("products")}`);
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
    const sound = new Audio(source);
    sound.autoplay = true;
    sound.play();
    // sound.onended = () => delete(sound);
  }
  public addProduct(product: ProductInterface): void {
    this.products = [...this.products,product];
    // play sound
    ProductCatalog.playSound("file:///Users/malticard/BSE23-4/KIGS_POS/src/sound/beep-29.mp3");
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
