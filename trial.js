// /* eslint-disable new-cap */
// /* eslint-disable no-console */
// /* eslint-disable func-names */
// /**
//  * KIGGS SUPERMARKET POS SYSTEM
//  */
// const Product = function (props) {
//   this.productName = props.productName || 'Unknown product name';
//   this.productPrice = props.price || 0;
//   this.dateOfPurchase = props.dateOfPurchase || null;
//   this.productImage = props.image || null;
//   this.productDescription = props.description || null;
//   this.productId = props.id || null;
//   this.productCategory = props.category || null;
//   this.productQuantity = props.quantity || null;
//   this.productSubCategory = props.subCategory || null;
//   this.productStatus = props.status || null;
//   this.productDateOfExpiry = props.dateOfExpiry || null;
// };
// // utility methods
// Product.prototype.saveProduct = function () {
//   console.log(this);
// };
// Product.prototype.deleteProduct = function () {
//   console.log(this);
// };
// Product.prototype.updateProduct = function () {
//   console.log(this);
// };
// Product.prototype.getProduct = function () {
//   console.log(this);
// };
// Product.prototype.getProductById = function () {
//   console.log(this);
// };
// Product.prototype.getProductByCategory = function () {
//   console.log(this);
// };
// Product.prototype.getProductBySubCategory = function () {
//   console.log(this);
// };
// Product.prototype.getProductByStatus = function () {
//   console.log(this);
// };
// Product.prototype.getProductByDateOfExpiry = function () {
//   console.log(this);
// };
// Product.prototype.getProductByQuantity = function () {
//   console.log(this);
// };
// Product.prototype.getProductByPrice = function () {
//   console.log(this);
// };
// Product.prototype.getProductByProductId = function () {
//   console.log(this);
// };
// Product.prototype.getProductByProductCategory = function () {
//   console.log(this);
// };
// Product.prototype.getProductByProductSubCategory = function () {
//   console.log(this);
// };
// Product.prototype.getProductByProductStatus = function () {
//   console.log(this);
// };
// // Base class
// function Shop() {}
// // property to instantiate the product class
// Shop.prototype.instantiateProduct = Product;
// // property to instantiate the product class
// Shop.prototype.invokeProduct = function (options) {
//   return new this.instantiateProduct(options);
// };
// // singletone
// const productCatalog = (() => {
//   let instance; // the single instance of the product catalog

//   function instantiateCatalog() {
//     // private methods and variables
//     let products = [];

//     function addProduct(product) {
//       products = [...products, product];
//     }

//     function getProducts() {
//       return products;
//     }

//     // public methods and variables
//     return {
//       addProduct,
//       getProducts,
//     };
//   }

//   return {
//     // get the single instance of the product catalog
//     getInstance: () => {
//       if (!instance) {
//         instance = instantiateCatalog();
//       }
//       return instance;
//     },
//   };
// })();

// // usage
// const catalog1 = productCatalog.getInstance();
// catalog1.addProduct('Product A');
// catalog1.addProduct('Product B');

// const catalog2 = productCatalog.getInstance();
// console.log(catalog2.getProducts()); // output: ['Product A', 'Product B']
// console.log(catalog1 === catalog2); // output: true
