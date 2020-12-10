<template>
    <v-navigation-drawer app  v-model="drawer" >
        <v-layout align-center class="px-2">
            <v-flex sm-4>
                <img :src="icon" alt="" class="sf-logo-style">
            </v-flex>
            <v-flex sm-8>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            丰驰后台管理系统
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            v3.39
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-flex>
        </v-layout>
        <v-divider class="mx-2"></v-divider>
        <v-list dense nav>
            <v-list-group :value="active===level1.id" v-for="level1 in menus" :key="level1.id">
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>{{level1.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{level1.title}}</v-list-item-title>
                </template>
                <v-list-item v-for="level2 in level1.children" :key="level2.id" :to="level2.url">
                    <v-list-item-icon>
                        <v-icon small>{{level2.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title >{{level2.title}}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import icon from '@/assets/sf-logo.png'
    import {createNamespacedHelpers} from 'vuex'
    const {mapState:mapStateMenus} = createNamespacedHelpers('menus')
    export default {
        props:{
            drawer:{
                type:Boolean,
                default:true
            },
            active:Number
        },
        name: "index",
        data () {
            return {
                right: null,
                icon:icon
            }
        },
        computed:{
            ...mapStateMenus({
                menus:'items'
            }),
        }
    }
</script>

<style>
/**
    设置菜单栏偏移样式
 */
.v-list--nav .v-list-group__header{
    padding-left:8px !important;
}

.v-list--nav .v-list-group__items .v-list-item .v-list-item__icon{
    padding-left: 8px !important;
}

.sf-logo-style{
    width:42px;
    height:42px;
    opacity:0.8;
}
</style>
