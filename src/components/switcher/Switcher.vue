<script setup>

import { useI18n } from 'vue-i18n'
import { ArrowDown } from 'lucide-vue-next';
import { ref } from 'vue';
import { useCartStore } from '@/store/CartStore';

const { locale } = useI18n({ useScope: 'global' })
const dropdown = ref(false);
const arrow = ref();
const cart = useCartStore();
const imageSrc = ref('/br.svg');
const br = ref(false);
const us = ref(true);
const eu = ref(true);
const es = ref(true);

const switcher = () => {

    dropdown.value = !dropdown.value

    dropdown.value === true ? arrow.value = 'rotate-180' : arrow.value = ''

}

const changeLanguage = (language) => {

    switcher()

    locale.value = language

    cart.mainLanguage = language

    //set flag and remove current language from dropdown...
    switch (language) {

        case 'pt_BR':
            imageSrc.value = '/br.svg'
            br.value = false
            us.value = true
            eu.value = true
            es.value = true
            break;

        case 'en':
            imageSrc.value = '/us.svg'
            us.value = false
            br.value = true
            eu.value = true
            es.value = true
            break;

        case 'eu':
            imageSrc.value = '/eu.svg'
            eu.value = false
            us.value = true
            br.value = true
            es.value = true
            break;

        case 'es':
            imageSrc.value = '/es.svg'
            es.value = false
            us.value = true
            br.value = true
            eu.value = true
            break;

        default:
            imageSrc.value = '/br.svg'
            break;
    }

}

</script>

<template>

    <div v-if="!cart.hideLangSwitcher" class="absolute flex flex-col tracking-wider
    text-white-25 w-10 right-5 top-8 font-manrope z-50 max-[530px]:top-20
    max-[530px]:right-3 max-[570px]:right-2">

        <button @click="switcher" class="flex flex-row w-max items-center justify-center">

            <figure>

                <img class="w-6 rounded-full" :src="imageSrc" :alt="$t('local')">

            </figure>

            <ArrowDown :class="arrow" class="ml-1 duration-200" size="16" />

        </button>

        <div v-if="dropdown" class="flex flex-col gap-1 items-start w-full
        mt-3 -ml-2 rounded-md">

            <span v-if="br" @click="changeLanguage('pt_BR')" class="flex flex-row w-max items-center
            p-2 cursor-pointer hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/br.svg" :alt="$t('local')">

                </figure>

            </span>

            <span v-if="us" @click="changeLanguage('en')" class="flex flex-row w-max items-center
            p-2 cursor-pointer hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/us.svg" :alt="$t('local')">

                </figure>

            </span>

            <span v-if="eu" @click="changeLanguage('eu')" class="flex flex-row w-max items-center p-2 cursor-pointer
            hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/eu.svg" :alt="$t('local')">

                </figure>

            </span>

            <span v-if="es" @click="changeLanguage('es')" class="flex flex-row w-max items-center p-2 cursor-pointer
            hover:bg-neutral-400 hover:rounded-lg">

                <figure>

                    <img class="w-6 rounded-full" src="/es.svg" :alt="$t('local')">

                </figure>

            </span>

        </div>

    </div>

</template>