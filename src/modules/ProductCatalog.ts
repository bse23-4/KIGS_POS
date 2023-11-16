import type ProductInterface from "./modules";
// product catalog is the singleton class
class ProductCatalog {

  private static instance: ProductCatalog;
  
  products: ProductInterface[];
  reports: ProductInterface[];
  // static products: never[];
  private constructor() {
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
  //getInstance() gives us the singleton object(product catalog) and ensures it is created once
  public static getInstance(): ProductCatalog {
    //checking if there's a product so as to save a new product if not already
    if (!ProductCatalog.instance) {
      ProductCatalog.instance = new ProductCatalog();
    }
    return ProductCatalog.instance;
  }
  public saveProduct(product: ProductInterface): void {
    // add product
    // this.products = [...this.products, product];
    this.products.push(product);
    // saving products on persistent storage.
    //stringify converts the object to string
    localStorage.setItem("products", JSON.stringify(this.products));
    //
    console.log(this.products);
  }

  public getProducts(): ProductInterface[] {
    // retrieve saved products from localStorage
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
