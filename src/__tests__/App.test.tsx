/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import ProductCatalog from 'renderer/Tools/ProductCatalog';
import ProductFactory from 'renderer/Tools/ProductFactory';

// import { render } from '@testing-library/react';
describe('Product Catalog Singleton', () => {
  test('Returns the same instance of the product catalog', () => {
    const catalog1 = ProductCatalog.getInstance();
    const catalog2 = ProductCatalog.getInstance();

    expect(catalog1).toBe(catalog2);
  });

  test('Adds and retrieves products correctly', () => {
    const catalog = ProductCatalog.getInstance();

    catalog.addProduct('Product A');
    catalog.addProduct('Product B');
    catalog.addProduct('Product C');

    const products = catalog.getProducts();
    expect(products).toContain('Product A');
    expect(products).toContain('Product B');
    expect(products).toContain('Product C');
    expect(products.length).toBe(3);
  });
});
// test product factory
// describe('Product Factory using Factory Pattern', () => {
//   const pdtFactory = new ProductFactory();

//   test('Returns true if pdt is an instance of Product', () => {
//     const pdt = pdtFactory.invokeProduct();
//     const pdt2 = pdtFactory.invokeProduct();
//     expect(pdt).toBe(pdt2);
//   });
//   // confirm that product name is set
//   // test('Check for product name set', () => {
//   //   const pdt = pdtFactory.invokeProduct({ productName: 'Airpods' });
//   //   expect(pdt.productName).toBe('Airpods');
//   // });
// });

describe('Product Factory', () => {
  test('Creates a new product correctly', () => {
    const productData = {
      peoductName: 'Product A',
      price: 10.99,
      category: 'Category A',
    };

    const product = new ProductFactory().invokeProduct(productData);

    expect(product).toEqual(
      expect.objectContaining({
        productName: 'Product A',
        price: 10.99,
        category: 'Category A',
        productId:0,
      })
    );
    expect(product.productId).toBeDefined();
    expect(product.productId).toHaveLength(8);
  });

  test('Throws an error for invalid product data', () => {
    const invalidProductData = {
      productName: '',
      price: -5,
      category: 'Category B',
    };

    expect(() => {
      new ProductFactory().invokeProduct(invalidProductData);
    }).toThrow();
  });
});
