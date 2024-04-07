<template>
    <v-form @submit.prevent="submitForm" v-model="eventStore.sections[2]">
        <v-card color="transparent" max-width="600" flat>
            <v-card-title> Lineup </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="pb-0 pt-1">
                        <span class="text-caption">Lineup</span>
                        <v-textarea
                            variant="outlined"
                            density="compact"
                            rounded="large"
                            color="primary"
                            required
                            id="lineup"
                            :rules="[rules.required]"
                            v-model="event.lineup"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-title> Generos </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <span class="text-caption">Generos</span>
                        <v-autocomplete
                            :items="genres"
                            variant="outlined"
                            density="compact"
                            rounded="pill"
                            closable-chips
                            auto-select-first
                            :clear-on-select="true"
                            chips
                            color="primary"
                            item-title="name"
                            :rules="[rules.required]"
                            id="genres"
                            v-model="event.genres"
                            multiple
                            item-value="value"
                        >
                        </v-autocomplete>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn variant="tonal" color="secondary" @click="prev"
                    >Prev</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn variant="tonal" color="primary" type="submit"
                    >Next</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script setup>
// import { ref } from "vue";
import { useEventStore } from "@/store/event.js";
import { storeToRefs } from "pinia";
import { defineProps } from "vue";

const { next, rules, prev } = defineProps(["next", "rules", "prev"]);
const eventStore = useEventStore();
const { event, genres } = storeToRefs(eventStore);
// const formValid = ref(false);
async function submitForm(e) {
    const results = await e;
    if (!results.valid) {
        document.querySelector("#" + results.errors[0].id).focus();
        return false;
    }
    console.log("submitForm");
    next();
}
</script>

<style lang="scss" scoped>
</style>