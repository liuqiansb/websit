import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import install from "./plugins/install";
import router,{addRouters,getPaths} from "./router";
import store from './store'
import menus from './menus'
Vue.config.productionTip = false
// 工具插件引入，如组件自动加载，http挂载，原型组件挂载
Vue.use(install)
new Vue({
  router,
  store,
  vuetify,
  created(){
    addRouters(getPaths(menus))
    this.$store.commit('menus/update',menus);
  },
  render: h => h(App)
}).$mount('#app')
