<template>
    <svg viewBox="0 0 24 24" :name="props.country" width="100%" height="100%">
        <template v-if="props.country === 'es'">
            <g fill="none" fill-rule="nonzero">
                <path
                    d="M0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.783.746 7.826A11.974 11.974 0 000 12z"
                    fill="#FFDA44"
                ></path>
                <g fill="#D80027">
                    <path
                        d="M23.254 7.826C21.558 3.256 17.16 0 12 0 6.84 0 2.442 3.257.746 7.826h22.508zM.746 16.174C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.257 11.254-7.826H.746z"
                    ></path>
                </g>
            </g>
        </template>
        <template v-else>
            <g fill="none" fill-rule="nonzero">
                <path
                    d="M0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.783.746 7.826A11.974 11.974 0 000 12z"
                    fill="#FFDA44"
                ></path>
                <g fill="#D80027">
                    <path
                        d="M23.254 7.826C21.558 3.256 17.16 0 12 0 6.84 0 2.442 3.257.746 7.826h22.508zM.746 16.174C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.257 11.254-7.826H.746z"
                    ></path>
                </g>
            </g>
        </template>
    </svg>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["country"]);
</script>

<style lang="scss" scoped>
</style>