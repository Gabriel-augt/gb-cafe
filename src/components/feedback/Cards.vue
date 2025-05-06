<script setup>

import FirstCard from './FirstCard.vue';
import SecondCard from './SecondCard.vue';
import ThirdCard from './ThirdCard.vue';

</script>

<template>

    <div data-aos="flip-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"
    class="flex flex-row items-center justify-center w-full gap-8 py-12
    px-4 flex-wrap max-[365px]:px-0">

        <FirstCard />

        <SecondCard />

        <ThirdCard />

    </div>

</template>