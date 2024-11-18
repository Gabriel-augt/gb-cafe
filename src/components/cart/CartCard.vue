<script setup>

import { useCartStore } from '@/store/CartStore';
import { Trash2, Plus, Minus } from 'lucide-vue-next';

const cart = useCartStore()

</script>

<template>

    <div v-for="(coffee, index) in cart.cafesAdded" :key="index"
    class="flex flex-row items-center justify-between gap-16 px-8 py-4
    shadow-md rounded-3xl border-t h-max w-[848px] max-[880px]:flex-col
    max-[880px]:w-96 max-[880px]:gap-8 max-[450px]:w-72">

        <figure class="w-44">

            <img class="rounded-xl"
            :src="coffee.photo" :alt="coffee.name">

        </figure>

        <div class="flex flex-col gap-2">

            <h2 class="text-2xl font-semibold tracking-wide text-nowrap w-52">

                {{ coffee.name }}

            </h2>

            <span class="text-zinc-400">

                {{ $t('currency') }}{{ coffee.totalValueCoffee.toFixed(2) }}

            </span>

        </div>

        <div class="flex flex-row gap-16">

            <button @click="cart.decrement(coffee, index)">

                <figure>

                    <Minus />

                </figure>

            </button>

            {{ coffee.amount }}

            <button @click="cart.increment(coffee)">

                <figure>
                    
                    <Plus />
                    
                </figure>

            </button>

        </div>

        <figure @click="cart.removeCoffee(index)" class="cursor-pointer">

            <Trash2 color="#A1A1AA" />

        </figure>

    </div>

</template>