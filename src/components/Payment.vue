<template>
        <div :class="{'w-full h-full glow z-10 fixed justify-center items-center top-0 left-0 active': showPayment, 'w-full h-full glow z-10 fixed justify-center items-center top-0 left-0': !showPayment}">
            <div class="fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center ">
          <div class="bg-white rounded-xl px-2 py-2">
            <center class="text-2xl font-body font-medium px-3 py-3">Select One Payment Option</center>
            <table class="text-lg w-full h-full  px-2 py-2 border-collapse ">
              <thead>
                <tr>
                  <th class="py-1 w-80  text-xl font-bold text-center">MTN Payment <input type="radio" name="payment" id="mtn" value="MTN" class="border border-double" v-model="payment"> </th>
                  <th class="py-1 text-center w-80 text-xl font-bold">Airtel Payment <input type="radio" name="payment" id="airtel" value="Airtel" v-model="payment"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td class="px-2 py-2">
                        <label for="mtn">
                        <img class="w-80 h-40 mx-2" src="@/assets/mtn.jpeg"/>

                        </label>
                        <div class="m-3" v-show="payment == 'MTN'">
                            <span class="font-bold">Phone:</span>
                            <input type="text" v-model="phone" class="border p-2 w-80 border-cyan-700 rounded-md"/>
                            <div class="my-3">
                                <button class=" bg-green-600 text-white text-center w-80 px-2 py-2 mx-2 my-2 rounded-md cursor-pointer" @click="makePayment()">Make Payment</button>
                            </div>
                        </div>
                    </td>
                     <td class="px-2 py-2">
                        <label for="airtel">
                          <img class="w-80 h-40 mx-2" src="@/assets/airtel.png"/>
                        </label>
                        <div class="m-3" v-show="payment == 'Airtel'">
                            <span class="font-bold">Phone:</span>
                            <input type="text" v-model="phone" class="border p-2 w-80 border-cyan-700 rounded-md"/>
                            <div class="my-3">
                                <button class=" bg-green-600 text-white text-center w-80 px-2 py-2 mx-2 my-2 rounded-md cursor-pointer" @click="makePayment()">Make Payment</button>
                            </div>
                        </div>
                    </td>
                </tr>
                
              </tbody>
            </table>
          </div>
    </div>
    </div>
</template>
<script>
import PaymentGateWay from '@/modules/Payments'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name:'Payment',
    data() {
        return {
            payment:'',
            phone:''
        }
    },
    computed:{
        ...mapGetters(['showPayment','details','cash','change'])
    },
    methods:{
        ...mapMutations(['setViewPayment','setShowModel','setPaymentGateway']),
        makePayment(){
         let gateway =  new PaymentGateWay(this.cash, this.phone);
        let payment = gateway.setGateway(this.payment);
            let data = {
                payment:this.payment,
                phone:this.phone,
                summary:payment
            };
         this.setPaymentGateway(data)
            this.setViewPayment(false);
           this.setShowModel(true);

        }
    }

}
</script>

<style lang="css">
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


