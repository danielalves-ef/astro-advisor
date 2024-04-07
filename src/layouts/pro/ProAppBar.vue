<template>
    <v-app-bar flat color="white" density="compact">
        <v-container>
            <v-row>
                <v-col cols="auto">
                    <v-btn variant="plain" icon>
                        <v-icon icon="mdi-rocket" /> </v-btn
                ></v-col>
                <v-col>
                    <nav>
                        <v-btn style="text-transform: none" variant="plain"
                            >Eventos</v-btn
                        >
                        <v-btn style="text-transform: none" variant="plain"
                            >Musica</v-btn
                        >
                        <v-btn style="text-transform: none" variant="plain"
                            >Revista</v-btn
                        >
                        <v-btn style="text-transform: none" variant="plain"
                            >Store</v-btn
                        >
                    </nav>
                </v-col>
                <v-col cols="auto">
                    <v-app-bar-nav-icon
                        @click="opened = !opened"
                    ></v-app-bar-nav-icon>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

// const items = ref([
//     { title: "Events", to: "events" },
//     { title: "Music", to: "music" },
//     { title: "Contact", to: "contact" },
// ]);
const opened = ref(false);
</script>
