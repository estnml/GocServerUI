<template>
    <div class="row mx-auto">
        <div class="col-lg-2 col-md-4 col-12">
            <EntitiesNav></EntitiesNav>
        </div>
        <div class="col-lg-10 col-md-8 col-12">
            <!-- <DataTable :list="dataList"></DataTable> -->
            <RouterView :actualDataList="entityStore.currentDataList"></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup>


import EntitiesNav from '../../../components/EntitiesNav.vue';
import { useEntityStore } from '../../../stores/Entity';

const entityStore = useEntityStore();


</script>

<style scoped>

</style>