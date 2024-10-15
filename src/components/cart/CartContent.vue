<script setup>

import CartCard from './CartCard.vue';
import OrderSummary from './OrderSummary.vue';

</script>

<template>

    <div class="flex flex-col items-center
    w-screen h-max bg-white-25 font-poppins">

        <section class="mb-8">

            <div class="flex flex-col items-center w-screen gap-8 mt-8 pb-8">

                <h1 class="text-2xl font-semibold tracking-wide text-black mt-16">

                    Seu carrinho

                </h1>

                <CartCard />

            </div>

        </section>

        <OrderSummary />

    </div>

</template>