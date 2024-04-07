<template>
    <v-app>
        <pro-bar />
        <pro-view />
        <pro-footer />
        <loading-overlay />
    </v-app>
</template>

<script setup>
import ProBar from "./ProAppBar.vue";
import ProView from "./ProView.vue";
import ProFooter from "./ProFooter.vue";
import LoadingOverlay from "@/components/interface/LoadingOverlay.vue";
</script>
