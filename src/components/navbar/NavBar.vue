<script setup>

import MobileNavBar from './MobileNavBar.vue';
import DesktopNavbar from './DesktopNavbar.vue';

</script>

<template>

    <DesktopNavbar class="max-[1170px]:hidden" />

    <MobileNavBar class="min-[1170px]:hidden" />

</template>