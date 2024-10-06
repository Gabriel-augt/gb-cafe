<script setup>

import { MapPin, PhoneCall, Mail, Globe } from 'lucide-vue-next';

</script>

<template>

    <div class="flex flex-col gap-3 w-96 max-[415px]:w-60">

        <h1 class="text-3xl font-poppins">

            Contate-nos

        </h1>

        <figure class="inline-flex gap-2">

            <MapPin stroke-width="1" />

            <span>

                street cafe, 777

            </span>

        </figure>

        <figure class="inline-flex gap-2">

            <PhoneCall stroke-width="1" />

            <span>

                +9 999-999

            </span>

        </figure>

        <figure class="inline-flex gap-2">

            <Mail stroke-width="1" />

            <span>

                email@email.com

            </span>

        </figure>

        <figure class="inline-flex gap-2">

            <Globe stroke-width="1" />

            <span>

                www.site.com

            </span>

        </figure>

    </div>

</template>