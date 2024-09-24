<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/hero/Hero.vue'
import PopularNowAndQuality from './components/popularAndQuality/PopularNowAndQuality.vue';
import AmazingDaybanner from './components/amazingDayBanner/AmazingDaybanner.vue';
import CoffeeMenu from './components/coffeeMenu/coffeeMenu.vue';
import About from './components/about/About.vue';

</script>

<template>

  <Hero />

  <PopularNowAndQuality />

  <AmazingDaybanner />

  <CoffeeMenu />

  <About />

</template>
