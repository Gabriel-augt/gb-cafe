<script setup>

import { ShoppingCart } from 'lucide-vue-next';

</script>

<template>

    <header class="absolute z-10 w-full bg-transparent">

        <nav class="flex flex-row items-center justify-between h-16 mx-48 text-white-25">

            <h2 class="text-4xl select-none font-clickerScript">

                GB Café

            </h2>

            <ul class="flex space-x-16 text-xl font-poppins">

                <a class="hover:text-yellow-350" href="">

                    Início

                </a>

                <a class="hover:text-yellow-350" href="">

                    Menu

                </a>

                <a class="hover:text-yellow-350" href="">

                    Sobre nós

                </a>

                <a class="hover:text-yellow-350" href="">

                    Contato

                </a>

            </ul>

            <button>

                <figure class="transition-all duration-300 ease-in-out transform hover:scale-125">

                    <ShoppingCart color="#FFF" />

                </figure>

            </button>

        </nav>

    </header>

</template>