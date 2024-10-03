<script setup>

import ChaiLatte from './ChaiLatte.vue';
import Macchiato from './Macchiato.vue';
import Mocaccino from './Mocaccino.vue';

</script>

<template>

    <div class="flex flex-row justify-between gap-9
    max-[1170px]:flex-col max-[1170px]:justify-center">

        <Macchiato />

        <Mocaccino />

        <ChaiLatte />

    </div>

</template>