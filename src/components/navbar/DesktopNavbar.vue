<script setup>

import { ShoppingCart } from 'lucide-vue-next';
import DesktopNavBarContent from './DesktopNavBarContent.vue';
import { ref } from 'vue';
import BackToHome from './backToHome.vue';
import { useCartStore } from '@/store/CartStore';

const hideMenuContent = ref(true);
const url = ref(document.URL);
const cart = useCartStore();

const inCart = () => {

    hideMenuContent.value = false;
    cart.hideLangSwitcher = true;

};

const toHomePage = () => {

    hideMenuContent.value = true;
    cart.hideLangSwitcher = false;

};

if (url.value.includes('carrinho')) {

    hideMenuContent.value = false;
    cart.hideLangSwitcher = true;

} else {

    hideMenuContent.value = true;
    cart.hideLangSwitcher = false;

};

</script>

<template>

    <header class="fixed z-50 w-screen bg-transparent mt-1">

        <nav class="flex flex-row items-center justify-between h-16 mx-48
        text-white-25 backdrop-blur-3xl bg-black/30 rounded-full px-6
        max-[1420px]:mx-28">

            <h2 class="text-4xl select-none font-clickerScript">

                GB Café

            </h2>

            <DesktopNavBarContent v-if="hideMenuContent" />

            <BackToHome @click="toHomePage" v-if="!hideMenuContent" />

            <button @click="inCart">

                <figure class="transition-all duration-300 ease-in-out
                transform hover:scale-125">

                    <router-link to="/carrinho">

                        <ShoppingCart color="#FFF" />

                    </router-link>

                </figure>

            </button>

            <div v-if="cart.itemInCart" class="absolute right-5 top-5">

                <span class="relative flex items-center justify-center h-3 w-3">

                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-350 opacity-75"></span>

                    <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-350"></span>

                </span>

            </div>

        </nav>

    </header>

</template>