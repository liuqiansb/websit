<template>
    <div>
        <div>
            <span class="headline">角色设计列表</span>
        </div>
        <div class="my-4">
            <span class="tdop__breadcrumbs__first">用户管理</span>
            <span class="tdop__breadcrumbs__divider">/</span>
            <span class="tdop__breadcrumbs__second">角色管理</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .tdop__breadcrumbs__first{
        font-size: 14px;
        color:#00ACC1;
    }
    .tdop__breadcrumbs__second{
        font-size: 14px;
        color:#90A4AE;
    }
    .tdop__breadcrumbs__divider{
        font-size: 14px;
        opacity: 0.38;
        padding:0 12px;
    }
</style>
