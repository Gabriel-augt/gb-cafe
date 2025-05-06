<script setup>

import EspressoCard from './EspressoCard.vue';
import HazelnutLatte from './HazelnutLatte.vue';
import VanillaLatteCard from './VanillaLatteCard.vue';

</script>

<template>

    <div data-aos="zoom-out-right" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"
     class="flex flex-row flex-wrap justify-center gap-8 mb-32 m-4">

        <VanillaLatteCard />

        <EspressoCard />

        <HazelnutLatte />

    </div>

</template>