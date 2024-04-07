<template>
    <v-app>
        <admin-bar />
        <admin-view />
        <admin-footer />
        <loading-overlay />
    </v-app>
</template>

<script setup>
import AdminBar from "./AdminAppBar.vue";
import AdminView from "./AdminView.vue";
import AdminFooter from "./AdminFooter.vue";
import LoadingOverlay from "@/components/interface/LoadingOverlay.vue";
</script>
