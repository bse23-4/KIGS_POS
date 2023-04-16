import { CartService, Salesperson } from '@/modules/Obeserver';
import ProductCatalog from '@/modules/ProductCatalog'
import ProductFactory from '@/modules/ProductFactory'
import type ProductInterface from '@/modules/modules';
import Vue from 'vue'
import Vuex from 'vuex'
let pdtCat =  ProductCatalog.getInstance();
Vue.use(Vuex)
export default new Vuex.Store({
  state:  {
      db: null,
      time: null,
      firstTime: localStorage.getItem("first_time") === null,
      activeMenu: 'pos',
      loadingSampleData: false,
      moneys: [500,1000,2000, 3000, 5000, 10000, 20000, 50000, 100000],
      products: pdtCat.getProducts(),
      keyword: "",
      message:'',
      cart: [] as ProductInterface[],
      cash: 0,
      change: 0,
      isShowModalReceipt: false,
      receiptNo: null,
      player: new Audio(),
      receiptDate: null,
  },
  getters: {
    products: state => state.products,
    keyword: state => state.keyword,
    cart: state => state.cart,
    cash: state => state.cash,
    moneys: state => state.moneys,
    change: state => state.change,
    player : state => state.player,
    message:state => state.message,
    showModelReceipt: state => state.isShowModalReceipt,
  },
  mutations: {
    saveProduct(state,payload){
      let product = new ProductFactory();
     let pdt = product.createProduct(payload);
     //  console.log(payload)
      pdtCat.addProduct(pdt);
    },
    addingToCart(state, payload:ProductInterface){
      let old = state.cart.filter(c => c.productName === payload.productName);
      if(old.length === 0){
        // adding new product to cart
        state.cart = [...state.cart,payload];
        let service = new CartService();
        // sales person
        let sales = new Salesperson();
        state.message = sales.notify(payload);
        // registering sales person to be notified of new products added to cart
        service.registerObserver(sales);
        service.addProduct(payload);
      } else{
        state.message = "Product is already added to cart"
      }
    },
    setShowModel(state, payload:boolean) {
      state.isShowModalReceipt = payload;
    }

  },
  actions: {
  },
  modules: {
  }
})
