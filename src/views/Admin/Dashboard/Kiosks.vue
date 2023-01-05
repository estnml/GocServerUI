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
import { Kiosk } from '../../../interfaces/Kiosk';





const props = defineProps({
    data: Array<Kiosk>,
    headers: Array<string>
});

</script>

<style scoped>

</style>