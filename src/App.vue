<script setup lang="ts">

</script>

<template>
  <layout-view>
     <router-view />
  <!-- <model/> -->
  </layout-view>
</template>

<script lang="ts">
import LayoutView from '@/layout/index.vue';

import Vue from 'vue';
import Model from '@/components/Model.vue';
export default Vue.extend({
  name: 'App',
  components: {
    LayoutView,Model
  },
 
    // 

});
</script>
