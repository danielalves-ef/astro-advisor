<template>
    <!-- <div style="height: 100%" class="d-flex justify-center align-center">
        <section class="d-flex justify-space-between align-center">
            <v-card color="transparent" min-width="300" flat>
                <v-card-title>Entrar na sua conta</v-card-title>
                <v-card-text>
                    <label class="text-caption" for="email">Email</label>
                    <v-text-field
                        id="email"
                        name="email"
                        type="email"
                        variant="outlined"
                        rounded="pill"
                        density="compact"
                    ></v-text-field>
                    <label class="text-caption" for="password">Password</label>

                    <v-text-field
                        id="password"
                        name="password"
                        type="password"
                        variant="outlined"
                        rounded="pill"
                        density="compact"
                    ></v-text-field>
                    <v-btn color="primary" rounded="pill" @click="login"
                        >Entrar</v-btn
                    >
                </v-card-text>
            </v-card>
            <v-divider class="mx-5" vertical></v-divider>
            <v-card color="transparent" min-width="300" flat>
                <v-card-title>Entrar na sua conta</v-card-title>
                <v-card-text>
                    <label class="text-caption" for="email">Email</label>
                    <v-text-field
                        id="email"
                        name="email"
                        type="email"
                        variant="outlined"
                        rounded="pill"
                        density="compact"
                    ></v-text-field>
                    <label class="text-caption" for="password">Password</label>

                    <v-text-field
                        id="password"
                        name="password"
                        type="password"
                        variant="outlined"
                        rounded="pill"
                        density="compact"
                    ></v-text-field>
                    <v-btn color="primary" rounded="pill" @click="login"
                        >Entrar</v-btn
                    >
                </v-card-text>
            </v-card>
        </section>
    </div> -->
    <section>
        <div class="bg-grey-darken-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="text-h2 mt-10">Entrar</h2>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div>
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="auto">
                        <v-card
                            color="transparent"
                            min-width="300"
                            max-width="400"
                            flat
                        >
                            <v-card-title>/ Seus dados</v-card-title>
                            <v-card-text>
                                <label class="text-caption" for="email"
                                    >Email</label
                                >
                                <v-text-field
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                    rounded="pill"
                                    density="compact"
                                    hide-details="auto"
                                    class="mb-2"
                                ></v-text-field>
                                <label class="text-caption" for="password"
                                    >Password</label
                                >

                                <v-text-field
                                    id="password"
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    rounded="pill"
                                    density="compact"
                                    class="mb-2"
                                    hide-details="auto"
                                ></v-text-field>
                                <v-btn
                                    class="text-capitalize mt-2"
                                    color="primary"
                                    rounded="pill"
                                    @click="login"
                                    >Entrar</v-btn
                                >
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="auto">
                        <v-card
                            color="transparent"
                            min-width="300"
                            max-width="400"
                            flat
                        >
                            <v-card-text>
                                <p class="text-h5">
                                    Novo por aqui? Inscreva-se
                                </p>
                                <v-btn
                                    color="primary"
                                    rounded="pill"
                                    class="text-capitalize mt-4"
                                    >Inscrever-se</v-btn
                                >
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>

<script setup >
import { useAuthStore } from "@/store/auth";
const auth = useAuthStore();

function login() {
    auth.loginWithGoogle();
}
</script>

<style>
</style>