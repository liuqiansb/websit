import {
    VForm,
    VTextField,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VSelect,
    VTextarea,
    VRadioGroup,
    VRadio
} from "vuetify/lib";
export default {
    props:{
        // 暂时不考虑使用插槽的情况
        form:{
            type:[Function],
            require:true,
            loading:false
        },
        // 暂时不需要考虑无需验证的情况
        valid:{
            type:Boolean,
            default:true
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            result:{}
        }
    },
    components:{
        VForm,
        VTextField,
        VContainer,VRow,VCol,VBtn,VSelect,VTextarea,VRadioGroup,
        VRadio
    },
    render(h){
        let children
        const {form} = this
        if(typeof  form === 'function') {
            children = form().map(({arg, component, options}) => {
                    options = options || {}
                    options.props = options.props || {}
                    options.props.value = this.result[arg]
                    options.on = options.on || {}
                    options.on.input = (event) => {
                        this.result[arg] = typeof event === 'string' ? event.trim():event;
                    }


                    // 添加其他默认属性

                    // 对于其他需要子元素的组件
                    let cd

                return <VCol cols="12" md={component==="VTextarea"?"12":"4"}>{h(component,options,cd)}</VCol>

                }
            )
        }
        return (
            <VForm ref="form">
                <VContainer>
                    <VRow>
                        <VCol cols="12" md="12">
                            <VRow>{children}</VRow>
                        </VCol>
                        <VCol cols="12">
                            <VBtn color="primary" class="mr-3" onClick={this.submit} loading={this.loading}>查询</VBtn>
                            <VBtn color="info" onClick={this.reset}>重置</VBtn>
                        </VCol>
                    </VRow>
                </VContainer>
            </VForm>
         )
    },
    methods:{
        load(){
            const params = {...this.result}
            this.$emit('submit',params)
        },
        submit(){
            if(this.loading) return
            if(this.$refs.form.validate()) {
                this.load();
            }
        },
        reset(){
            this.$refs.form.reset();
            this.submit();
        }
    },
    created(){
        let result = {}
        if(typeof this.form==="function"){
            this.form().forEach(({arg,defaultValue})=>{
                result[arg]=defaultValue
            })
        }
        this.result = result
    }
}
