<template>
    <v-card>
        <v-card-title>
            <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col
                            cols="12"
                            sm="6"
                            md="4"
                    >
                        <v-text-field
                                label="Legal first name*"
                                required
                                v-model="data.name"
                        ></v-text-field>
                    </v-col>
                    <v-col
                            cols="12"
                            sm="6"
                            md="4"
                    >
                        <v-text-field
                                label="Legal middle name"
                                hint="example of helper text only on focus"
                                v-model="data.calories"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="blue darken-1"
                    text
                    @click="cancel"
            >
                取消
            </v-btn>
            <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
            >
                保存
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    export default {
        name: "index",
        props:{
            dialogData:Object
        },
        data(){
            return {
                data:this.dialogData
            }
        },
        methods:{
            cancel(){
                this.$emit("cancel")
            },
            save(){
                this.$emit("save",this.data)
            }
        }
    }
</script>

<style scoped>

</style>
