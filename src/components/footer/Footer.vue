<script setup>

import Credits from './Credits.vue';
import SocialNetworks from './SocialNetworks.vue';
import ContactUs from './ContactUs.vue';
import Notice from './Notice.vue';

</script>

<template>

    <div class="w-full bg-center bg-cover h-max bg-footerBg">

        <section class="flex flex-row items-start justify-around w-full h-full py-12
        text-white bg-brown/95 max-[1180px]:flex-col max-[1180px]:items-center
        max-[1180px]:gap-16">

            <SocialNetworks />

            <ContactUs />

            <Notice />

        </section>

        <Credits />

    </div>

</template>