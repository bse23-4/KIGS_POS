/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import ProductCatalog from 'renderer/Tools/ProductCatalog';
import ProductFactory from 'renderer/Tools/ProductFactory';

// import { render } from '@testing-library/react';
describe('Product Catalog Singleton', () => {
  test('Returns the same instance of the product catalog', () => {
    const catalog1 = ProductCatalog.getInstance();
    const catalog2 = ProductCatalog.getInstance();

    expect(catalog1).toBeInstanceOf(catalog2);
  });

  test('Adds cash to a product  correctly', () => {
    const catalog = ProductCatalog.getInstance().invokeCart();

    catalog.addCash(600);

    expect(catalog.cash).toBe(600);
  });
});

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
  it('should create a Dell object', () => {
    const factory = new ProductFactory();
    const laptop = factory.createProduct(data);

    expect(laptop).toBeDefined();
    expect(laptop.productName).toBe('Dell XPS3');
    expect(laptop.productPrice).toBe(1200);
    expect(laptop.productDescription).toBe(
      '13-inch laptop with Intel Core i7 processor'
    );
    // expect(laptop instanceof Product).toBeTruthy();
  });
});
