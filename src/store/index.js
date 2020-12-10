import Vue from 'vue'
import Vuex from 'vuex'
import menus from './menus'
Vue.use(Vuex)
const store = new Vuex.Store({
    strict:process.env.NODE_ENV!=='production'
})
store.registerModule('menus',menus)
export default store;
