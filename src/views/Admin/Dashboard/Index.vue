<template>
    <div class="row mx-auto">
        <div class="col-md-2">
            <EntitiesNav></EntitiesNav>
        </div>
        <div class="col-md-10">
            <!-- <DataTable :list="dataList"></DataTable> -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>


import EntitiesNav from '../../../components/EntitiesNav.vue';




</script>

<style scoped>

</style>