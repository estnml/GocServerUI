<template>
  <div class="row mx-auto">
    {{ `https://localhost:7043/api/${entityStore.selectedNavEntity.displayName}/getAll` }}
    <div class="col-12 px-0 mb-2">
      <input type="text" v-model="searchString" class="form-control"
             :placeholder="`Search ${entityStore.selectedNavEntity.displayName}`">
    </div>
    <div class="col-12 rounded border p-2">
      <table class="table table-borderless table-hover my-auto table-rounded">
        <thead>
        <tr>
          <th v-for="i in props.headers" scope="col">#</th>
        </tr>
        </thead>
        <tbody>
        <tr class="data-row" v-for="data in props.list">
          <td>1</td>
          <td>{{ data }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useEntityStore} from '../stores/Entity';
import {onMounted, ref} from 'vue';

const searchString = ref(null);
const entityStore = useEntityStore();




const props = defineProps({
  headers: Array,
  list: Array
});


</script>

<style scoped>
.data-row:first-child {
  border-bottom-left-radius: 5px !important;
  border-top-left-radius: 5px !important;
}

.data-row:last-child {
  border-bottom-right-radius: 5px !important;
  border-top-right-radius: 5px !important;
}

</style>