<template>
    <v-overlay
        :model-value="appStore.loading"
        class="align-center justify-center"
        persistent
    >
        <v-card min-width="300" class="text-center">
            <v-card-text class="pa-10">
                <v-progress-circular
                    color="primary"
                    size="64"
                    indeterminate
                    width="8"
                ></v-progress-circular>

                <p
                    v-if="appStore.loadingText"
                    class="text-body-1 mt-4 font-weight-bold"
                >
                    {{ appStore.loadingText }}
                </p>
            </v-card-text>
        </v-card>
    </v-overlay>
</template>

<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
</style>