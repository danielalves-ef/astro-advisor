<template>
    <v-bottom-sheet v-model="opened">
        <template v-slot:activator="{ props }">
            <div class="text-center">
                <v-btn
                    v-bind="props"
                    color="primary"
                    size="x-small"
                    text="Virtual assistent"
                    variant="plain"
                ></v-btn>
            </div>
        </template>

        <div class="text-center bg-grey-darken-4">
            <v-toolbar density="compact">
                <v-spacer></v-spacer>
                <v-btn @click="close" icon><v-icon>mdi-close</v-icon></v-btn>
            </v-toolbar>
            <v-card max-width="600" class="mx-auto">
                <v-card-title> Virtual Assistent </v-card-title>
                <v-card-text>
                    <p class="text-body-2 mb-4">
                        Cole o texto de divulgação e deixe que nossa assistente
                        virtual te ajude a preencher os dados do evento
                    </p>
                    <v-textarea
                        variant="filled"
                        rows="12"
                        color="primary"
                        v-model="text"
                    >
                    </v-textarea>
                    <v-btn color="primary" class="mb-4" @click="useAssistente">
                        Enviar texto
                    </v-btn>
                </v-card-text>
            </v-card>
        </div>
    </v-bottom-sheet>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useChatgptStore } from "@/store/chatgpt.js";
import { useEventStore } from "@/store/event.js";
import { ref } from "vue";

const chatgptStore = useChatgptStore();
const eventStore = useEventStore();
const appStore = useAppStore();

const opened = ref(false);
const text = ref(null);

async function useAssistente() {
    try {
        appStore.loading = true;
        appStore.loadingText = "Converting text...";

        const response = await chatgptStore.fetchEventAssistente(text.value);
        console.log({ response });
        const content = JSON.parse(response.choices[0].message.content);

        eventStore.event = {
            ...eventStore.event,
            ...content,
        };
    } catch (error) {
        console.log({ error });
    } finally {
        appStore.loading = false;
        appStore.loadingText = null;
        close();
    }
}

function close() {
    opened.value = false;
}
</script>

<style lang="scss" scoped>
</style>