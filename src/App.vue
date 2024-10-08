<script setup>

import NavBar from './components/navbar/NavBar.vue';
import Hero from './components/hero/Hero.vue'
import PopularNowAndQuality from './components/popularAndQuality/PopularNowAndQuality.vue';
import AmazingDaybanner from './components/amazingDayBanner/AmazingDaybanner.vue';
import CoffeeMenu from './components/coffeeMenu/coffeeMenu.vue';
import About from './components/about/About.vue';
import Feedback from './components/feedback/Feedback.vue';
import Subscribe from './components/subscribe/Subscribe.vue';
import FooterContact from './components/footer/Footer.vue';

</script>

<template>

  <div class="overflow-x-hidden">

    <NavBar />

    <Hero />

    <PopularNowAndQuality />

    <AmazingDaybanner />

    <CoffeeMenu />

    <About />

    <Feedback />

    <Subscribe />

    <FooterContact />

  </div>

</template>
