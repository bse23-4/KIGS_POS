<template>
      <!-- right sidebar -->
      <div class="w-5/12 flex flex-col bg-blue-gray-50 h-full bg-white pr-4 pl-2 py-4">
        <div class="bg-white rounded-3xl flex flex-col h-full shadow">
          <!-- empty cart -->
          <div v-show="cart.length === 0" class="flex-1 w-full p-4 opacity-25 select-none flex flex-col flex-wrap content-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p>
              CART EMPTY
            </p>
          </div>

          <!-- cart items -->
          <div v-show="cart.length > 0" class="flex-1 flex flex-col overflow-auto">
            <div class="h-16 text-center flex justify-center">
              <div class="pl-8 text-left text-lg py-4 relative">
                <!-- cart icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div v-show="getItemsCount() > 0" class="text-center absolute bg-cyan-500 text-white w-5 h-5 text-xs p-0 leading-5 rounded-full -right-2 top-3" x-text="getItemsCount()"></div>
              </div>
              <div class="flex-grow px-8 text-right text-lg py-4 relative">
                <!-- trash button -->
                <button @click="clear()" class="text-blue-gray-300 hover:text-pink-500 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex-1 w-full px-4 overflow-auto">
             <!-- cart item -->
              <cart-item v-for="(item,index) in cart" :key="index" :id="index" :item="item"/>
              <!-- end of cart item -->
            </div>
          </div>
          <!-- end of cart items -->
          
          <!-- payment info -->
          <div class="select-none h-auto w-full text-center pt-3 pb-4 px-4">
            <div class="flex mb-3 text-lg font-semibold text-blue-gray-700">
              <div>TOTAL</div>
              <div class="text-right w-full" v-text="priceFormat(getTotalPrice())"></div>
            </div>
            <div class="mb-3 text-blue-gray-700 px-3 pt-2 pb-3 rounded-lg bg-blue-gray-50">
              <div class="flex text-lg font-semibold">
                <div class="flex-grow text-left">CASH</div>
                <div class="flex text-right">
                  <div class="mr-2">UGX</div>
                  <!--v-model="`${numberFormat(cash)}`"*-->
                  <input :value="`${numberFormat(cash)}`" @keyup="updateCash($event.target.value)" type="text" class="w-28 text-right bg-white shadow rounded-lg focus:bg-white focus:shadow-lg px-2 focus:outline-none"/>
                </div>
              </div>
              <hr class="my-2">
              <div class="grid grid-cols-3 gap-2 mt-2">
                <div v-for="(money,index) in moneys" :key="index">
                  <button @click="addCash(money)" class="bg-white rounded-lg shadow hover:shadow-lg focus:outline-none inline-block px-2 py-1 text-sm">+<span v-text="numberFormat(money)"></span></button>
                </div>
              </div>
            </div>
            <div
              v-show="change > 0"
              class="flex mb-3 text-lg font-semibold bg-cyan-50 text-blue-gray-700 rounded-lg py-2 px-3"
            >
              <div class="text-cyan-800">CHANGE</div>
              <div
                class="text-right flex-grow text-cyan-600"
                v-text="priceFormat(change)">
              </div>
            </div>
            <div
              v-show="change < 0"
              class="flex mb-3 text-lg font-semibold bg-pink-100 text-blue-gray-700 rounded-lg py-2 px-3"
            >
              <div
                class="text-right flex-grow text-pink-600"
                v-text="priceFormat(change)">
              </div>
            </div>
            <div
              v-show="change == 0 && cart.length > 0"
              class="flex justify-center mb-3 text-lg font-semibold bg-cyan-50 text-cyan-700 rounded-lg py-2 px-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <button
              class="text-white rounded-2xl text-lg w-full py-3 focus:outline-none"
              v-bind:class="{
                'bg-cyan-500 hover:bg-cyan-600': submittable(),
                'bg-blue-gray-200': !submittable()
              }"
              @click="submit()"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
          <!-- end of payment info -->
        </div>
      </div>
      <!-- end of right sidebar -->
      <!-- pop ups -->
</template>
<script lang='ts'>
import CartItem from './CartItem.vue'
import type ProductInterface from "@/modules/modules";
import { mapGetters, mapMutations } from 'vuex';
export default {
    name:"RightSidebar",
  components: { CartItem },
  data() {
    return {

        cash: 0,
        change:0,
        // moneys: [2000, 5000, 10000, 20000, 50000, 100000],
        isShowModalReceipt: false,
        receiptNo: '',
        receiptDate: '',
    }
  },
    computed:{
      ...mapGetters(['moneys']),
      cart():ProductInterface[]{
          return this.$store.getters.cart;
      }
    },
  methods:{
    ...mapMutations(['setShowModel','setReceipt','setReceiptDate','setTotalPrice','setCash','setViewPayment','captureReports']),
    ...mapGetters([]),
     getTotalPrice() {
        // let r = this.$store.getters.qty;
      return this.cart.reduce(
        (total, item) => total + ( this.$store.getters.qty * item.productPrice),
        0
      );
    },
       clear() {
      this.cash = 0;
      this.$store.state.cart = [];
      this.receiptNo = '';
      this.receiptDate = '';
      this.updateChange();
    //   this.clearSound();
    },
     submittable() {
      return this.change >= 0 && this.cart.length > 0;
    },
    addCash(amount:number) {
      this.cash = (this.cash || 0) + amount;
      this.setCash(this.cash);
      this.updateChange();
      // new Audio("../sound/beep-29.mp3").play();
    },
    getItemsCount() {
      return this.cart.reduce((count, item) => count + item.productQuantity, 0);
    },
    dateFormat(date:number|Date|undefined) {
      const formatter = new Intl.DateTimeFormat('id');
      return formatter.format(date);
    },
    updateChange() {
      this.change = this.cash - this.getTotalPrice();
    },
    submit() {
      const time = new Date();
      this.setViewPayment(true);
      this.setReceipt(`TWPOS-KIGGS-${Math.round(time.getTime() / 1000)}`);
      this.setReceiptDate(this.dateFormat(time));
      this.setTotalPrice(this.getTotalPrice());
      this.$store.commit('setChange',this.change);

    },
    numberFormat(number:number) {
      return (number || "")
        .toString()
        .replace(/^0|\./g, "")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    priceFormat(number:number) {
      return number ? `UGX. ${this.numberFormat(number)}` : `UGX. 0`;
    },
  
  }
}
</script>
