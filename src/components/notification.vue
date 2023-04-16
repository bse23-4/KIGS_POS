<template>
    <div class="body flex flex-col justify-center items-center">
        <div class="flex justify-between">
        <p class="text-xl p-2 text-cyan-50">{{msg}}</p>
        <p class="text-2xl text-white p-3 cursor-pointer" @click="$emit('close')">x</p>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "Notification",
    props:{
        msg: String
    }
}
</script>
<style lang="css" scoped>
    .body{
        width: 500px;
        height: 100px;
        background-color: gray;
        border-radius: 10px;
        backdrop-filter: blur(60px);
    }
</style>