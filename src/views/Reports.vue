<template>
    <div>
        <h1 class="text-2xl font-semibold p-12">Reports</h1>
        <table class="table border tabular-nums border-collapse border-spacing-2 w-5/6 my-10 mx-20 ">
            <tr class=" table-row">
                <th v-for="(h,index) in headers" :key="index">{{h.title}}</th>
            </tr>
            <tr class="p-5" v-if="reports.length == 0">
                <td class="p-5" colspan="6">
                    <div class="container p-10 border border-cyan-900 rounded-md">
                    <center class=" text-zinc-800 font-bold font-arial">No reports recorded yet</center>
                </div>
                </td>
            </tr>
            <!-- reports data -->
            <tr class="p-5" v-else v-for="(d,index) in reports.flat(1)" :key="index">
                    <td class="text-center">{{d.productName}}</td>
                    <td class="text-center">{{d.productQuantity}}</td>
                    <td class="text-center">{{d.productPrice}}</td>
                    <td class="text-center">{{d.dateOfPurchase}}</td>
                    <td class="text-center">{{d.productPrice * d.productQuantity}}</td>
                    <!-- <td>{}</td> -->
            </tr>
        </table>
    </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
export default {
    name:"Reports",
    computed:{
        ...mapGetters(['reports','total']),
        headers(){
            return [
                {
                    title:"Product",
                },{
                    title:"Product Quantity"
                },
                {
                    title:"Price",
                },{
                    title:"Date",
                },{
                    title:"Amount",
                },{
                    title:"Purchased by",
                }
            ]
        }
    }
}
</script>
<style lang="css">
    
</style>