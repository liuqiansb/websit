<template>
        <UBox>
            <div class="tdop__box__child">
                <div class="fill-height d-flex align-center">
                    <v-layout column justify-center align-center class="flex-grow-1">
                        <span class="display-1">又找不到网页!</span>
                        <span class="display-4">404</span>
                        <span class="orange--text text--darken-4">莫有办法找到这个页面</span>
                        <span>您可以回到网站首页</span>
                        <span>或者联系系统管理员处理</span>
                    </v-layout>
                    <div class="flex-grow-1">
                        <img :src="noFound" alt="" height="200px">
                    </div>
                </div>
            </div>
        </UBox>
</template>

<script>
    import noFound from '@/assets/404.jpg'
    export default {
        name: "index",
        data(){
                return {
                        noFound:noFound
                }
        },
        created() {
                console.log(this.$vuetify.breakpoint)
        }
    }
</script>

<style scoped>
    /**
        确保在在计算后插入slot的组件可以使用100%height
     */
    .tdop__box__child{
        height:calc(100% - 80px);
        position: absolute;
        width: calc(100% - 80px);
    }
</style>
