<script setup>

import { ShoppingCart } from 'lucide-vue-next';
import DesktopNavBarContent from './DesktopNavBarContent.vue';

</script>

<template>

    <header class="fixed z-50 w-screen bg-transparent mt-1 max-[420px]:mt-0">

        <nav class="flex flex-row items-center justify-between h-16 mx-48
        text-white-25 backdrop-blur-3xl bg-black/30 rounded-full px-6
        max-[1420px]:mx-28">

            <h2 class="text-4xl select-none font-clickerScript">

                GB Café

            </h2>

            <DesktopNavBarContent />

            <button>

                <figure class="transition-all duration-300 ease-in-out
                transform hover:scale-125">

                    <router-link to="/carrinho">

                        <ShoppingCart color="#FFF" />

                    </router-link>

                </figure>

            </button>

        </nav>

    </header>

</template>