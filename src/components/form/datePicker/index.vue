<template>
    <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                    v-model="date"
                    :label="label"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
                v-model="date"
                no-title
                scrollable
        >
            <v-spacer></v-spacer>
            <v-btn
                    text
                    color="primary"
                    @click="menu = false"
            >
                Cancel
            </v-btn>
            <v-btn
                    text
                    color="primary"
                    @click="change"
            >
                OK
            </v-btn>
        </v-date-picker>
    </v-menu>
</template>

<script>
    export default {
        name: "index",
        props:{
          label:{
              type:String,
              default:"日期"
          },
          value:{
              type:String
          }
        },
        data(){
            return {
                date:this.value,
                menu: false,
            }
        },
        methods:{
            change(){
                this.$refs.menu.save(this.date)
                this.$emit("input",this.date);
            }
        },
    }
</script>

<style scoped>

</style>
