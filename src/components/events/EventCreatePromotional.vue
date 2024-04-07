<template>
    <v-form @submit.prevent="submitForm" v-model="eventStore.sections[4]">
        <v-card color="transparent" max-width="600" flat>
            <!-- <v-card-title> Promoters </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="pb-0 pt-1">
                        <span class="text-caption">Promoter principal</span>
                        <v-text-field
                            variant="outlined"
                            density="compact"
                            rounded="pill"
                            color="primary"
                            required
                            id="promoter"
                            :rules="[rules.required, rules.lengthMin4]"
                            v-model="event.promoter"
                        >
                        </v-text-field>
                        {{ files }}
                    </v-col>
                </v-row>
            </v-card-text> -->
            <v-card-title class="mb-4"> Images </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6" class="pb-0 pt-0">
                        <span class="text-caption">Flyer Front</span>

                        <v-file-input
                            v-model="files.flyerFront"
                            :show-size="1000"
                            color="deep-purple-accent-4"
                            placeholder="Select your files"
                            hide-details="auto"
                            variant="outlined"
                            :label="
                                files.flyerFront
                                    ? ''
                                    : 'Click or drag files to add'
                            "
                            counter
                            accept="image/*"
                            class="pa-0"
                            :clearable="false"
                            :prepend-icon="null"
                        >
                            <template v-slot:label>
                                <template v-if="!files.flyerFront">
                                    <span>
                                        <v-icon>mdi-camera</v-icon> Click or
                                        drag files to add</span
                                    >
                                </template>
                            </template>
                            <template v-slot:selection>
                                <template
                                    v-for="(file, index) in files.flyerFront"
                                    :key="index"
                                >
                                    <v-img :src="imagePreview(file)"> </v-img>
                                </template>
                            </template>
                        </v-file-input>
                    </v-col>

                    <v-col cols="12" md="6" class="pb-0 pt-0">
                        <span class="text-caption">Flyer back</span>

                        <v-file-input
                            v-model="files.flyerBack"
                            :show-size="1000"
                            color="deep-purple-accent-4"
                            placeholder="Select your files"
                            variant="outlined"
                            counter
                            :label="
                                files.flyerBack
                                    ? ''
                                    : 'Click or drag files to add'
                            "
                            hide-details="auto"
                            class="pa-0"
                            :clearable="false"
                            :prepend-icon="null"
                        >
                            <template v-slot:selection>
                                <template
                                    v-for="(file, index) in files.flyerBack"
                                    :key="index"
                                >
                                    <v-img :src="imagePreview(file)"> </v-img>
                                </template>
                            </template>
                            <template v-slot:default>
                                <p>Hello!</p>
                            </template>
                        </v-file-input>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-title> Promotional Links </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <span class="text-caption">Website</span>
                        <v-row
                            dense
                            no-gutters
                            v-for="(website, index) in event.website"
                            :key="index"
                        >
                            <v-col cols="3">
                                <v-select
                                    variant="outlined"
                                    density="compact"
                                    rounded="s-xl e-0"
                                    class="mt-2"
                                    color="primary"
                                    hide-details="auto"
                                    :items="['website', 'tickets', 'Vip List']"
                                    v-model="event.website[index].name"
                                ></v-select>
                            </v-col>
                            <v-col cols="9">
                                <v-text-field
                                    variant="outlined"
                                    density="compact"
                                    rounded="e-xl s-0"
                                    class="mt-2"
                                    color="primary"
                                    hide-details="auto"
                                    placeholder="Enter your website"
                                    v-model.lazy="event.website[index].url"
                                    :append-icon="
                                        event.website.length > 1
                                            ? 'mdi-close'
                                            : null
                                    "
                                    @click:append="
                                        event.website.splice(index, 1)
                                    "
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>

                        <v-btn
                            class="py-0 mt-2"
                            variant="text"
                            size="small"
                            @click="
                                event.website.push({ name: 'website', url: '' })
                            "
                            style="text-transform: none"
                            >+ Add website</v-btn
                        >
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-title> Media </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <p>
                            Add SoundCloud, YouTube or Mixcloud media links to
                            embed them on your event page.
                        </p>
                        <span class="text-caption">Media Link</span>
                        <v-text-field
                            v-for="(media, index) in event.medias"
                            :key="index"
                            variant="outlined"
                            density="compact"
                            rounded="pill"
                            class="mt-2"
                            color="primary"
                            hide-details="auto"
                            placeholder="Enter the link to the media"
                            v-model.lazy="event.medias[index]"
                            :append-icon="
                                event.medias.length > 1 ? 'mdi-close' : null
                            "
                            @click:append="event.medias.splice(index, 1)"
                        >
                        </v-text-field>
                        <v-btn
                            class="py-0 mt-2"
                            variant="text"
                            size="small"
                            @click="event.medias.push('')"
                            style="text-transform: none"
                            >+ Add media</v-btn
                        >
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-title> Event visibility </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <span class="text-caption">Visibility</span>
                        <v-switch
                            variant="outlined"
                            density="compact"
                            rounded="pill"
                            color="primary"
                        >
                        </v-switch>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn variant="tonal" color="secondary" @click="prev"
                    >Prev</v-btn
                >
                <v-spacer> </v-spacer>
                <v-btn variant="tonal" color="success" type="submit"
                    >Submit</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import { useEventStore } from "@/store/event.js";
import { storeToRefs } from "pinia";
// import { defineProps } from "vue";

const { prev } = defineProps(["prev", "rules"]);
const eventStore = useEventStore();

const { event, files } = storeToRefs(eventStore);
const emit = defineEmits(["submit"]);

console.log({ files });
// const formValid = ref(false);

const imagePreview = computed(() => {
    return (file) => {
        return URL.createObjectURL(file);
    };
});

async function submitForm(e) {
    const results = await e;
    if (!results.valid) {
        document.querySelector("#" + results.errors[0].id).focus();
        return false;
    }
    return emit("submit");
}
</script>

<style lang="scss">
input[type="file"] + .v-field__input {
    padding: 0px;
}
</style>