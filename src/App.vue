<script setup>

import NavBar from './components/navbar/NavBar.vue';
import Switcher from './components/switcher/Switcher.vue';
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})

</script>

<template>

  <div class="overflow-x-hidden">

    <NavBar />

    <Switcher />

    <RouterView />

  </div>

</template>
