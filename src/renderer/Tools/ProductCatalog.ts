/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-use-before-define */
import ProductInterface from 'renderer/modules/modules';

/*
 * Singleton design pattern
 * Implementing product catalog
 */
class ProductCatalog {
  private static instance: ProductCatalog;

  public static getInstance(): ProductCatalog {
    if (!ProductCatalog.instance) {
      ProductCatalog.instance = new ProductCatalog();
    }
    return ProductCatalog.instance;
  }
  //
  public invokeCart() {
    return {
      db: null,
      time: null,
      firstTime: localStorage.getItem('first_time') === null,
      activeMenu: 'pos',
      loadingSampleData: false,
      money: [2000, 5000, 10000, 20000, 50000, 100000],
      products: [] as ProductInterface[],
      keyword: '',
      cart: [] as ProductInterface[],
      cash: 0,
      change: 0,
      isShowModalReceipt: false,
      receiptNo: '',
      receiptDate: '',

      filteredProducts() {
        const rg = this.keyword ? new RegExp(this.keyword, 'gi') : null;
        return this.products.filter((p) => !rg || p.productName.match(rg));
      },
      addToCart(product: ProductInterface) {
        const index = this.findCartIndex(product);
        if (index === -1) {
          this.cart = [product, ...this.cart];
        } else {
          this.cart[index].productId += 1;
        }
        this.beep();
        this.updateChange();
      },
      findCartIndex(product: ProductInterface) {
        return this.cart.findIndex((p) => p.productId === product.productId);
      },
      addQty(item: ProductInterface, qty: number) {
        const index = this.cart.findIndex(
          (i) => i.productId === item.productId
        );
        if (index === -1) {
          return;
        }
        const afterAdd = item.productQuantity + qty;
        if (afterAdd === 0) {
          this.cart.splice(index, 1);
          // this.clearSound();
        } else {
          this.cart[index].productQuantity = afterAdd;
          this.beep();
        }
        this.updateChange();
      },
      addCash(amount: number) {
        this.cash = (this.cash || 0) + amount;
        this.updateChange();
        this.beep();
      },
      getItemsCount() {
        return this.cart.reduce(
          (count, item) => count + item.productQuantity,
          0
        );
      },
      updateChange() {
        this.change = this.cash - this.getTotalPrice();
      },
      updateCash(value: string) {
        this.cash = parseFloat(value.replace(/[^0-9]+/g, ''));
        this.updateChange();
      },
      getTotalPrice() {
        return this.cart.reduce(
          (total, item) => total + item.productQuantity * item.productPrice,
          0
        );
      },
      submitable() {
        return this.change >= 0 && this.cart.length > 0;
      },
      submit() {
        const time = new Date();
        this.isShowModalReceipt = true;
        this.receiptNo = `TWPOS-KS-${Math.round(time.getTime() / 1000)}`;
        this.receiptDate = this.dateFormat(time);
      },
      closeModalReceipt() {
        this.isShowModalReceipt = false;
      },
      dateFormat(date: Date | number) {
        const formatter = new Intl.DateTimeFormat('id', {
          dateStyle: 'short',
          timeStyle: 'short',
        });
        return formatter.format(date);
      },
      numberFormat(number: number) {
        return (number || '')
          .toString()
          .replace(/^0|\./g, '')
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      },
      priceFormat(number: number) {
        return number ? `Rp. ${this.numberFormat(number)}` : `Rp. 0`;
      },
      clear() {
        this.cash = 0;
        this.cart = [];
        this.receiptNo = '';
        this.receiptDate = '';
        this.updateChange();
        // this.clearSound();
      },
      beep() {
        // this.playSound('sound/beep-29.mp3');
      },
      // clearSound() {
      //   this.playSound('sound/button-21.mp3');
      // },
      // playSound(src: string) {
      //   const sound = new Audio();
      //   sound.src = src;
      //   sound.play();
      //   // sound.onended = () => delete sound;
      // },
      // printAndProceed() {
      //   const receiptContent = document.getElementById('receipt-content');
      //   const titleBefore = document.title;
      //   const printArea = document.getElementById('print-area');

      //   printArea.innerHTML = receiptContent.innerHTML;
      //   document.title = this.receiptNo;

      //   window.print();
      //   this.isShowModalReceipt = false;

      //   printArea.innerHTML = '';
      //   document.title = titleBefore;

      //   // TODO save sale data to database

      //   this.clear();
      // },
    };
  }
}
export default ProductCatalog;
