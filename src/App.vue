<template>
  <v-app>
    <ULayout  :active="active">
      <KeepAlive :max="10">
        <RouterView/>
      </KeepAlive>
    </ULayout>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      active:null
    }
  },
  watch:{
    $route(v){
        // 展开当前路由一级菜单
        this.active=v.meta.parentId;
    }
  }
};
</script>
