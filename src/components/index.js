import Header from './layout/header/index.vue'
import Avatars from './layout/header/avatars/index.vue'
import Aside from './layout/aside/index.vue'
import Main from './layout/main/index.vue'
import Layout from './layout/index.vue'
import Box from './box/index.vue'
import BreadCrumbs from './breadcrumbs/index.vue'
import Form from './form/index.vue'
import DatePicker from './form/datePicker/index.vue'
import DataTable from './dataTable/index.vue'
import DialogWrap from './dialogWrap/index.vue'
export default {
    install(Vue){
        const components={
            Header,
            Avatars,
            Aside,
            Main,
            Layout,
            Box,
            BreadCrumbs,
            Form,
            DatePicker,
            DataTable,
            DialogWrap
        }
        Object.keys(components).forEach((item)=>{
            Vue.component(`U${item}`,components[item])
        })
    }
}
