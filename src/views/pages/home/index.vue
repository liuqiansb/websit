<template>
    <UBox>
        <UBreadCrumbs></UBreadCrumbs>
        <v-divider></v-divider>
        <!-- v-model代表是否展开 -->
        <UForm :form="form" @submit="submit"></UForm>
        <UDataTable :headers="headers" :items="data"></UDataTable>
        <UDialogWrap  v-if="dialog">
            <DialogContent @save="save" @cancel="dialog=!dialog" :dialogData="dialogData"></DialogContent>
        </UDialogWrap>
    </UBox>
</template>

<script>

    import form from "./form";
    import data from './data'
    import headers from "./headers";
    import DialogContent from './dialog.vue'
    export default {
        name: "index",
        data(){
            return {
                form,
                headers:[],
                data,
                dialog:false,
                dialogData:{}
            }
        },
        components:{
            DialogContent
        },
        methods:{
            submit(params){
                console.log(params)
            },
            // 我无能啊，只能用v-if来强制刷新视图勒
            click(item){
                this.dialog = true
                this.dialogData = item
            },
            save(params){
                this.dialog = !this.dialog;
                console.log(params)
            },
        },
        created(){
            this.headers=headers(this)
        },
    }
</script>

<style scoped>

</style>
