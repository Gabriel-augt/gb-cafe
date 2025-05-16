<script setup>

import { ShoppingCart } from 'lucide-vue-next';
import { ref } from 'vue';
import MobileNavBarContent from './MobileNavBarContent.vue';
import BurgerMenu from './BurgerMenu.vue';
import CloseBurger from './CloseBurger.vue';
import BackToHome from './BackToHome.vue';
import { useCartStore } from '@/store/CartStore';

const showMobileMenu = ref(false);
const navBarLogo = ref(true);
const navBarCart = ref(true);
const justify = ref('justify-between');
const rounded = ref('rounded-full');
const marginTop = ref('mt-1');
const wSm = ref('max-[420px]:w-72');
const wMd = ref('max-[1170px]:w-96');
const hideMenuContent = ref(true);
const url = ref(document.URL);
const cart = useCartStore();

const activeToggleMenu = () => {

    showMobileMenu.value = true;
    navBarLogo.value = false;
    navBarCart.value = false;
    justify.value = 'justify-end';
    rounded.value = 'rounded-none';
    marginTop.value = 'mt-0';
    wSm.value = 'max-[420px]:w-screen';
    wMd.value = 'max-[1170px]:w-screen';
    cart.hideLangSwitcher = true;

};

const navBarClick = () => {

    showMobileMenu.value = false;
    navBarLogo.value = true;
    navBarCart.value = true;
    justify.value = 'justify-between';
    rounded.value = 'rounded-full';
    marginTop.value = 'mt-1';
    wSm.value = 'max-[420px]:w-72';
    wMd.value = 'max-[1170px]:w-96';
    cart.hideLangSwitcher = false;

};

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

    <header data-aos="fade-down" data-aos-duration="900"
    class="fixed z-50 w-screen bg-transparent" :class="marginTop">

        <div class="flex items-center justify-center">

            <nav class="flex flex-row items-center h-16 mx-48 text-white-25 backdrop-blur-3xl
            bg-black/30 px-6 max-[1420px]:mx-28 max-[1170px]:mx-0 transition-all
            duration-300" :class="justify, rounded, wSm, wMd">

                <h2 v-if="navBarLogo" v-show="hideMenuContent" class="text-4xl select-none font-clickerScript
                max-[1170px]:text-2xl">

                    GB Café

                </h2>

                <BurgerMenu v-if="!showMobileMenu" v-show="hideMenuContent" @click="activeToggleMenu" class="min-[1170px]:hidden" />

                <BackToHome @click="toHomePage" v-if="!hideMenuContent" />

                <CloseBurger v-if="showMobileMenu" @click="navBarClick" />

                <button @click="inCart" v-if="navBarCart">

                    <figure class="transition-all duration-300 ease-in-out transform hover:scale-125">

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

        </div>

        <nav v-if="showMobileMenu" class="flex justify-center w-screen
        h-screen pt-52 backdrop-blur-3xl bg-black/50">

            <MobileNavBarContent @click="navBarClick" />

        </nav>

    </header>

</template>