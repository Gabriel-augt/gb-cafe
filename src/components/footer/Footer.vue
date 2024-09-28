<script setup>

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next';

</script>

<template>

    <div class="w-full h-halfScreen">

        <section class="flex flex-row items-center justify-around w-full h-full text-white bg-brown/80">

            <div class="flex flex-col gap-6">

                <h2 class="text-3xl select-none font-poppins">

                    Siga nossas redes sociais

                </h2>

                <figure class="flex flex-row gap-4">

                    <Facebook size="36" stroke-width="1" />

                    <Instagram size="36" stroke-width="1" />

                    <Twitter size="36" stroke-width="1" />

                    <Youtube size="36" stroke-width="1" />

                </figure>

            </div>

            <div class="flex flex-col gap-3">

                <h3 class="text-3xl select-none font-poppins">

                    Contate-nos

                </h3>

                <span>street</span>
                <span>+9 999-999</span>
                <span>email@email.com</span>
                <span>www.gb.com</span>

            </div>
            
            <div class="flex flex-col gap-3">

                <h1 class="text-5xl select-none font-clickerScript">

                    GB Café

                </h1>

                <p class="tracking-wide w-96">

                    Esta cafeteria é um projeto conceitual criado para fins de estudo,
                    com o objetivo de explorar o design, marca e experiência do cliente.
                    Não está em operação real, servindo apenas como exercício criativo e
                    desenvolvimento de habilidades na área de design e negócios.

                </p>

            </div>

        </section>

    </div>

</template>