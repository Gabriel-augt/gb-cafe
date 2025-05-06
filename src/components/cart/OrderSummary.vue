<script setup>

import { useCartStore } from '@/store/CartStore';

const cart = useCartStore();

const activateModal = () => {

cart.modalWarning = true;

}

</script>

<template>

    <section class="flex flex-col items-center mb-8
    justify-center w-screen h-56 bg-white-25">

        <div class="w-96 h-max border rounded-3xl p-8
        max-[450px]:w-72" v-if="cart.itemInCart">

            <h3 class="text-lg font-semibold pb-2">

                {{ $t('orderSummary') }}

            </h3>

            <div class="flex flex-col gap-2 mb-4 font-medium">


                <span class="flex justify-between border-t pt-2">

                    {{ $t('products') }}

                    <span>

                        {{ $t('currency') }}{{ cart.localCurrency }}

                    </span>

                </span>

                <span class="flex justify-between border-t pt-2">

                    {{ $t('delivery') }}

                    <span>

                        {{ $t('currency') }}{{ $t('deliveryPrice') }}

                    </span>

                </span>

                <span class="flex text-xl justify-between border-t pt-2">

                    {{ $t('total') }}

                    <span>

                        {{ $t('currency') }}{{ cart.finalPrice }}

                    </span>

                </span>

            </div>

            <button @click="activateModal" class="relative w-full px-8 py-2 rounded-3xl bg-white isolation-auto
            z-10 border-2 border-yellow-350 before:absolute before:w-full before:transition-all
            before:duration-700 before:hover:w-full before:-right-full before:hover:right-0
            before:rounded-full  before:bg-yellow-350 before:-z-10  before:aspect-square
            before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold">

                {{ $t('finalizeOrder') }}

            </button>

        </div>

        <div class="w-96 h-max border rounded-3xl p-8
        text-center max-[450px]:w-72" v-if="!cart.itemInCart">
    
            <span class="flex items-center justify-center text-2xl
            gap-2 font-semibold pb-2">

                <figure>
                    
                    <img class="w-16" src="/emptyCart.png" :alt="$t('emptyCart')">
                    
                </figure>
                
                {{ $t('emptyCart') }}

            </span>
    
        </div>

    </section>

</template>