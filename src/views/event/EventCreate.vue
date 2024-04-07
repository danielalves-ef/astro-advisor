<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-stepper
                    bg-color="transparent"
                    flat
                    ref="stepper"
                    v-model="step"
                    class="d-flex"
                    color="primary"
                    v-slot:default="{ next, prev }"
                >
                    <v-stepper-header
                        v-show="!xs"
                        class="flex-column justify-start pt-5 mr-4"
                    >
                        <v-stepper-item
                            v-for="(header, index) in headers"
                            :key="header"
                            class="pb-2 pt-2"
                            :complete="
                                eventStore.sections[index + 1] &&
                                index + 1 !== step
                            "
                            :editable="
                                index + 1 === 1
                                    ? true
                                    : step > index + 1 ||
                                      eventStore.sections[index + 1]
                            "
                            :title="header"
                            :value="index + 1"
                            color="primary"
                            selected-class="text-primary font-weight-bold"
                        >
                        </v-stepper-item>
                    </v-stepper-header>

                    <div class="flex-grow-1">
                        <v-stepper-window
                            class="flex-grow-1 mx-0 ma-0"
                            style="margin: 0px"
                        >
                            <!-- BASIC -->
                            <v-stepper-window-item :value="1">
                                <event-create-basic
                                    :next="next"
                                    :rules="rules"
                                ></event-create-basic>
                            </v-stepper-window-item>
                            <!-- LINEUP -->
                            <v-stepper-window-item :value="2">
                                <event-create-lineup
                                    :next="next"
                                    :prev="prev"
                                    :rules="rules"
                                ></event-create-lineup>
                            </v-stepper-window-item>
                            <!-- DETALHES -->
                            <v-stepper-window-item :value="3">
                                <event-create-details
                                    :next="next"
                                    :prev="prev"
                                    :rules="rules"
                                ></event-create-details>
                            </v-stepper-window-item>
                            <!-- PROMOCIONAL -->
                            <v-stepper-window-item :value="4">
                                <event-create-promotional
                                    @submit="submit"
                                    :prev="prev"
                                    :rules="rules"
                                ></event-create-promotional>
                            </v-stepper-window-item>
                        </v-stepper-window>
                    </div>
                </v-stepper>
            </v-col>
            <!-- <v-col cols="12">
                <pre>
                    {{ eventStore.sections }}
                </pre>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<script setup>
// Components
import EventCreateBasic from "@/components/events/EventCreateBasic.vue";
import EventCreateLineup from "@/components/events/EventCreateLineup.vue";
import EventCreateDetails from "@/components/events/EventCreateDetails.vue";
import EventCreatePromotional from "@/components/events/EventCreatePromotional.vue";

import { ref } from "vue";
import { useEventStore } from "@/store/event.js";
import { useDisplay } from "vuetify/lib/framework.mjs";
const headers = ref(["Basico", "Lineup", "Detalhes", "Promocional"]);
// import { storeToRefs } from "pinia";
// const { sectionBasicComplete } = storeToRefs(eventStore);
const eventStore = useEventStore();

const stepper = ref(null);
const step = ref(1);
const { xs } = useDisplay();
const rules = ref({
    required: (value) => !!value || "Field is required",
    lengthMin4: (value) => value.length > 3 || "Must be at least 4 characters",
});

// function next() {
//     stepper.value.next();
// }
// function prev() {
//     stepper.value.prev();
// }
async function submit() {
    console.log("submit");
    const response = await eventStore.createEvent();
    if (response.ok) {
        eventStore.$reset();
        step.value = 1;
    }
    console.log("submitForm");
}
</script>

<style lang="scss" scoped>
</style>