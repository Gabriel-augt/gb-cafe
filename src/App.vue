<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/hero/Hero.vue'
import PopularNowAndQuality from './components/popularAndQuality/PopularNowAndQuality.vue';
import AmazingDaybanner from './components/amazingDayBanner/AmazingDaybanner.vue';

</script>

<template>

  <Hero />

  <PopularNowAndQuality />

  <AmazingDaybanner />

</template>
