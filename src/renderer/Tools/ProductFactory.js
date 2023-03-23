/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable func-names */
/**
 * KIGGS SUPERMARKET POS SYSTEM
 */
const Product = function (props) {
  this.productName = props.productName || 'Unknown product name';
  this.productPrice = props.price || 0;
  this.dateOfPurchase = props.dateOfPurchase || null;
  this.productImage = props.image || null;
  this.productDescription = props.description || null;
  this.productId = props.id || null;
  this.productCategory = props.category || null;
  this.productQuantity = props.quantity || null;
  this.productSubCategory = props.subCategory || null;
  this.productStatus = props.status || null;
  this.productDateOfExpiry = props.dateOfExpiry || null;
};
// utility methods
Product.prototype.saveProduct = function () {
  console.log(this);
};
Product.prototype.deleteProduct = function () {
  console.log(this);
};
Product.prototype.updateProduct = function () {
  console.log(this);
};
Product.prototype.getProduct = function () {
  console.log(this);
};
Product.prototype.getProductById = function () {
  console.log(this);
};
Product.prototype.getProductByCategory = function () {
  console.log(this);
};
Product.prototype.getProductBySubCategory = function () {
  console.log(this);
};
Product.prototype.getProductByStatus = function () {
  console.log(this);
};
Product.prototype.getProductByDateOfExpiry = function () {
  console.log(this);
};
Product.prototype.getProductByQuantity = function () {
  console.log(this);
};
Product.prototype.getProductByPrice = function () {
  console.log(this);
};
Product.prototype.getProductByProductId = function () {
  console.log(this);
};
Product.prototype.getProductByProductCategory = function () {
  console.log(this);
};
Product.prototype.getProductByProductSubCategory = function () {
  console.log(this);
};
Product.prototype.getProductByProductStatus = function () {
  console.log(this);
};
// Base class
function ProductFactory() {}
// property to instantiate the product class
ProductFactory.prototype.instantiateProduct = Product;
// property to instantiate the product class
ProductFactory.prototype.invokeProduct = function (options) {
  return new this.instantiateProduct(options);
};
//
export default ProductFactory;
