<script setup>

import PopularCards from './PopularCards.vue';

</script>

<template>

    <div class="relative flex flex-col items-center w-full h-max bg-orange-50 gap-y-9 font-poppins">

        <h2 class="mt-16 text-3xl font-semibold text-brown">

            {{ $t('popular') }}

            <span class="underline decoration-yellow-350">
                
                {{ $t('now') }}
            
            </span>
            
        </h2>

        <PopularCards />

    </div>

</template>