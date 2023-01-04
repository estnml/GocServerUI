<template>
  <div class="row mx-auto">
    <div class="col-md-2">
      <EntitiesNav></EntitiesNav>
    </div>
    <div class="col-md-10">
      <DataTable :list="dataList.data" :headers="dataList.headers"></DataTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from '@vue/reactivity';

import DataTable from '../../../components/DataTable.vue';
import EntitiesNav from '../../../components/EntitiesNav.vue';
import {useEntityStore} from '../../../stores/Entity';
import {onMounted, ref} from "vue";


const entityStore = useEntityStore();
const dataList = ref();

onMounted(async () => {
  dataList.value = await entityStore.getDataList;
})

// const dataList = computed(() => {
//     switch (entityStore.$state.selectedNavEntity.entityName) {
//
//         case "Kiosk":
//             return entityStore.kioskList;
//
//         case "User":
//             return entityStore.userList;
//
//         case "City":
//             return entityStore.cityList;
//
//         case "District":
//             return entityStore.districtList;
//
//         case "Module":
//             return entityStore.moduleList;
//
//         case "Notification":
//             return entityStore.notificationList;
//
//         case "Log":
//             return entityStore.logList;
//
//         case "Survey":
//             return entityStore.surveyList;
//
//     }
// });


</script>

<style scoped>

</style>