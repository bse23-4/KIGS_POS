<template>
    <div class="bg-blue-gray-50">
        <div class="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
           <!-- sidebar -->
           <Sidebar />
           <!-- end of sidebar -->
            <slot/>
            <!--  -->
        </div>
    </div>
</template>

<script type="text/javascript">
import Sidebar from "@/components/Sidebar.vue";
export default {
    name:"LayoutView",
    components: {
        Sidebar
    },
}
</script>
