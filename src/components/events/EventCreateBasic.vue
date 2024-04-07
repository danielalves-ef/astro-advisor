<template>
    <v-form @submit.prevent="submitForm" v-model="eventStore.sections[1]">
        <v-card color="transparent" max-width="600" flat>
            <!-- HEADER BASICO -->
            <v-card-title>
                <div class="d-flex align-center">
                    <span> Basico </span>
                    <v-spacer> </v-spacer>
                    <event-create-gpt-assistence></event-create-gpt-assistence>
                </div>
            </v-card-title>
            <v-card-text class="px-0">
                <v-row dense>
                    <!-- Field event.name -->
                    <v-col cols="12" class="pb-0 pt-2">
                        <p class="text-caption">Event name</p>
                        <v-text-field
                            v-bind="fieldAttrs"
                            :rules="[rules.required, rules.lengthMin4]"
                            required
                            v-model="event.name"
                        >
                        </v-text-field>
                    </v-col>
                    <!-- Field event.startDate -->
                    <v-col cols="8" sm="6" class="pb-0 pt-0">
                        <span class="text-caption">Start Date</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            type="date"
                            id="startDate"
                            :rules="[rules.required]"
                            required
                            v-model="event.startDate"
                        >
                        </v-text-field>
                    </v-col>
                    <!-- Field event.startTime -->
                    <v-col cols="4" sm="6" class="pb-0 pt-0">
                        <span class="text-caption">Start Time</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            type="time"
                            required
                            id="startTime"
                            :rules="[rules.required]"
                            v-model="event.startTime"
                        >
                        </v-text-field>
                    </v-col>
                    <!-- Field event.endDate -->
                    <v-col cols="8" sm="6" class="pb-0 pt-1">
                        <span class="text-caption">End Date</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            type="date"
                            required
                            :min="event.startDate"
                            id="endDate"
                            :rules="[rules.required]"
                            v-model="event.endDate"
                        >
                        </v-text-field>
                    </v-col>
                    <!-- Field event.endTime -->
                    <v-col cols="4" sm="6" class="pb-0 pt-1">
                        <span class="text-caption">End Time</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            type="time"
                            required
                            :rules="[rules.required]"
                            id="endTime"
                            v-model="event.endTime"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <!-- HEADER LOCAL -->
            <v-card-title> Local </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-radio-group
                            v-model="localDefined"
                            class="d-flex"
                            inline
                        >
                            <v-radio
                                label="Local conhecido"
                                :value="true"
                            ></v-radio>
                            <v-radio
                                label="Local a definir"
                                :value="false"
                            ></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row v-if="localDefined">
                    <!-- Field event.localName -->
                    <v-col cols="12">
                        <span class="text-caption">Local do evento</span>
                        <v-autocomplete
                            v-bind="fieldAttrs"
                            v-model="location"
                            :items="locations"
                            item-value="id"
                            item-title="name"
                            @update:modelValue="changeLocation"
                        >
                        </v-autocomplete>
                    </v-col>
                </v-row>
                <v-row v-else>
                    <!-- Field event.localName -->
                    <v-col cols="12">
                        <span class="text-caption">Local do evento</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            v-model="event.localName"
                        >
                        </v-text-field>
                        <!-- <Textarea v-model="event.localName"></Textarea> -->
                    </v-col>
                    <!-- Field event.region -->
                    <v-col cols="6">
                        <span class="text-caption">Região</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            :rules="[rules.required]"
                            v-model="event.region"
                        >
                        </v-text-field>
                    </v-col>
                    <!-- Field event.country -->
                    <v-col cols="6">
                        <span class="text-caption">Country</span>
                        <v-text-field
                            v-bind="fieldAttrs"
                            v-model="event.country"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <!-- ACTIONS -->
            <v-card-actions>
                <!-- BUTTON SUBMIT -->
                <v-btn
                    variant="tonal"
                    color="primary"
                    type="submit"
                    class="ml-auto"
                    >Next</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script setup>
import { ref, inject } from "vue";
import EventCreateGptAssistence from "@/components/events/EventCreateGptAssistence.vue";

import { useEventStore } from "@/store/event.js";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

const { next, rules } = defineProps(["next", "rules"]);
const eventStore = useEventStore();

const { event, $v } = storeToRefs(eventStore);
const { fieldAttrs } = inject("$helpers");
console.log({ fieldAttrs });

console.log({ $v });

// const formValid = ref(false);
const localDefined = ref(true);
const location = ref(null);

const locations = ref([
    {
        name: "Location 01",
        id: "1",
        country: "BR",
        region: "east",
    },
    {
        name: "Location 02",
        id: "2",
        country: "BR",
        region: "north",
    },
    {
        name: "Location 03",
        id: "3",
        country: "BR",
        region: "east",
    },
    {
        name: "Location 04",
        id: "4",
        country: "BR",
        region: "east",
    },
    {
        name: "Location 05",
        id: "5",
        country: "BR",
        region: "north",
    },
    {
        name: "Location 06",
        id: "6",
        country: "BR",
        region: "south",
    },
]);

async function submitForm(e) {
    const results = await e;
    if (!results.valid) {
        document.querySelector("#" + results.errors[0].id).focus();
        return false;
    }
    console.log("submitForm");
    next();
}

function changeLocation(e) {
    console.log({ e });
    const locationToSet = locations.value.find((l) => l.id === e);
    console.log({ locationToSet });
    if (locationToSet) {
        event.value.region = locationToSet.region;
        event.value.country = locationToSet.country;
        event.value.localName = locationToSet.name;
    }
}
</script>

<style lang="scss" scoped>
</style>