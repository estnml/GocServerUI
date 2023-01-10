<template>
    <div class="row mx-auto">
        <div class="col-12 px-0 mb-2">
            <input type="text" class="form-control" />
        </div>
        <div class="rounded border py-2">
            <table class="table table-borderless table-hover my-auto table-rounded">
                <thead>
                    <tr>
                        <th v-for="header in entityStore.entities.city.headers" :key="header">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data-row" v-for="(data, index) in props.dataList">
                        <td>{{ index + 1 }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.isActive === true ? "Yes" : "No" }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { City } from '../../../../interfaces/City';
import { useEntityStore } from '../../../../stores/Entity';

const entityStore = useEntityStore();

const props = defineProps({
    dataList: Array<City>,
});

</script>

<style scoped>

</style>