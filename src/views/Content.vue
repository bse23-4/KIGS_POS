<template>
   <div class="flex-1 w-full px-4 overflow-y-scroll">

      <!-- store menu -->
      <!-- <div class="flex flex-col bg-blue-gray-50 h-full w-full py-4"> -->
        <div class="flex px-2 flex-row relative">
          <div class="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            class="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none"
            placeholder="Cart menu ..."
            v-model="keyword"
          />
        </div>
        <div class="h-full overflow-auto mt-4">
          <div class="h-full overflow-y-auto px-2">
            <div
              class="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25"
              v-show="products.length === 0"
            >
              <div class="w-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <p class="text-xl">
                  YOU DON'T HAVE
                  <br/>
                  ANY PRODUCTS TO SHOW {{products.length}}
                </p>
              </div>
            </div>

            <div
              class="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25"
              v-show="filteredProducts().length === 0 && keyword.length > 0"
            >
              <div class="w-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p class="text-xl">
                  EMPTY SEARCH RESULT
                  <br/>
                  "<span v-text="keyword" class="font-semibold"></span>"
                </p>
              </div>
            </div>
            <!-- filtered products -->
            <div v-show="filteredProducts().length > 0" class="grid grid-cols-4 gap-4 pb-3">
              <div v-for="(product,index) in filteredProducts()" :key="index">
                <div
                  role="button"
                  class="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
                  :title="product.productName"
                >
                  <img :src="product.productImage" :alt="product.productName">
                  <div class="flex pb-3 px-3 text-sm -mt-3">
                    <p class="flex-grow truncate text-lg mr-1" v-text="product.productName"/>
                    <p class="nowrap font-semibold" v-text="priceFormat(product.productPrice)"/>
                  </div>
                    <button class="w-3/6 h-3/6 bg-orange-300 p-5 font-semibold cursor-pointer" @click="addToCart(product)" v-text="`Add to cart`" />
                    <button class="w-3/6 h-3/6 bg-teal-500 font-semibold p-5 cursor-pointer" @click="viewDetails(product,index)" v-text="`View Details`" />

                </div>
              </div>
            </div>
            <!-- filtered data -->
            <!-- model -->
          <PrintReceipt v-show="showModelReceipt"/>
          <Notification :class="[ showNot == true? 'active':'','pop']" :msg="message" @close="close()"/>
          <details-card></details-card>
          <payment></payment>
            <!--  -->
          </div>
        </div>

      <!-- <div class=""></div> -->
      <!-- end of store menu -->
   </div>

</template>

<script lang="ts">
// import Data from '../data/sample.json.json'
import CartItem from "@/components/CartItem.vue";
import { mapGetters, mapMutations } from 'vuex';
import type ProductInterface from '@/modules/modules';
import Notification from '@/components/notification.vue';
import PrintReceipt from "@/components/PaymentInfo.vue";
import DetailsCard from '@/components/DetailsCard.vue';
import Payment from '@/components/Payment.vue';

export default {
  name:"MainView",
  components:{
    CartItem,Notification,PrintReceipt,DetailsCard,Payment
  },
  data(){
    return{
      keyword:"",
      showNot:false,
    }
  },
  computed: {
     ...mapGetters(["message",'products','showModelReceipt']),
  },
  watch:{
    ...mapGetters(["message",'products'])
  },
  methods: {
      ...mapMutations(["addingToCart","setDetails","setShowDetails"]),
      addToCart(product:ProductInterface) {
        this.showNot = true;
        this.addingToCart(product);
        // this.setDetails(product);
       let c =  setTimeout(() => {
          this.showNot = false
        },1200);
    //  clearInterval(c);
      },
      close(){
        this.showNot = false;

      },
      viewDetails(product:ProductInterface,index:number){
        let pdt = product;
        this.setDetails({
          ...pdt,
          index:index
        });
        this.setShowDetails(true);
      },
    numberFormat(number:number) {
      return (number || "")
        .toString()
        .replace(/^0|\,/g, "")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    priceFormat(number:number) {
      return number ? `UGX. ${this.numberFormat(number)}` : `UGX. 0`;
    },
      filteredProducts() {
      const rg = this.keyword ? new RegExp(this.keyword, "gi") : null;
      return this.products.filter((p:ProductInterface) => !rg || p.productName.match(rg));
    },
  },

}
</script>

<style lang="css">
  .pop{
    position: fixed !important;
    width: 100%;
    height: 100%;
    top: 40px;
    left:120px;
    transition: 0.3s 0.1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    visibility: hidden;
    /* opacity: 0; */
  }
  .pop.active{
    left:150px;
    visibility:visible;
    /* opacity: 1; */
  }
</style>