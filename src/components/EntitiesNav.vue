<template>
    <div class="rounded border p-2">
        <div class="">
            <ul class="list-unstyled my-auto">
                <RouterLink v-for="entity in entityStore.entities" :to="{ name: `${entity.name}Index` }"
                    class="nav-entity nav-link rounded my-1 p-2" :key="entity.name"
                    :class="{ 'active-entity': entityStore.selectedEntity.name === entity.name }"
                    @click="changeSelectedNavEntity(entity)"> {{ entity.name }} Management
                </RouterLink>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEntityStore } from "../stores/Entity";
import { useEndpointStore } from "../stores/Endpoint";


const entityStore = useEntityStore();
const endpointStore = useEndpointStore();

const changeSelectedNavEntity = async (selectedEntity: { name: string, displayName: string }) => {

    entityStore.selectedEntity.name = selectedEntity.name;
    entityStore.selectedEntity.displayName = selectedEntity.displayName;

    await fetch(`${endpointStore.apiURL}${entityStore.selectedEntity.displayName}/getAll`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(result => {
        entityStore.currentDataList = result;
    });
}

</script>

<style scoped>
.active-entity,
.nav-entity:hover {
    background-color: cornflowerblue;
    color: aliceblue;
}

.nav-entity {
    cursor: pointer;
    transition: 0.15s;
}
</style>