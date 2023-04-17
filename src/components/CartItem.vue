<template>
    <div>
                <div class="select-none mb-3 bg-blue-gray-50 rounded-lg w-full text-blue-gray-700 py-2 px-2 flex justify-center">
                  <img :src="[item.productImage]" alt="" class="rounded-lg h-10 w-10 bg-white shadow mr-2">
                  <div class="flex-grow">
                    <h5 class="text-sm">{{item.productName}}</h5>
                    <p class="text-xs block" v-text="priceFormat(item.productPrice)"></p>
                  </div>
                  <div class="py-1">
                    <div class="w-28 grid grid-cols-3 gap-2 ml-2">
                      <button @click="addQty(item, -1)" class="rounded-lg text-center py-1  bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <input v-model="item.productQuantity" type="text" class="bg-white rounded-lg text-center shadow focus:outline-none focus:shadow-lg text-sm">
                      <button @click="addQty(item, 1)" class="rounded-lg text-center py-1  bg-blue-gray-600 hover:bg-blue-gray-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
</div>
     
</template>
<script lang="ts">
import type ProductInterface from '@/modules/modules';
import { mapGetters } from 'vuex';
export default {
    name:"CartItem",
    props:{
        item:Object,
    },
    computed:{
      ...mapGetters(['cart']),
    },
    methods:{
     addQty(item:ProductInterface, qty:number) {
      const index = this.cart.findIndex((i:ProductInterface) => i.productName === item.productName);
      console.log(index);
      if (index === -1) {
        return;
      }
      let afterAdd = 0;
      if (afterAdd === 0) {
        this.cart.splice(index, 1);
        // this.clearSound();
      } else {
        this.cart[index].productQuantity = afterAdd;
        // this.beep();
      }
      // this.updateChange();
    },
        priceFormat(price:any){
            return "UGX " + parseInt(price).toFixed(1);
        }
    }
}
</script>