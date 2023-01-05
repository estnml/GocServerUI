<template>
    <div>
        <table class="table table-borderless table-hover my-auto table-rounded">
            <thead>
                <tr>
                    <th v-for="header in props.headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="data-row" v-for="(data, index) in props.data">
                    <td>{{ index + 1 }}</td>
                    <td>{{ data }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { City } from '../../../interfaces/City';
import { useEntityStore } from '../../../stores/Entity';

const entityStore = useEntityStore();

const props = defineProps({
    data: Array<City>,
    headers: Array<string>
});

</script>

<style scoped>

</style>