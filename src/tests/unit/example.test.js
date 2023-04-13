import '@testing-library/jest-dom';
import ProductCatalog from '../../modules/ProductCatalog';
import ProductFactory from '../../modules/ProductFactory';


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
  const factory = new ProductFactory();
  it('should create a Dell object', () => {
    const laptop = factory.createProduct(data);

    expect(laptop).toBeDefined();
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
// product decorator unit test

describe("Product Decorator", () => {
  it("should add gift wrapping to a product", () => {
    const baseProduct = new BaseProduct("Product", 10);
    const giftWrappedProduct = new GiftWrapDecorator(baseProduct);

    expect(giftWrappedProduct.name).toBe("Product (Gift Wrapped)");
    expect(giftWrappedProduct.price).toBe(15);
  });

  it("should add express shipping to a product", () => {
    const baseProduct = new BaseProduct("Product", 10);
    const expressShippingProduct = new ExpressShippingDecorator(baseProduct);

    expect(expressShippingProduct.name).toBe("Product (Express Shipping)");
    expect(expressShippingProduct.price).toBe(20);
  });
});


describe("Cart", () => {
  let cart: Cart;
  let salesperson: import('../../modules/modules').Observer;

  beforeEach(() => {
    cart = new Cart();
    salesperson = new Salesperson();
    cart.addObserver(salesperson);
  });

  it("should notify observers when a product is added to the cart", () => {
    const product = { name: "Product", price: 10 };
    cart.addProduct(product);

    expect(console.log).toHaveBeenCalledWith(`Salesperson notified of new product added to cart: ${product.name}`);
  });
});

// testing the strategy pattern
import { MTN, PaymentGateway, Airtel } from "./payment";

describe("PaymentGateway", () => {
  describe("payment with mobile money", () => {
    test("should pay with MTN gateway", () => {
      const strategy = new Airtel(0758743490, 2580);
      const paymentGateway = new PaymentGateway(strategy);
      const logSpy = jest.spyOn(console, "log");

      paymentGateway.pay(100);

      expect(logSpy).toHaveBeenCalledWith("Paying 100 with Airtel");
    });

    test("should pay with MTN strategy", () => {
      const mtnGateway = new MTN(0778743490, 2580);
      const paymentContext = new paymentGateway(mtnGateway);
      const logSpy = jest.spyOn(console, "log");

      paymentContext.pay(50);

      expect(logSpy).toHaveBeenCalledWith("Paying 50 with MTN");
    });

  });

  describe("Test Setting Gateway ", () => {
    test("should set gateway", () => {
      const mtn = new MTN(0778743490, 2580);
      const paymentGateway = new PaymentMethod(creditCardStrategy);

      const airtelGateway = new Airtel(0750482089, 2580);
      paymentGateway.setGateway(airtelGateway);
      expect((paymentGateway).method).toBe(airtelGateway);
    });
  });
});
