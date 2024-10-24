<script setup>

import { ArrowDown } from 'lucide-vue-next';
import { ref } from 'vue';

const dropdown = ref(false);
const arrow = ref();

const switcher = () => {

    dropdown.value = !dropdown.value

    dropdown.value === true ? arrow.value = 'rotate-180' : arrow.value = ''

}

</script>

<template>

    <div class="absolute flex flex-col tracking-wider text-white-25 w-10
    right-5 top-8 font-manrope z-50 max-[530px]:top-20 max-[530px]:right-3
    max-[570px]:right-2">

        <button @click="switcher" class="flex flex-row w-max items-center justify-center">

            <figure>

                <img class="w-6 rounded-full" src="/br.svg" alt="Brasil">

            </figure>

            <ArrowDown :class="arrow" class="ml-1 duration-200" size="16" />

        </button>

        <div v-if="dropdown" class="flex flex-col gap-1 items-start w-full
        mt-3 -ml-2 rounded-md">

            <span class="flex flex-row w-max items-center p-2 cursor-pointer
            hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/us.svg" alt="Brasil">

                </figure>

            </span>

            <span class="flex flex-row w-max items-center p-2 cursor-pointer
            hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/eu.svg" alt="Brasil">

                </figure>

            </span>

            <span class="flex flex-row w-max items-center p-2 cursor-pointer
            hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/es.svg" alt="Brasil">

                </figure>

            </span>

        </div>

    </div>

</template>