<script setup>

import { Trash2, Plus, Minus } from 'lucide-vue-next';

</script>

<template>

    <div class="flex flex-row items-center gap-16 px-8 py-4
    shadow-md rounded-3xl border-t h-max w-[768px]">

        <figure class="w-44">

            <img class="rounded-xl" src="/cappucino.png" alt="Cappucino">

        </figure>

        <div class="flex flex-col gap-2">

            <h2 class="text-2xl font-semibold tracking-wide">

                Cappucino

            </h2>

            <span class="text-zinc-400">

                R$12,00

            </span>

        </div>

        <button>

            <figure>

                <Minus />

            </figure>

        </button>

        1

        <button>

            <figure>

                <Plus />

            </figure>

        </button>

        <figure class="cursor-pointer">

            <Trash2 color="#A1A1AA" />

        </figure>

    </div>

</template>