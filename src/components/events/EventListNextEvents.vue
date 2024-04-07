<template>
    <section class="bg-grey-darken-4 flex-grow-1">
        <!-- <v-container>
            <v-row>
                <v-col cols="12">
                    <v-list>
                        <template
                            v-for="(events, day) in eventsByDay"
                            :key="day"
                        >
                            <v-toolbar sticky>
                                <v-icon size="x-small">mdi-calendar</v-icon>
                                {{ day }}
                            </v-toolbar>
                            <v-list-item
                                v-for="event in events"
                                :key="event.id"
                            >
                                <v-list-item-media start>
                                    <v-img
                                        cover
                                        src="https://imgproxy.ra.co/_/w:1028/quality:50/h:1454/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vN2Y1MDhiOTQ3NTZlNzY2ODlkMTk2MGZkZWUxNjg1NjIyMjEyNTc5Ni5qcGc="
                                        width="215"
                                        height="121"
                                    ></v-img>
                                </v-list-item-media>
                                <v-list-item-title>
                                    {{ event.title }}
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list>

                    <p class="text-h5">
                        <v-icon size="x-small">mdi-calendar</v-icon> {{ day }}
                    </p>
                    <v-col v-for="event in events" :key="id">
                        <v-divider class="mb-2"></v-divider>
                        <v-card flat>
                            <v-row>
                                <v-col cols="auto">
                                    <v-img
                                        cover
                                        src="https://imgproxy.ra.co/_/w:1028/quality:50/h:1454/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vN2Y1MDhiOTQ3NTZlNzY2ODlkMTk2MGZkZWUxNjg1NjIyMjEyNTc5Ni5qcGc="
                                        width="215"
                                        height="121"
                                    ></v-img>
                                </v-col>
                                <v-col>
                                    <p
                                        class="text-grey-darken-1 font-weight-bold"
                                    >
                                        {{ event.date }}
                                    </p>
                                    <p class="text-h5 font-weight-bold">
                                        {{ event.title }}
                                    </p>
                                    <p
                                        class="text-white text-caption pl-1 mt-2"
                                    >
                                        <v-icon size="large" color="red"
                                            >mdi-map-marker-outline</v-icon
                                        >
                                        {{ event.location }}
                                    </p>
                                    <p
                                        class="text-white text-caption pl-1 mt-2"
                                    >
                                        <v-icon size="large" color="red"
                                            >mdi-account-outline</v-icon
                                        >
                                        {{ event.attendees }}
                                    </p>
                                </v-col>
                                <v-col cols="auto" align-self="end">
                                    <v-btn
                                        size="x-small"
                                        rounded="pill"
                                        color="red-darken-4"
                                        ><v-icon start>mdi-ticket</v-icon
                                        >{{ event.code }}</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container> -->

        <v-container>
            <v-row v-for="(events, day) in eventsByDay" :key="day">
                <v-col cols="12">
                    <v-toolbar
                        color="grey-darken-4"
                        style="position: sticky; top: 48px; z-index: 999"
                    >
                        <v-toolbar-title>
                            <p class="text-h5">
                                <v-icon size="x-small">mdi-calendar</v-icon>
                                {{ day }}
                            </p>
                        </v-toolbar-title>
                    </v-toolbar>

                    <v-col v-for="event in events" :key="event.id">
                        <v-divider class="mb-2"></v-divider>
                        <v-card flat>
                            <v-row>
                                <v-col>
                                    <p
                                        class="text-grey-darken-1 font-weight-bold"
                                    >
                                        {{ event.date }}
                                    </p>
                                    <p class="text-h5 font-weight-bold">
                                        {{ event.title }}
                                    </p>
                                    <p
                                        class="text-white text-caption pl-1 mt-2"
                                    >
                                        <v-icon size="large" color="red"
                                            >mdi-map-marker-outline</v-icon
                                        >
                                        {{ event.location }}
                                    </p>
                                    <p
                                        class="text-white text-caption pl-1 mt-2"
                                    >
                                        <v-icon size="large" color="red"
                                            >mdi-account-outline</v-icon
                                        >
                                        {{ event.attendees }}
                                    </p>
                                </v-col>
                                <v-col cols="auto" align-self="end">
                                    <v-btn
                                        size="x-small"
                                        rounded="pill"
                                        color="red-darken-4"
                                        ><v-icon start>mdi-ticket</v-icon
                                        >{{ event.code }}</v-btn
                                    >
                                </v-col>
                            </v-row>

                            <!-- <div
                                style="
                                    display: grid;
                                    grid-template-columns: repeat(10, 1fr);
                                "
                            >
                                <div style="grid-column: span 3">
                                    <img
                                        src="https://imgproxy.ra.co/_/w:1028/rt:fill/enlarge:true/quality:50/h:578/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWE4YWRhYzA0NDY4YzAyZTVjZDRmN2I2OTk5OGE0NjE4MTM0YWUwYy5qcGc="
                                        alt=""
                                    />
                                </div>
                                <div style="grid-column: span 7">
                                    <p class="text-subtitle-1">
                                        {{ event.title }}
                                    </p>
                                </div>
                            </div> -->
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import { ref } from "vue";

const eventsByDay = ref({
    "TUE, 26 DEC": [
        {
            id: 1,
            title: "Andami pres: SECRET VILLA TAKEOVER",
            location: "TBA",
            attendees: 8,
            date: "TUE, 26 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 2,
            title: "MELODICA DE NAVIDAD TARDEO SESSION",
            location: "M7 Club",
            attendees: 80,
            date: "TUE, 26 DEC",
            code: "GREYSON",
            // other event details
        },
        {
            id: 3,
            title: "MAKINA IS BACK (PSICODROMO BARCELONA)",
            location: "WOLF Barcelona",
            attendees: 32,
            date: "TUE, 26 DEC",
            code: "DIVISION",
        },
        // ... additional events
    ],
    "WED, 27 DEC": [
        {
            id: 4,
            title: "Electro Night Out",
            location: "Club Electron",
            attendees: 15,
            date: "WED, 27 DEC",
            code: "TUBB9",
            // other event details
        },
        {
            id: 5,
            title: "Jazz & Blues Evening",
            location: "Downtown Jazz Bar",
            attendees: 15,
            date: "WED, 27 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 6,
            title: "Electro Night Out",
            location: "Club Electron",
            attendees: 15,
            date: "WED, 27 DEC",
            code: "TUBB9",
            // other event details
        },
        {
            id: 7,
            title: "Jazz & Blues Evening",
            location: "Downtown Jazz Bar",
            attendees: 15,
            date: "WED, 27 DEC",
            code: "MAGRAND",
            // other event details
        },
        // ... additional events
    ],
    "THU, 28 DEC": [
        {
            id: 8,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 9,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 11,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 10,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 12,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 13,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        // ... additional events
    ],

    "FRI, 29 DEC": [
        {
            id: 8,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 9,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 11,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 10,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 12,
            title: "Techno Titans: Winter Edition",
            location: "Arena Sound Stage",
            attendees: 25,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        {
            id: 13,
            title: "Rooftop Rhythms: DJ Set Live",
            location: "Skyline Terrace",
            attendees: 40,
            date: "THU, 28 DEC",
            code: "MAGRAND",
            // other event details
        },
        // ... additional events
    ],
    // ... additional days with events
});
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 100%;
}
</style>    