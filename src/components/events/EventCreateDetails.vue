<template>
    <v-form @submit.prevent="submitForm" v-model="eventStore.sections[3]">
        <v-card color="transparent" max-width="600" flat>
            <v-card-title> Detalhes </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="pb-0 pt-1">
                        <span class="text-caption">Descrição do evento</span>
                        <v-textarea
                            variant="outlined"
                            density="compact"
                            rounded="large"
                            color="primary"
                            required
                            id="details"
                            :rules="[rules.required]"
                            v-model="event.description"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-title> Outros </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <template
                            v-if="
                                !event.price || typeof event.price === 'number'
                            "
                        >
                            <span class="text-caption">Preço</span>

                            <v-text-field
                                type="number"
                                variant="outlined"
                                density="compact"
                                rounded="pill"
                                color="primary"
                                hide-details="auto"
                                id="price"
                                v-model="event.price"
                            >
                            </v-text-field>
                        </template>
                        <template v-else>
                            <template
                                v-for="(p, key) in event.price"
                                :key="key"
                            >
                                <span class="text-caption"
                                    >Preço {{ key }}</span
                                >
                                <v-text-field
                                    variant="outlined"
                                    density="compact"
                                    rounded="pill"
                                    hide-details="auto"
                                    color="primary"
                                    id="price"
                                    v-model="event.price[key]"
                                >
                                </v-text-field>
                            </template>
                        </template>
                        <span class="text-caption">Idade</span>
                        <v-select
                            :items="ages"
                            variant="outlined"
                            density="compact"
                            rounded="pill"
                            hide-details="auto"
                            color="primary"
                            item-title="name"
                            item-value="value"
                            id="age"
                            v-model="event.age"
                        >
                        </v-select>
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

const { next, prev, rules } = defineProps(["next", "rules", "prev"]);

const eventStore = useEventStore();
const { event, ages } = storeToRefs(eventStore);
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