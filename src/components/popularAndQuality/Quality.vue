<template>

    <div class="relative flex flex-col items-center w-full h-max bg-orange-50 gap-y-9 font-poppins">

        <div class="mt-4 space-y-4 tracking-wide text-center font-poppin">

            <h1 class="text-4xl font-bold text-brown max-[395px]:text-4xl">

                {{ $t('weAreDifferent') }}

            </h1>

            <p class="text-xl font-light text-black max-[395px]:text-lg">

                {{ $t('weMakeYourDay') }}

            </p>

        </div>

        <section class="flex flex-row flex-wrap items-center justify-between gap-4 tracking-wide mb-32
        max-[1600px]:justify-center max-[1600px]:w-[800px] max-[795px]:w-auto">

            <div class="flex flex-col items-center justify-center border-2 border-orange-200 rounded-md w-96 h-80
            max-[395px]:w-80">

                <figure class="mb-8">

                    <img class="w-[122px]" src="/coffee-beans.svg" alt="Grãos de Café">

                </figure>

                <p class="mb-2 text-xl font-bold font-poppins">

                    {{ $t('incomparableGrain') }}

                </p>

                <p class="text-lg font-poppins text-zinc-400 text-center">

                    {{ $t('greatTastingGrains') }}

                </p>

            </div>

            <div class="flex flex-col items-center justify-center border-2 border-orange-200 rounded-md w-96 h-80
            max-[395px]:w-80">

                <figure class="mb-8">

                    <img src="/badge.svg" alt="Distintivo">

                </figure>

                <p class="mb-2 text-xl font-bold font-poppins">

                    {{ $t('highQuality') }}

                </p>

                <p class="text-lg font-poppins text-zinc-400 text-center">

                    {{ $t('greatTastingGrains') }}

                </p>

            </div>

            <div class="flex flex-col items-center justify-center border-2 border-orange-200 rounded-md w-96 h-80
            max-[395px]:w-80">

                <figure class="mb-8">

                    <img src="/coffee-cup.svg" alt="Xícara de Café">

                </figure>

                <p class="mb-2 text-xl font-bold font-poppins">

                    {{ $t('extraordinary') }}

                </p>

                <p class="text-lg font-poppins text-zinc-400 text-center">

                    {{ $t('neverTasted') }}

                </p>

            </div>

            <div class="flex flex-col items-center justify-center border-2 border-orange-200 rounded-md w-96 h-80
            max-[395px]:w-80">

                <figure class="mb-8">

                    <img class="w-[122px]" src="/best-price.svg" alt="Melhor Preço">

                </figure>

                <p class="mb-2 text-xl font-bold font-poppins">

                    {{ $t('affordablePrice') }}

                </p>

                <p class="text-lg font-poppins text-zinc-400 text-center px-1">

                    {{ $t('coffeeAreAffordable') }}

                </p>

            </div>

        </section>

    </div>

</template>