import type ProductInterface from "./modules";
class ProductCatalog {
  private static instance: ProductCatalog;
  products: ProductInterface[];
  reports: ProductInterface[];
  // static products: never[];
  constructor() {
    //  this.products = [];
    if (localStorage.getItem("products") == undefined || localStorage.getItem("products") == null) {
      localStorage.setItem("products", JSON.stringify([]));
      this.products = JSON.parse(`${localStorage.getItem("products")}`);
    } else {
      this.products = JSON.parse(`${localStorage.getItem("products")}`);
    }
    // save reports
    if (localStorage.getItem("capturedReports") == undefined || localStorage.getItem("capturedReports") == null) {
      localStorage.setItem("capturedReports", JSON.stringify([]));
      this.reports = JSON.parse(`${localStorage.getItem("capturedReports")}`);
    } else {
      this.reports = JSON.parse(`${localStorage.getItem("capturedReports")}`);
    }
  }
  public static getInstance(): ProductCatalog {
    if (!ProductCatalog.instance) {
      ProductCatalog.instance = new ProductCatalog();
    }
    return ProductCatalog.instance;
  }
  // function to play sound when a product is added
  private static playSound(source: string): void {
    const sound = new Audio(source);
    sound.autoplay = true;
    sound.play();
    // sound.onended = () => delete(sound);
  }
  public addProduct(product: ProductInterface): void {
    this.products = [...this.products, product];
    // play sound
    ProductCatalog.playSound("@/sound/beep-29.mp3");
    // saving products on persistent storage.
    localStorage.setItem("products", JSON.stringify(this.products));
    console.log(this.products);
  }

  public getProducts(): ProductInterface[] {
    // retrive saved products from localStorage
    return this.products;
  }
  // save reports to persistent storage
  public saveReports(report: ProductInterface): void {
    this.reports = [...this.reports, report];
    localStorage.setItem("capturedReports", JSON.stringify(this.reports));
  }
  public getReports(): ProductInterface[] {
    return this.reports;
  }
}
export default ProductCatalog;
