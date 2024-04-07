<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="text-h4 mt-5 mb-5 font-weight-bold">
                    <v-icon start>mdi-lightning-bolt-outline</v-icon>
                    POPULAR NEWS
                </p>
                <v-divider></v-divider>
                <template v-for="(item, index) in newsItems" :key="item.id">
                    <v-list-item>
                        <template #prepend>
                            <span class="text-h6 font-weight-bold text-red">{{
                                index + 1
                            }}</span>
                        </template>
                        <v-list-item>
                            <a
                                class="text-decoration-none text-h6 ml-5"
                                href=""
                            >
                                {{ item.headline }}
                            </a>
                        </v-list-item>
                    </v-list-item>
                    <v-divider></v-divider>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";

const newsItems = ref([
    {
        id: 1,
        headline:
            "New York disbands M.A.R.C.H. task force behind venue police raids, announces C.U.R.E.",
    },
    { id: 2, headline: "2023's top news stories" },
    {
        id: 3,
        headline:
            "UK canal boat shop Rubber Ducky Records reopens after sinking",
    },
    {
        id: 4,
        headline:
            "Damon Wild reveals Pleasure Builder, his first album since 2017",
    },
    {
        id: 5,
        headline: "DJ Tennis launches Instagram cooking show, MunchieTown",
    },
    { id: 6, headline: "Paris label Casual Gabberz closes after ten years" }, // Add more news items as needed
]);
</script>

<style lang="scss" scoped>
a {
    color: white;
}

a:hover {
    color: red;
}
</style>