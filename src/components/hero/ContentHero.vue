<template>

    <div class="absolute z-10 flex flex-col justify-center w-max left-48 h-5/6 top-28
     text-white-25 max-[1660px]:left-28 max-[1575px]:left-8 max-[565px]:left-4
     max-[565px]:w-max max-[565px]:top-20 max-[375px]:left-2">

        <p class="font-light tracking-wider font-poppins max-[468px]:text-sm">

            {{ $t('improveYourMood') }}

        </p>

        <h1 class="font-clickerScript text-[364px] -mb-11 -mt-16 max-[468px]:text-[198px]
        max-[650px]:-my-8 max-[710px]:text-[248px] max-[565px]:text-[200px] max-[445px]:text-[168px]
        max-[810px]:text-[316px] max-[565px]:-my-0">

            {{ $t('coffee') }}

        </h1>

        <p class="font-light tracking-wider font-poppins
        max-[468px]:w-96 max-[565px]:text-sm max-[395px]:w-[350px]">

            {{ $t('discoverTheBestFlavors') }} <br>
            {{ $t('weProvideTheBest') }}

        </p>

        <button class="relative w-48 h-16 text-xl font-bold text-black
        transition-all duration-300 ease-in-out transform shadow-lg top-8
        bg-yellow-350 rounded-3xl font-poppins hover:scale-105
        max-[650px]:w-40 max-[650px]:h-14">

            <a href="#menu">

                {{ $t('orderNow') }}

            </a>

        </button>

    </div>

</template>