<script setup>

import { ChevronLeft } from 'lucide-vue-next';

</script>

<template>

    <router-link to="/">

        <a class="hover:text-yellow-350 text-xl
        font-poppins cursor-pointer max-[420px]:text-lg">

            <span class="flex flex-row items-center -ml-24
            max-[1170px]:-ml-0">

                <figure>

                    <ChevronLeft />

                </figure>

                {{ $t('toHomePage') }}

            </span>

        </a>

    </router-link>

</template>