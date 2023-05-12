<template>
<div>
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
            </div>
</template>
<script lang="ts">
import { mapGetters, mapMutations } from 'vuex';
import type ProductInterface from '@/modules/modules';
export default {
    name:"Barcode",
    data() {
        return {
            keyword: "",
        }
    },
     computed: {
     ...mapGetters(["message",'products','showModelReceipt','qty']),
  },
  watch:{
    ...mapGetters(["message",'products'])
  },
  methods: {
      ...mapMutations(["addingToCart","setDetails","setShowDetails"]),
      addToCart(product:ProductInterface) {
       
        this.showNot = true;
        this.addingToCart({
          ...product,
          productQuantity:this.qty
        });
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
    
</style>