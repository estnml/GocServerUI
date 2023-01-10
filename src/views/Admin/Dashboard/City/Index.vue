<template>
    <div class="row mx-auto">
        <div class="row">
            <div class="col-md-10 px-0 mb-2">
                <input type="text" class="form-control" placeholder="Search Cities" v-model="searchString" />
            </div>
            <div class="col-md-2">
                <button class="btn btn-outline-success">Add New</button>
            </div>
        </div>
        <div class="rounded border py-2">
            <table class="table table-borderless table-hover my-auto table-rounded">
                <thead>
                    <tr>
                        <th v-for="header in entityStore.entities.city.headers" :key="header">{{ header }}</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="data-row" v-for="(data, index) in dataList">
                        <td>{{ index + 1 }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.isActive === true ? "Yes" : "No" }}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic outlined example">
                                <RouterLink
                                    :to="{ name: `${entityStore.selectedEntity.name}Upsert`, params: { id: data.id } }"
                                    class="btn btn-outline-primary">Edit</RouterLink>
                                <RouterLink
                                    :to="{ name: `${entityStore.selectedEntity.name}Details`, params: { id: data.id } }"
                                    class="btn btn-outline-secondary">Details</RouterLink>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { City } from '../../../../interfaces/City';
import { useEntityStore } from '../../../../stores/Entity';


const entityStore = useEntityStore();
const searchString = ref("");

const props = defineProps({
    actualDataList: {
        type: Array<City>,
        required: true
    }
});


const dataList = computed((): Array<City> => {
    return props.actualDataList?.filter(x => x.name.includes(searchString.value));
});



</script>

<style scoped>

</style>