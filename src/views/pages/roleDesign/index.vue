<template>
        <UBox>
            <UBreadCrumbs></UBreadCrumbs>
            <v-divider></v-divider>
            <span class="primary">f</span>
            <v-form v-model="valid" class="my-2">
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-btn
                    depressed
                    color="primary"
                    class="mx-3"
            >
                搜索
            </v-btn>
            <v-btn
                    depressed
                    color="error"
            >重置</v-btn>

            <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
            ></v-data-table>
        </UBox>
</template>

<script>
    export default {
        name: "RoleDesign",
        data () {
            return {
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' },
                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                    },
                ],
                valid: false,
                firstname: '',
                lastname: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
    }
</script>

<style scoped>

</style>
