import { shallowMount } from '@vue/test-utils'
// import ProductCatalog from '../../src/modules/ProductCatalog';
// import ProductFactory from '../../src/modules/ProductFactory';

// import { render } from '@testing-library/react';
describe('ProductFactory test', () => {
  const data = {
    productName: 'Dell XPS3',
    productPrice: 1200,
    dateOfPurchase: Date.now(),
    productImage: '',
    productDescription: '13-inch laptop with Intel Core i7 processor',
    productId: 1,
    productCategory: 'Electronics',
    productQuantity: 3,
  };
  // const factory = new ProductFactory();
  it('should create a Dell object', () => {
    // const laptop = factory.createProduct(data);

    // expect(laptop).toBeDefined();
    // expect(laptop.productCategory).toBe('Electronics');
    // expect(laptop.productName).toBe('Dell XPS3');
    // expect(laptop.productPrice).toBe(1200);
    // expect(laptop.productDescription).toBe(
    //   '13-inch laptop with Intel Core i7 processor'
    // );
    // expect(laptop instanceof Product).toBeTruthy();
  });
});

// testing Singleton pattern

describe('Product Catalog Singleton', () => {
  test('Creates only one instance of the product catalog', () => {
    // const catalog1 = ProductCatalog.getInstance();
    // const catalog2 = ProductCatalog.getInstance();
    // expect(catalog1).toBe(catalog2);
  });

  test('Adds products to the catalog correctly', () => {
    // const factory = new ProductFactory();
    // const pdts = {
    //   productName: 'Dell XPS3',
    //   productPrice: 1200,
    //   dateOfPurchase: Date.now(),
    //   productImage: '',
    //   productDescription: '13-inch laptop with Intel Core i7 processor',
    //   productId: 1,
    //   productCategory: 'Electronics',
    //   productQuantity: 3,
    // };
    // // // create a computer
    // const computer = factory.createProduct(pdts);
    // const catalog = ProductCatalog.getInstance();
    // // clothing data
    // const c = {
    //   productName: 'Dell XPS3',
    //   productPrice: 120,
    //   dateOfPurchase: Date.now(),
    //   productImage: '',
    //   productDescription: '13-inch laptop with Intel Core i7 processor',
    //   productId: 1,
    //   productCategory: 'Electronics',
    //   productQuantity: 3,
    // };
    // // generate a clothig
    // const cloth = factory.createProduct(c);
    // // saving coth data
    // catalog.addProduct(cloth);
    // //
    // catalog.addProduct(computer);
    // // catalog.addProduct('Product B');

    // expect(catalog.getProducts()).toEqual(
    //   expect.arrayContaining([computer, cloth])
    // );
  });
});
