<template>
       <!-- left sidebar -->
    <div class="flex cursor-pointer flex-row w-auto flex-shrink-0 pl-4 pr-2 py-4">
      <div class="flex flex-col items-start py-4 flex-shrink-0 w-64 bg-cyan-500 rounded-3xl">
        <!-- view products -->
        <div @click="products()"
           class="flex flex-row my-6 px-5 justify-around items-center w-56 text-cyan-700 rounded-full">
          <img class="w-12 h-12"  src="@/assets/dash.svg"/>
          <div class="px-2 py-2 text-white text-lg">PRODUCTS</div>
        </div>
     <!-- adding a product -->
        <div
        @click="addProduct()"
          class="flex flex-row my-6 px-5 justify-around items-center w-56 text-cyan-700 rounded-full"
        >
        <img class="w-12 h-12" src="@/assets/add.svg"/>
        <div class="px-2 py-2 text-white text-md">ADD PRODUCT</div>
        </div>
        <!-- Barcode  -->
        <div class="flex flex-row my-6 px-5 justify-around cursor-pointer items-center w-56 text-cyan-700 rounded-full">
          <img class="w-12 h-12" src="@/assets/barcode.svg"/>
          <div class="px-2 py-2 text-white text-md">BARCODE</div>
        </div>
        <!--  -->
        <div @click="reports()" class="flex flex-row my-6 px-5 cursor-pointer justify-around items-center w-56 text-cyan-700 rounded-full">
          <img class="w-12 h-12" src="@/assets/report.svg"/>
          <div class="px-2 py-2 text-white text-md">REPORTS</div>
        </div>
      </div>
    </div>

    <!-- page content -->
</template>


<script lang="ts">
export default {
    name:"Sidebar",
    methods: {
      reports(){
        this.$router.push("/reports");
      },
      products(){
        this.$router.push("/");
      },
      addProduct(){
        this.$router.push("/addProduct");
      },
    },
}
</script>
