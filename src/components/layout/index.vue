<template>
    <div class="blue lighten-5 fill-height">
        <UAside :drawer="drawer" class="elevation-3" :active="active"></UAside>
        <UHeader @changeAsideStatus="changeAsideStatus" class="elevation-2"></UHeader>
        <UMain>
            <slot/>
        </UMain>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        props:{
            active:Number
        },
        data: () => ({
            drawer:true
        }),
        methods:{
            changeAsideStatus(){
                this.drawer=!this.drawer;
            }
        }
    };
</script>
