<template>
    <v-container>
        <v-row>
            <v-col cols="auto">
                {{ menuSelected }}
                <v-list
                    v-model:selected="menuSelected"
                    max-width="300"
                    min-width="200"
                    :multiple="false"
                >
                    <v-list-item link :value="0">
                        <template v-slot:prepend>
                            <v-avatar size="x-small" color="primary">
                                <span>1</span>
                            </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6">
                            Basico
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link :value="1">
                        <template v-slot:prepend>
                            <v-avatar size="x-small" color="primary">
                                <span>2</span>
                            </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6">
                            Lineup
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link :value="2">
                        <template v-slot:prepend>
                            <v-avatar size="x-small" color="primary">
                                <span>3</span>
                            </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6">
                            Detalhes
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link :value="3">
                        <template v-slot:prepend>
                            <v-avatar size="x-small" color="primary">
                                <span>4</span>
                            </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6">
                            Promocional
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col>
                <v-window v-model="menuSelected" :continuous="true">
                    <v-window-item>
                        <v-card max-width="600" flat>
                            <v-card-title> Basico </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-caption"
                                            >Event name</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            rounded="pill"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-title> Local </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-caption"
                                            >Local do evento</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption">Cidade</span>
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption">Região</span>
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-window-item>

                    <v-window-item>
                        <v-card max-width="600" flat>
                            <v-card-title> Lineup </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-caption"
                                            >Event name</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            rounded="pill"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-title> Local </v-card-title>
                        </v-card>
                    </v-window-item>

                    <v-window-item>
                        <v-card max-width="600" flat>
                            <v-card-title> Detaalhes </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-caption"
                                            >Event name</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            rounded="pill"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-title> Local </v-card-title>
                        </v-card>
                    </v-window-item>

                    <v-window-item>
                        <v-card max-width="600" flat>
                            <v-card-title> Promotional </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-caption"
                                            >Event name</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >Start Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Date</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            variant="outlined"
                                            density="compact"
                                            type="date"
                                            rounded="pill"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text-caption"
                                            >End Time</span
                                        >
                                        <v-text-field
                                            hide-details="auto"
                                            rounded="pill"
                                            variant="outlined"
                                            density="compact"
                                            type="time"
                                            color="primary"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-title> Local </v-card-title>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <event-create-basic></event-create-basic>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import EventCreateBasic from "@/components/events/EventCreateBasic.vue";

const menuSelected = ref(0);
</script>

<style lang="scss" scoped>
</style>