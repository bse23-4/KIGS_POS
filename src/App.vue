<script setup lang="ts">

</script>

<template>
  <layout-view>
     <router-view />
  </layout-view>
</template>

<script lang="ts">
import LayoutView from '@/layout/index.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'App',
  components: {
    LayoutView
  }
})
</script>
