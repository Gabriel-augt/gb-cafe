<template>

    <div class="w-[900px] flex flex-row items-center justify-center mt-9">

        <form @submit.prevent="" action="">

            <input class="p-4 tracking-wide text-black rounded-l outline-none h-11 w-96
            max-[560px]:w-72 max-[415px]:w-60"
            type="email" name="email" id="email" :placeholder="$t('yourEmail')">

            <button class="font-semibold rounded-r w-36 h-11 bg-yellow-350 text-brown
            max-[560px]:w-28">

                {{ $t('send') }}

            </button>

        </form>

    </div>

</template>