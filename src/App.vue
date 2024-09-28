<script setup>

import { RouterLink, RouterView } from 'vue-router'
import Hero from './components/hero/Hero.vue'
import PopularNowAndQuality from './components/popularAndQuality/PopularNowAndQuality.vue';
import AmazingDaybanner from './components/amazingDayBanner/AmazingDaybanner.vue';
import CoffeeMenu from './components/coffeeMenu/coffeeMenu.vue';
import About from './components/about/About.vue';
import Feedback from './components/feedback/Feedback.vue';
import Subscribe from './components/subscribe/Subscribe.vue';
import Footer from './components/footer/Footer.vue';


</script>

<template>

  <Hero />

  <PopularNowAndQuality />

  <AmazingDaybanner />

  <CoffeeMenu />

  <About />

  <Feedback />

  <Subscribe />

  <Footer />

</template>
