<template>
    <v-menu
            bottom
            min-width="200px"
            rounded
            offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
                    icon
                    x-large
                    v-on="on"
                    color="#ccc"
            >
                <v-avatar
                        class="yellow"
                        size="36"
                >
                    <img
                                :src="icon"
                                alt="John"
                    >
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <v-avatar
                            color="yellow"
                    >
                        <img
                                :src="icon"
                                alt="John"
                        >
                    </v-avatar>
                    <v-divider class="my-3"></v-divider>
                    <h3>{{ user.operatorName }}</h3>
                    <p class="caption mt-1">
                        {{ user.operatorNo }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                            depressed
                            rounded
                            text
                    >
                        {{user.transitDept}}
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                            depressed
                            rounded
                            text
                    >
                        退出登录
                    </v-btn>
                </div>
            </v-list-item-content>
        </v-card>
    </v-menu>
</template>

<script>
    import icon from '@/assets/timg.png'
    export default {
        name: "index.vue",
        data(){
            return {
                user: {
                    initials: 'JD',
                    operatorName: '刘乾',
                    operatorNo: '01385150',
                    transitDept:"755R",
                },
                icon:icon
            }
        }
    }
</script>

<style scoped>

</style>
