<template>
   <div :class="{'w-full h-full glow z-10 fixed justify-center items-center top-0 left-0 active': showDetails, 'w-full h-full glow z-10 fixed justify-center items-center top-0 left-0': !showDetails}">
    <div class="fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center ">
          <div class="bg-white rounded-xl px-2 py-2">
            <table class="text-lg w-full h-full  px-2 py-2 border-collapse ">
              <thead>
                <tr>
                  <th class="py-1 w-5/12 text-center"></th>
                  <th class="py-1 text-center w-7/12 text-3xl font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
               <!-- table row -->

                  <tr>

                    <td class="my-4 mx-4 text-center">
                        <img class="w-full" :src="details.productImage"/>
                    </td>
                    <td class="py-2 text-left">
                         <br/>
                      <br/>
                      <span class="font-light">Product Name:</span>   <span class="font-light"  v-text="details.productName"></span>
                      <br/>
                      <span class="font-light" >Product Price:</span>     <span class="font-light" v-text="(details.productPrice)"></span>
                      <br/>

                       <span class="font-light">Product Quantity:</span>     <span class="font-light py-2 text-center">{{details.productQuantity}}</span>
                      <br/>

                       <span class="font-light">Product Description:</span>     <span class="font-light py-2 text-center">{{details.productDescription}}</span>
                      <br/>
                      <br/>
                      <hr>
                        <span class="font-light">Total  Cost:</span>
                      <span class="py-2 px-2 text-right font-semibold" v-text="(details.productQuantity * details.productPrice)"></span>
                      <br/>
                      <br/>
                      <br/>
                       <br/>
                     <div class="flex flex-row justify-evenly p-3">
  <!-- edit  -->
                  <div>
                       <p>
              <span>Gift Wrapping: <b>UGX 800</b></span>
            </p>
            <button class="bg-cyan-500 text-white text-lg px-3 py-3 m-4 rounded-2xl w-96 focus:outline-none" @click="giftWrapping(details)" v-text="`GIFT WRAPPING`" ></button>

                  </div>
           
             <div class="">
                <span>Express Shipping:<b>UGX 1000</b> </span>
                     <button class="bg-cyan-500 text-white text-lg px-3 py-3 m-4 rounded-2xl w-96 focus:outline-none" @click="expressShipping(details)" v-text="`EXPRESS SHIPPING`"></button>
                     <!-- <button class="bg-cyan-500 text-white text-lg px-3 py-3 m-4 rounded-2xl w-96 focus:outline-none" v-text="`PROP`"></button> -->
             </div>
              
                     </div>
                     <br/>
                     <div class="flex flex-row justify-evenly p-3">
                      <!--  -->
                        <button class="bg-red-500 text-white text-lg px-4 py-3 m-4 rounded-2xl w-96 focus:outline-none" @click="closeModal()" v-text="`CLOSE`"></button>
                     </div>
                    
                    </td>
                  </tr>
                <!-- end of table row -->
              </tbody>
            </table>
          </div>
          
    </div>
   </div>
</template>
<script lang='ts'>
import { ExpressShippingDecorator, GiftWrapDecorator } from '@/modules/ProductFeature';
import { mapGetters, mapMutations } from 'vuex'
import type ProductInterface from '@/modules/modules';
export default {
    name:'DetailsCard',
    computed:{
        ...mapGetters(['details','showDetails','products'])
    },
    methods: {
        ...mapMutations(['setShowDetails','setDetails']),
        closeModal(){
            this.setShowDetails(false);
        },
        expressShipping(product: ProductInterface){
          let ex = new ExpressShippingDecorator(product);
         let expressShipping = {
          ...product,
          productPrice:ex.price
         };
         this.setDetails(expressShipping);
         
       let update =  this.products.map((p:ProductInterface) => {
          if (p.productName == product.productName) {
              p.productPrice = ex.price
          }
          return p;
     });
           localStorage.setItem('products', JSON.stringify(update));
        },
        giftWrapping(pdt:ProductInterface){
         let gift = new GiftWrapDecorator(pdt);
         let t = {
          ...pdt,
           productQuantity: gift.quantity,
           productPrice: gift.price
         }

          this.setDetails(t);
          let update =  this.products.map((p:ProductInterface) => {
          if (p.productName == pdt.productName) {
              p.productPrice = gift.price
          }
          return p;
     });
       localStorage.setItem('products', JSON.stringify(update));
        }
    },
}
</script>
<style lang="css" scoped>
    .glow {
        background: rgba(0,0, 0, 0.2);
        backdrop-filter: blur(30px);
        transition: 0.3s ease-in-out;
        visibility: hidden;
    }
    .glow.active{
        background: rgba(0,0, 0, 0.2);
        backdrop-filter: blur(30px);
        transition: 0.3s ease-in-out;
        visibility: visible;

    }
</style>