export default {
    namespaced:true,
    state:{
        items:[]
    },
    mutations:{
        update(state,data){
            state.items=data;
        }
    }
}
