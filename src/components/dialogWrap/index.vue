<script>
    import {VDialog} from 'vuetify/lib'
    export default {
        name: "index",
        props:{
            value:{
                type:Boolean,
                default:true
            },
            maxWidth:{
                type:Number,
                default:650
            },
            options:{
                type:Object,
            }
        },
        methods:{
            cancel(){
                console.log("外部点击")
            }
        },
        data(){
            return {
                dialog:true
            }
        },
        components:{
            'VDialog':VDialog,
        },
        render(h){
            let {options,maxWidth,value} = this;
            options = options || {}
            options.props = options.props || {}
            options.props.value = value
            options.props.maxWidth = maxWidth
            options.props.persistent = true
            return h("VDialog",options,[this.$slots.default])
        }
    }

</script>

<style scoped>

</style>
