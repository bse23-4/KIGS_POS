<template>
    <!-- modal receipt -->
    <div v-show="!close" ref="printArea"
      class= "alert left-0 top-0 z-10 flex flex-wrap justify-center items-center p-24"
    >
      <!-- <div
        v-show="showModelReceipt"
        class="fixed glass backdrop:blur-sm w-full h-screen left-0 top-0 z-0"
      ></div> -->
      <div
        v-show="showModelReceipt"
        class="w-4/12 rounded-3xl bg-white shadow-xl overflow-hidden z-10"

      >
        <div id="receipt-content" class="text-left w-full text-sm p-6 overflow-auto">
          <div class="text-center">
            <!-- <img src="img/receipt-logo.png" alt="Tailwind POS" class="mb-3 w-8 h-8 inline-block"> -->
            <h2 class="text-xl font-semibold">KIGGS SUPERMARKET</h2>
            <p></p>
          </div>
          <div class="flex mt-4 text-xs">
            <div class="flex-grow">No: <span v-text="receiptNo"></span></div>
            <div v-text="receiptDate"></div>
          </div>
          <hr class="my-2"/>
          <div>
            <table class="w-full text-xs">
              <thead>
                <tr>
                  <th class="py-1 w-1/12 text-center">#</th>
                  <th class="py-1 text-left">Item</th>
                  <th class="py-1 w-2/12 text-center">Qty</th>
                  <th class="py-1 w-3/12 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
               <!-- table row -->
                  <tr v-for="(item, index) in cart" :key="index">
                    <td class="py-2 text-center" v-text="index+1"></td>
                    <td class="py-2 text-left">
                      <span v-text="item.productName"></span>
                      <br/>
                      <small v-text="priceFormat(item.productPrice)"></small>
                    </td>
                    <td class="py-2 text-center">{{item.productQuantity}}</td>
                    <td class="py-2 text-right" v-text="priceFormat(item.productQuantity * item.productPrice)"></td>
                  </tr>
                <!-- end of table row -->
              </tbody>
            </table>
          </div>
          <hr class="my-2"/>
          <div>
            <div class="flex font-semibold">
              <div class="flex-grow">TOTAL</div>
              <div v-text="priceFormat(getTotalPrice())"></div>
            </div>
            <div class="flex text-xs font-semibold">
              <div class="flex-grow">PAY AMOUNT</div>
              <div v-text="priceFormat(cash)"></div>
            </div>
            <hr class="my-2"/>
            <div class="flex text-xs font-semibold">
              <p class="flex-grow" v-text="`BALANCE`"></p>
              <p v-text="priceFormat(change)"></p>
            </div>
             <!-- payment details -->
           <div class="flex text-xs font-semibold">
              <p class="flex-grow" v-text="`Payment Gateway`"></p>
              <p v-text="fetchGateway.payment"></p>
            </div> 
             <div class="flex text-xs font-semibold">
              <p class="flex-grow" v-text="`Phone`"></p>
              <p v-text="fetchGateway.phone"></p>
            </div>

            <div class="flex text-xs font-semibold">
              <p class="flex-grow" v-text="`Payment Summary`"></p>
              <p v-text="fetchGateway.summary"></p>
            </div>
        <!-- end of payment detils -->
          </div>
         
        <div class="p-4 w-full">
          <button class="bg-cyan-500 text-white text-lg px-4 py-3 rounded-2xl w-full focus:outline-none" @click="print()" v-text="`PRINT RECEIPT`"></button>
          <button class="bg-red-500 text-white text-lg px-4 py-3 my-2 rounded-2xl w-full focus:outline-none" @click="closeModalReceipt()" v-text="`CANCEL`"></button>
        </div>
      </div>
          <div ref="print" class="print-area"></div>

    </div>
    </div>          <!-- <div ref="print-area" class="print-area"></div> -->
</template>
<script lang="ts">
import type ProductInterface from '@/modules/modules';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name:"PrintReceipt",
    data() {
        return {
            close:false,
        }
    },
    computed:{
        ...mapGetters(['products','receiptDate','receiptNo','cash','change','showModelReceipt','fetchGateway']),
        cart():ProductInterface[] {
            return this.$store.getters.cart;
        }
    },
    methods:{
    print(){
      let p = this.$refs.printArea;
       let titleBefore = document.title;
      let printArea = this.$refs.print;
        this.close = !this.close;
      printArea = p.innerHTML;
      document.title = this.$store.getters.receiptNo;
      document.title = titleBefore;
      window.document
         let printWindow = window.open('', '', 'height=1000,width=1000');
          printWindow.document.writeln(printArea);
          printWindow.print();

    },
    closeModalReceipt(){
        this.close = !this.close;
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
   getTotalPrice() {
      return this.cart.reduce(
        (total, item) => total + item.productQuantity * item.productPrice,
        0
      );
    }
}
}
</script>

<style lang="css">
    .alert{
       position: fixed;
        backdrop-filter: blur(90px);
       width: 100%;
        height: 100%;
    }
    .nowrap {
  white-space: nowrap;
}

.glass {
  /* background-color: rgba(100, 120, 130, .6); */
  backdrop-filter: blur(10px);
}

table td {
  vertical-align: top;
}

#receipt-content {
  max-height: 70vh;
}

@media print {
  .hide-print {
    display: none !important;
  }
  .print-area {
    display: block;
  }
}

</style>