<template>

    <ul class="flex space-x-16 text-xl font-poppins">

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