<template>
    <section class="bg-grey-darken-4 flex-grow-1">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="text-caption ml-4 text-grey mt-2">
                        Eventos em breve
                    </p>
                </v-col>
                <v-col cols="12">
                    <p class="text-h4 ml-4 text-red mt-2">/ Popular</p>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="event in events" :key="event.title">
                    <v-card flat max-width="300" color="transparent">
                        <v-img height="395" cover :src="event.image"></v-img>
                        <div class="mt-2">
                            <p class="text-grey-darken-1 font-weight-bold">
                                {{ event.date }}
                            </p>
                            <p
                                class="text-white font-weight-bold"
                                style="font-size: 1.2rem"
                            >
                                {{ event.title }}
                            </p>
                            <p class="text-white text-caption pl-1 mt-2">
                                <v-icon size="large" color="red"
                                    >mdi-map-marker-outline</v-icon
                                >
                                {{ event.location }}
                            </p>
                            <p class="text-white text-caption pl-1 mt-2">
                                <v-icon size="large" color="red"
                                    >mdi-account-outline</v-icon
                                >
                                {{ event.attendees }}
                            </p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    {
        title: "TRANSC.END with BOB MOSES",
        date: "SAT, 30 DEC",
        location: "Morro Da Urca",
        image: "/img/path-to-event-image.jpg",
        attendees: 58,
    },
    {
        title: "4 FINEST EARS - RÉVEILLON 2024",
        date: "SUN, 31 DEC",
        location: "TBA - Rua Tenente Marcin Pinto, n125, Gávea - RJ",
        image: "/img/path-to-event-image.jpg",
        attendees: 8,
    },
    {
        title: "Reveillon NEW ´24 - Sheraton Grand Rio Hotel & Resort",
        date: "SUN, 31 DEC",
        location: "TBA - Sheraton Grand Rio Hotel & Resort (Leblon)",
        image: "/img/path-to-event-image.jpg",
        attendees: 7,
    },
    {
        title: "Terraço do Amor by Fica Comigo",
        date: "SAT, 30 DEC",
        location: "TBA - Sheraton Grand Rio Hotel & Resort",
        image: "/img/path-to-event-image.jpg",
        attendees: 2,
    },

    // Add more events as needed
]);
</script>

<style lang="scss" scoped>
</style>