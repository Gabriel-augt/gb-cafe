<script setup>

import EspressoCard from './EspressoCard.vue';
import HazelnutLatte from './HazelnutLatte.vue';
import VanillaLatteCard from './VanillaLatteCard.vue';

</script>

<template>

    <div class="flex flex-row flex-wrap justify-center gap-8 mb-32 m-4">

        <VanillaLatteCard />

        <EspressoCard />

        <HazelnutLatte />

    </div>

</template>