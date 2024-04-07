<template>
    <section>
        <div class="bg-grey-darken-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="text-h2 mt-10">Inscrever-se</h2>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-form @submit.prevent="submitRegister">
            <v-container>
                <v-row>
                    <v-col md="8" cols="12">
                        <v-card color="transparent" max-width="600" flat>
                            <v-card-title class="text-h4 mb-4"
                                >/ Seus dados</v-card-title
                            >

                            <!-- SOBRE VOCE -->
                            <v-card-subtitle class="text-h5"
                                >Sobre você</v-card-subtitle
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="name"
                                            >Name</label
                                        >
                                        <v-text-field
                                            id="name"
                                            name="name"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.name"
                                            required
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="surname"
                                            >Surname</label
                                        >
                                        <v-text-field
                                            id="surname"
                                            name="surname"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2 required"
                                            required
                                            v-model="user.surname"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label class="text-caption" for="gender"
                                            >Gender</label
                                        >
                                        <v-text-field
                                            id="gender"
                                            name="gender"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.gender"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="language"
                                            >Language</label
                                        >
                                        <v-select
                                            id="language"
                                            name="language"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.language"
                                            :rules="[rules.required]"
                                            :items="languages"
                                            itemValue="value"
                                            itemTitle="title"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <!-- INFORMACOES DE LOGIN -->
                            <v-card-subtitle class="text-h5 mt-10"
                                >Informações de Login</v-card-subtitle
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="email"
                                            >Email</label
                                        >
                                        <v-text-field
                                            id="email"
                                            name="email"
                                            type="email"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.email"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="email_confirm"
                                            >Confirmar email</label
                                        >
                                        <v-text-field
                                            id="email_confirm"
                                            name="email_confirm"
                                            type="email"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="emailConfirm"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="username"
                                            >Nome de usuario</label
                                        >
                                        <v-text-field
                                            id="username"
                                            name="username"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.username"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="password"
                                            >Senha</label
                                        >
                                        <v-text-field
                                            id="password"
                                            name="password"
                                            :type="
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            "
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            :append-inner-icon="
                                                showPassword
                                                    ? 'mdi-eye'
                                                    : 'mdi-eye-off'
                                            "
                                            @click:append-inner="
                                                showPassword = !showPassword
                                            "
                                            v-model="user.password"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <!-- LOCALIZACAO -->
                            <v-card-subtitle class="text-h5 mt-10"
                                >Localização</v-card-subtitle
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="country"
                                            >Pais</label
                                        >
                                        <v-text-field
                                            id="country"
                                            name="country"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.country"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" class="py-0">
                                        <label
                                            class="text-caption required"
                                            for="region"
                                            >area</label
                                        >
                                        <v-text-field
                                            id="region"
                                            name="region"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.region"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <!-- ANIVERSARIO -->
                            <v-card-subtitle class="text-h5 mt-10"
                                >Aniversario</v-card-subtitle
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="4" class="py-0">
                                        <label
                                            class="text-caption"
                                            for="birthday"
                                            >Dia</label
                                        >
                                        <v-text-field
                                            id="birthday"
                                            name="birthday"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.birthday"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="py-0">
                                        <label
                                            class="text-caption"
                                            for="birthmonth"
                                            >Mes</label
                                        >
                                        <v-text-field
                                            id="birthmonth"
                                            name="birthmonth"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.birthmonth"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="4" class="py-0">
                                        <label
                                            class="text-caption"
                                            for="birthyear"
                                            >Ano</label
                                        >
                                        <v-text-field
                                            id="birthyear"
                                            name="birthyear"
                                            variant="outlined"
                                            rounded="pill"
                                            density="compact"
                                            class="mb-2"
                                            v-model="user.birthyear"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <!-- MARKETING CONSENT -->
                            <v-card-subtitle class="text-h5 mt-10"
                                >Junte-se a comunidade
                            </v-card-subtitle>
                            <v-card-text>
                                <p>
                                    Inscreva-se a Newsletter semanal da RA para
                                    receberes atualizações sobre as últimas
                                    notícias e eventos
                                </p>
                                <v-checkbox
                                    label="Se increver"
                                    v-model="user.emailOptin"
                                    name="emailOptin"
                                    id="emailOptin"
                                ></v-checkbox>
                                <v-btn
                                    color="primary"
                                    type="submit"
                                    :loading="loading"
                                    >Registrar</v-btn
                                >
                                <p>
                                    Ao se registrar, você indica que leu e
                                    concorda com os Termos de Uso e a Política
                                    de Privacidade
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card
                            color="transparent"
                            width="300"
                            flat
                            position="sticky"
                            style="top: 50px; position: sticky"
                        >
                            <v-card-text>
                                <p class="text-h5">Ja tem uma conta?</p>
                                <v-btn
                                    color="primary"
                                    rounded="pill"
                                    class="text-capitalize mt-4"
                                    >Entrar</v-btn
                                >
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </section>
</template>

<script setup >
import { useAuthStore } from "@/store/auth";
import { ref } from "vue";
const auth = useAuthStore();

console.log({ auth });

const emailConfirm = ref(null);
const showPassword = ref(false);
// const $swal = inject("$swal");
const loading = ref(false);
const user = ref({
    name: null,
    surname: null,
    gender: null,
    language: null,
    email: null,
    password: null,
    username: null,
    birthday: null,
    birthmonth: null,
    birthyear: null,
    emailOptin: false,
});

const rules = ref({
    required: (value) => !!value || "Field is required",
});

const languages = ref([
    { title: "English", value: "en" },
    { title: "Spanish", value: "es" },
    { title: "Portuguese", value: "pt" },
    { title: "Italian", value: "it" },
]);

async function submitRegister(event) {
    try {
        loading.value = true;
        const results = await event;
        if (!results.valid) {
            document.querySelector("#" + results.errors[0].id).focus();
            return false;
        }
        const registeredUser = {
            name: user.value.name,
            surname: user.value.surname,
            gender: user.value.gender,
            language: user.value.language,
            email: user.value.email,
            username: user.value.username,
            country: user.value.country,
            region: user.value.region,
            birthday: `${user.value.birthyear}-${user.value.birthmonth}-${user.value.birthday}`,
            emailOptin: user.value.emailOptin,
        };

        const registerResponse = await auth.registerWithEmail(
            registeredUser,
            user.value.password
        );
        console.log(registerResponse);
        // await registerResponse.notify();
        console.log("registrado");

        const loginUser = await auth.loginWithEmail(
            registeredUser.email,
            user.value.password
        );
        console.log({ loginUser });
    } catch (error) {
        console.log({ error });
    } finally {
        loading.value = false;
    }

    // alert(JSON.stringify(results, null, 2));
}

// function createUser() {
//     auth.loginWithGoogle();
// }
</script>

<style>
label.required:after {
    content: "*";
    color: red;
    margin-left: 2px;
}
</style>