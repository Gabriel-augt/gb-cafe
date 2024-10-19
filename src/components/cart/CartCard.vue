<script setup>

import { useCartStore } from '@/store/CartStore';
import { Trash2, Plus, Minus } from 'lucide-vue-next';

const cart = useCartStore()

</script>

<template>

    <div v-for="(coffee, index) in cart.cafesAdded" :key="index"  class="flex flex-row items-center justify-between gap-16 px-8 py-4
    shadow-md rounded-3xl border-t h-max w-[848px]">

        <figure class="w-44">

            <img class="rounded-xl" :src="coffee.photo" :alt="coffee.name">

        </figure>

        <div class="flex flex-col gap-2">

            <h2 class="text-2xl font-semibold tracking-wide text-nowrap">

                {{ coffee.name }}

            </h2>

            <span class="text-zinc-400">

                {{ coffee.priceBRL }}

            </span>

        </div>

        <button>

            <figure>

                <Minus />

            </figure>

        </button>

        1

        <button>

            <figure>

                <Plus />

            </figure>

        </button>

        <figure @click="cart.removeCoffee(index)" class="cursor-pointer">

            <Trash2 color="#A1A1AA" />

        </figure>

    </div>

</template>