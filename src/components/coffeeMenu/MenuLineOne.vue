<script setup>

import Cappucino from './Cappucino.vue';
import CoffeIceCream from './CoffeIceCream.vue';
import NutellaHot from './NutellaHot.vue';

</script>

<template>

    <div data-aos="flip-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"
    class="flex flex-row justify-between gap-9
    max-[1170px]:flex-col max-[1170px]:justify-center">

        <Cappucino />

        <CoffeIceCream />

        <NutellaHot />

    </div>

</template>