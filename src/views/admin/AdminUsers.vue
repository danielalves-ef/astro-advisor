<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Admin Users</h1>
                <v-btn @click="getAllUsers">Get users</v-btn>
            </v-col>
            <v-col cols="12">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">Uid</th>
                            <th class="text-left">Email</th>
                            <th class="text-left">CustomClaims</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.uid">
                            <td>{{ user.uid }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.customClaims }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col cols="12">
                <v-select
                    v-model="selectedUser"
                    :items="users"
                    item-title="email"
                    item-value="uid"
                ></v-select>
                <v-btn :disabled="!selectedUser" @click="grantAdminRole"
                    >Grant Admin Role</v-btn
                >
            </v-col>
            {{ selectedUser }}
        </v-row>
    </v-container>
</template>

<script setup>
import { functions, httpsCallable } from "@/plugins/firebase";
import { ref } from "vue";

const users = ref([]);
const selectedUser = ref(null);

async function grantAdminRole() {
    console.log("grantAdminRole");
    const user = users.value.find((u) => selectedUser.value === u.uid);
    if (!user) return;
    console.log("user");
    user.role = "admin";
    user.admin = true;
    const updateUserCustomClaims = httpsCallable(
        functions,
        "updateUserCustomClaims"
    );
    const response = await updateUserCustomClaims(user);
    console.log({ response });
}

async function getAllUsers() {
    const getUsers = httpsCallable(functions, "getAllUsers");
    const response = await getUsers();
    console.log({ response });
    users.value = response.data.users;
}
</script>

<style lang="scss" scoped>
</style>