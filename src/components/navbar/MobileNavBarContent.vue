<template>

    <ul class="flex-col space-y-12 text-xl font-poppins text-white-25">

        <li class="cursor-pointer">

            <a class="hover:text-yellow-350" href="#inicio">

                {{ $t('home') }}

            </a>

        </li>

        <li class="cursor-pointer">

            <a class="hover:text-yellow-350" href="#popular">

                {{ $t('popular') }}

            </a>

        </li>

        <li class="cursor-pointer">

            <a class="hover:text-yellow-350" href="#menu">

                {{ $t('menu') }}

            </a>

        </li>

        <li class="cursor-pointer">

            <a class="hover:text-yellow-350" href="#sobre">

                {{ $t('aboutUs') }}

            </a>

        </li>

        <li class="cursor-pointer">

            <a class="hover:text-yellow-350" href="#contato">

                {{ $t('contact') }}

            </a>

        </li>

    </ul>

</template>