<script setup>

import SubscribeHeader from './SubscribeHeader.vue';
import SubscribeButton from './SubscribeButton.vue';

</script>

<template>

    <div class="bg-orange-50 h-[568px] flex items-center justify-center font-poppins">

        <div class="w-full bg-center bg-no-repeat bg-cover h-96 bg-subscribeBg">

            <section class="flex flex-col items-center h-full w-full
            justify-center bg-[#603809]/70">

                <SubscribeHeader />

                <SubscribeButton />

            </section>

        </div>

    </div>

</template>