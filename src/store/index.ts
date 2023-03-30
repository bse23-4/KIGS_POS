import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:  {
      db: null,
      time: null,
      firstTime: localStorage.getItem("first_time") === null,
      activeMenu: 'pos',
      loadingSampleData: false,
      moneys: [2000, 5000, 10000, 20000, 50000, 100000],
      products: [],
      keyword: "",
      cart: [],
      cash: 0,
      change: 0,
      isShowModalReceipt: false,
      receiptNo: null,
      receiptDate: null,
  },
  getters: {
   
    products: state => state.products,
    keyword: state => state.keyword,
    cart: state => state.cart,
    cash: state => state.cash,
    change: state => state.change,
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
