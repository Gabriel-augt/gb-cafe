<script setup>

import NavBar from './components/navbar/NavBar.vue';
import Switcher from './components/switcher/Switcher.vue';

</script>

<template>

  <div class="overflow-x-hidden">

    <NavBar />

    <Switcher />

    <RouterView />

  </div>

</template>
