<template>
    <div class="d-flex flex-column" style="height: 100%">
        <event-list-region-select></event-list-region-select>
        <event-list-toolbar></event-list-toolbar>
        <event-list-featured></event-list-featured>
        <event-list-next-events></event-list-next-events>
        <event-list-popular-news></event-list-popular-news>
        <event-list-links-footer></event-list-links-footer>
    </div>
</template>

<script setup>
import { ref } from "vue";
import EventListRegionSelect from "@/components/events/EventListRegionSelect.vue";
import EventListToolbar from "@/components/events/EventListToolbar.vue";
import EventListFeatured from "@/components/events/EventListFeatured.vue";
import EventListNextEvents from "@/components/events/EventListNextEvents.vue";
import EventListPopularNews from "@/components/events/EventListPopularNews.vue";
import EventListLinksFooter from "@/components/events/EventListLinksFooter.vue";

const places = [
    { name: "Barcelona", flag: "es" },
    { name: "Madrid", icon: "es" },
    { name: "Sevilla", icon: "es" },
];
</script>

<style lang="scss" scoped>
img {
    display: block;
    width: 100%;
}
</style>