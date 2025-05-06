<script setup>

import ChaiLatte from './ChaiLatte.vue';
import Macchiato from './Macchiato.vue';
import Mocaccino from './Mocaccino.vue';

</script>

<template>

    <div data-aos="flip-down" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"
    class="flex flex-row justify-between gap-9
    max-[1170px]:flex-col max-[1170px]:justify-center">

        <Macchiato />

        <Mocaccino />

        <ChaiLatte />

    </div>

</template>