/*
 * Singleton design pattern
 * Implementing product catalog
 */
const ProductCatalog = (() => {
  let instance; // the single instance of the product catalog
  // localStorage.setItem(); for persistent storage
  function instantiateCatalog() {
    // private methods and variables
    let products = [];

    function addProduct(product) {
      products = [product, ...products];
    }

    function getProducts() {
      return products;
    }

    // public methods and variables
    return {
      addProduct,
      getProducts,
    };
  }

  return {
    // get the single instance of the product catalog
    getInstance: () => {
      if (!instance) {
        instance = instantiateCatalog();
      }
      return instance;
    },
  };
})();
export default ProductCatalog;
