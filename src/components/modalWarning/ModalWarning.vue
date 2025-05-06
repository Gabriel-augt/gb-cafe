<script setup>

import { useCartStore } from '@/store/CartStore';

const cart = useCartStore();

const disableModal = () => {

    cart.modalWarning = false;

}

</script>

<template>

    <div class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur">

        <div class="flex justify-center items-center w-screen h-screen max-[650px]:mt-32">

            <section class="flex flex-col items-center justify-center pt-24 pb-10 px-10 w-max h-max
            rounded-2xl border shadow-md bg-yellow-350 max-[650px]:w-96 max-[420px]:w-72">

                <div class="flex flex-col text-pretty items-center space-y-6 w-max h-max">

                    <figure class="-mt-60">

                        <img class="rounded-xl w-56" src="/warning.svg" :alt="$t('warning')">

                    </figure>

                    <p class="text-white-25 tracking-wide text-2xl w-[530px] max-[650px]:w-60
                    max-[650px]:text-xl">

                        {{ $t('warningMessage') }}

                    </p>

                </div>

                <a href="https://linktr.ee/gabriel_augt" target="_blank">

                    <figure>

                        <img class="h-40 my-2 max-[650px]:h-16" src="/gb.png" alt="Logo">

                    </figure>

                </a>

                <button @click="disableModal" class="cursor-pointer font-semibold bg-white-25 rounded-lg
                overflow-hidden relative z-100 border yellow-35 group px-8 py-2 hover:scale-105 duration-500 hover:shadow-xl">

                    <span class="relative z-10 text-yellow-350 text-xl duration-500
                    group-hover:text-white">

                        {{ $t('close') }}

                    </span>

                    <span class="absolute w-full h-full bg-yellow-350 -left-32 top-0
                    -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>

                    <span class="absolute w-full h-full bg-yellow-350 -right-32 top-0 -rotate-45
                    group-hover:rotate-0 group-hover:right-0 duration-500"></span>

                </button>

            </section>

        </div>

    </div>

</template>
