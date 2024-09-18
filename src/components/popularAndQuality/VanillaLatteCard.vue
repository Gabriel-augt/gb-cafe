<script setup>

import { ShoppingCart, Star } from 'lucide-vue-next';

</script>

<template>

    <div class="flex flex-row gap-10 transition-all duration-300 ease-out hover:scale-105">

        <div class="bg-white-25 rounded-xl w-[355px] h-96 flex items-center justify-center drop-shadow-xl">

            <div class="bg-white rounded-xl w-[343px] h-[373px]">

                <figure class="mx-4 mt-5">

                    <span class="absolute flex items-center justify-center w-[70px] h-[34px] m-2 text-sm font-bold rounded-full bg-white-25/40">

                        <span
                            class="flex items-center justify-center h-[26px] gap-1 text-center bg-white rounded-full w-[62px]">

                            4.8

                            <figure>

                                <Star size="16px" fill="#F9C06A" stroke="0" />

                            </figure>

                        </span>

                    </span>

                    <img class="rounded-xl" src="/vanillaLatte.png" alt="Vanilla Latte">


                    <figcaption class="flex flex-col justify-between gap-4 my-5 text-2xl font-semibold">

                        Vanilla Latte

                        <div class="inline-flex justify-between font-bold">

                            R$15,00

                            <button>

                                <figure class="p-2 bg-orange-400 rounded-full hover:bg-yellow-350">

                                    <ShoppingCart color="#FFF" />

                                </figure>

                            </button>

                        </div>

                    </figcaption>

                </figure>

            </div>

        </div>

    </div>

</template>