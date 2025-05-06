<template>

    <div class="w-fulll h-max bg-coffeeBannerBg bg-no-repeat bg-cover bg-right text-left font-poppins py-12">

        <div class="flex flex-row items-center justify-around max-[970px]:flex-col max-[970px]:gap-32">

            <section class="space-y-8 text-white-25 w-[490px] tracking-wide ml-4 max-[970px]:space-y-6
            max-[970px]:backdrop-blur max-[970px]:rounded-xl max-[970px]:p-1 max-[580px]:ml-0
            max-[580px]:w-[350px]">

                <h1 class="text-5xl font-medium max-[580px]:text-3xl">

                    {{ $t('willingDay') }}

                </h1>

                <p class="text-xl font-light max-[580px]:text-base">

                    {{ $t('lifeWithCoffee') }}

                </p>

                <button data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="center-bottom"
                class="relative w-48 h-16 text-xl font-bold text-black
                transition-all duration-300 ease-in-out transform shadow-lg top-8
                bg-yellow-350 rounded-3xl font-poppins hover:scale-105 max-[580px]:w-40
                max-[580px]:h-14 max-[970px]:top-0">

                    <a href="#menu">

                        {{ $t('orderNow') }}

                    </a>

                </button>

            </section>


            <figure data-aos="zoom-in" data-aos-duration="800" data-aos-anchor-placement="center-bottom"
            class="h-max">

                <img class="w-96 mr-40 max-[1090px]:w-80 max-[970px]:mr-0" src="/cup.svg" alt="Copo de café">

            </figure>

        </div>

    </div>

</template>