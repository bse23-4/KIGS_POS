<template>
    <div class="bg-blue-gray-50">
        <div class="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
            <!-- sidebar -->
            <div class="flex-grow flex">
            <Sidebar @addItem="addProduct" />
            <!-- end of sidebar -->
             <div class="flex flex-col bg-blue-gray-50 h-full w-full py-4 overflow-hidden">
           <!-- dynamic views -->
            <slot/>
            <!--  -->
             </div>
            <!-- right side bar -->
             <right-side-bar/>
            <!--  -->
            </div>
            <!-- end of sidebar -->
        </div>
        <!-- modal -->

        <!-- end of modal -->
    </div>
</template>

<script type="ts">
import Sidebar from "@/components/Sidebar.vue";
import RightSideBar from "@/components/RightSideBar.vue";

export default {
    name: "LayoutView",
    components: {
        Sidebar,RightSideBar
    },
    methods: {
        addProduct() {
            // this.$store.commit("addProduct", product);
            alert("product added");
        },
    },
}
</script>
