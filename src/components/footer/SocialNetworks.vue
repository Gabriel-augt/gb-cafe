<script setup>

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next';

</script>

<template>

    <div class="flex flex-col gap-6">

        <h2 class="text-3xl ont-poppins">

            Siga nossas redes sociais

        </h2>

        <figure class="flex flex-row gap-4">

            <Facebook class="hover:text-blue-500" size="36" stroke-width="1" />

            <Instagram class="hover:text-pink-500" size="36" stroke-width="1" />

            <Twitter class="hover:text-cyan-300" size="36" stroke-width="1" />

            <Youtube class="hover:text-red-500" size="36" stroke-width="1" />

        </figure>

    </div>

</template>