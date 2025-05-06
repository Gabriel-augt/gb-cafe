<script setup>

import CartCard from './CartCard.vue';
import OrderSummary from './OrderSummary.vue';
import ModalWarning from '../modalWarning/ModalWarning.vue';
import { useCartStore } from '@/store/CartStore';

const cart = useCartStore();

</script>

<template>

    <div class="flex flex-col items-center
    w-screen h-max bg-white-25 font-poppins">

        <section class="mb-8">

            <div class="flex flex-col items-center w-screen gap-8 mt-8 pb-8">

                <h1 class="text-2xl font-semibold tracking-wide text-black mt-16">

                    {{ $t('yourCart') }}

                </h1>

                <CartCard />

            </div>

        </section>

        <OrderSummary />

        <transition name="slide-fade">

            <ModalWarning v-if="cart.modalWarning" />

        </transition>

    </div>

</template>

<style scoped>

/* Transition effects */
.slide-fade-enter-active {
  transition: all .5s ease-out;
}

.slide-fade-enter-from {
    opacity: 0;
    transition: all .5s ease-out
}

</style>