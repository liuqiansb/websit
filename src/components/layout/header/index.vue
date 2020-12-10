<template>
    <v-app-bar app class="white black--text" flat>
        <v-app-bar-nav-icon @click="changeAsideStatus"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <UAvatars></UAvatars>
    </v-app-bar>
</template>

<script>
    export default {
        name: "index.vue",
        methods:{
            changeAsideStatus(){
                this.$emit("changeAsideStatus");
            }
        }
    }
</script>

<style scoped>

</style>
