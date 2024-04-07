<template>
    <v-app>
        <default-bar />
        <default-view />
        <default-footer />
        <loading-overlay />
    </v-app>
</template>

<script setup>
import DefaultBar from "./DefaultAppBar.vue";
import DefaultView from "./DefaultView.vue";
import DefaultFooter from "./DefaultFooter.vue";
import LoadingOverlay from "@/components/interface/LoadingOverlay.vue";
</script>
