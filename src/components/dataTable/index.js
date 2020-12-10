import {VDataTable,VBtn} from 'vuetify/lib'
export default {
    name: "index",
    props:{
        headers:{
            type:Array
        },
        items:{
            type:Array
        },
        options:{
            type:Object
        },
        loading:{
            type:Boolean,
            default:false
        },
        loadingText:{
            type:String,
            default:"数据加载中!"
        }
    },
    components:{
        'VDataTable':VDataTable,
        'VBtn':VBtn
    },
    render(h){
        let options =  this.options || {};
        options.props = options.props||{}
        options.props.disablePagination=true;
        options.props.hideDefaultFooter = true;
        let {headers,items,loading,loadingText} = this
        options.props.headers=headers
        options.props.items=items
        options.props.loading=loading
        options.props.loadingText = loadingText
        options.props.loaderHeight = 3
        let slots = {}
        this.headers.forEach(({value,display})=>{
            if(typeof display === 'function'){
                slots["item."+value]=({item,value})=>{
                    return display(h,item,value,loading)
                }
            }
        })
        options.scopedSlots=slots
        return  h("VDataTable",options,{})
    }
}
