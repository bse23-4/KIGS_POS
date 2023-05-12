<template>
<div class="h-full overflow-hidden mt-4">
    <div class="h-full overflow-y-auto sm:px-8 md:px-20 lg:px-12 lg:py-20">
      <h3 class="px-8 py-8 text-2xl text-slate-800 font-body font-semibold">Add a product</h3>
      <form class="w-full lg:px-7 md:px-4 md:py-4 lg:py-7 rounded-md shadow-md bg-slate-100" @submit.prevent="save">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
              v-text="`Product Name`"
            />
          
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="e.g name ..."
              v-model="pdtName"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
              v-text="`Product Image`"
            />
            <img :src="image" alt="product_image"/>
           <!-- restrict to uploading images only -->
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="file"
              placeholder="e.g name ..."
              accept="image/*"
              @input="upload"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/3 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
              v-text="`Product Price`"
            />
            <input
              v-model="pdtPrice"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
              v-text="`Product Description`"
            />
            <textarea
              v-model="pdtDesc"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-6 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
            />
            <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
              v-text="`Date`"
            />
            <input
              v-model="date"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="date"
              placeholder="Albuquerque"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Product Category
            </label>
            <div class="relative">
              <!-- <input
                v-model="pdtCat"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              /> -->
              <select
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               v-model="pdtCat">
                <option v-for="(op,index) in options" :key="index" :value="op.value" v-text="op.label"></option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Product Quantity
            </label>
            <input
              v-model="pdtQty"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
        <div class="py-4">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-400 text-white outline-none w-full font-bold py-2 px-4 border-b-4 border-blue-400 hover:border-blue-500 rounded"
            v-text="`Save Details`"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" >
import { mapMutations } from "vuex";
export default {
  name: "AddProduct",
  data() {
    /**
     * String pdtName =  ""
     */
    return {
      pdtName: "",
      pdtPrice: 0,
      date: "",
      image: "",
      pdtDesc: "",
      pdtCat: "",
      pdtQty: 0,
    };
  },
  computed:{
    options(){
      return [{
        label: "Electronics",
        value: "electronics",
      },{
        label: "Food",
        value: "food",
      },{
        label: "Clothing",
        value: "clothing",
      },{
        label: "Cutlery",
        value: "cutlery",
      }];
    }
  },
  methods: {
  
    ...mapMutations(["saveProduct"]),
    upload(e:any) {
      var f = e.currentTarget.files[0];
      let reader = new FileReader();
   
      reader.onload = (e) => {
        this.image = e.target?.result as string;
        // console.log(image);
      }
      reader.readAsDataURL(f);
    },
    //data about the product from the add product form
    save() {
      let data = {
        productName: this.pdtName,
        productPrice: this.pdtPrice,
        dateOfPurchase: this.date,
        productImage: this.image,
        productDescription: this.pdtDesc,
        productId: 1,
        productCategory: this.pdtCat,
        productQuantity: this.pdtQty,
      };
      this.saveProduct(data);
      this.$router.push("/");
    },
  },
};
</script>
<style >
</style>