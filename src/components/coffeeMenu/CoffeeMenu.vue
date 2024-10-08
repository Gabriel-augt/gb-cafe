<script setup>

import CoffeeExplosionLeftSide from './CoffeeExplosionLeftSide.vue';
import CoffeeExplosionRightSide from './CoffeeExplosionRightSide.vue';
import MenuHeader from './MenuHeader.vue';
import MenuLineOne from './MenuLineOne.vue';
import MenuLineTwo from './MenuLineTwo.vue';

</script>

<template>

    <div id="menu" class="relative flex flex-col items-center w-full h-max gap-9 bg-orange-50">

        <MenuHeader />

        <CoffeeExplosionRightSide />

        <section class="z-10 flex flex-col items-center justify-center w-full h-full gap-9
        max-[770px]:flex-col max-[1170px]:flex-row">

            <MenuLineOne />

            <MenuLineTwo />

        </section>

        <CoffeeExplosionLeftSide />

    </div>

</template>