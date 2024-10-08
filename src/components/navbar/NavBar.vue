<script setup>

import { ShoppingCart } from 'lucide-vue-next';
import ToggleMobile from './ToggleMobile.vue';
import DesktopNavbar from './DesktopNavbar.vue';

</script>

<template>

    <header class="fixed z-50 w-screen bg-transparent mt-1 max-[420px]:mt-0">

        <div class="max-[1170px]:flex max-[1170px]:items-center max-[1170px]:justify-center">

            <nav class="flex flex-row items-center justify-between h-16 mx-48
            text-white-25 backdrop-blur-3xl bg-black/30 rounded-full px-6
            max-[1420px]:mx-28 max-[1170px]:mx-0 max-[1170px]:w-96 max-[420px]:w-screen
            max-[420px]:rounded-none">

                <h2 class="text-4xl select-none font-clickerScript max-[1170px]:text-2xl">

                    GB Café

                </h2>

                <DesktopNavbar class="max-[1170px]:hidden" />

                <ToggleMobile class="min-[1170px]:hidden" />

                <button>

                    <figure class="transition-all duration-300 ease-in-out transform hover:scale-125">

                        <ShoppingCart color="#FFF" />

                    </figure>

                </button>

            </nav>

        </div>

    </header>

</template>