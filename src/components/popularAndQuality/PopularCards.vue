<script setup>

import EspressoCard from './EspressoCard.vue';
import HazelnutLatte from './HazelnutLatte.vue';
import VanillaLatteCard from './VanillaLatteCard.vue';

</script>

<template>

    <div class="flex flex-row gap-8 mb-32 before:absolute before:w-[1268px] before:h-[367px]
    before:bg-yellow-350/50 before:rounded-3xl before:-translate-x-[70px] before:translate-y-20
    before:shadow max-[1150px]:flex-col max-[1150px]:before:bg-transparent max-[1150px]:before:shadow-none">

        <VanillaLatteCard />

        <EspressoCard />

        <HazelnutLatte />

    </div>

</template>