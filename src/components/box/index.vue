<template>
    <div class="rounded-lg white pa-10 tdop__box">
            <slot/>
    </div>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.tdop__box{
    min-height:600px;
    position: relative;
}
</style>
