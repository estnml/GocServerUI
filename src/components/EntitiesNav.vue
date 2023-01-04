<template>
  <div class="rounded border p-2">
    <div class="">
      <ul class="list-unstyled my-auto">
        <li class="nav-entity nav-link rounded my-1 p-2" v-for="entity in entityStore.entityList"
            :key="entity.entityName"
            :class="{ 'active-entity': entityStore.selectedNavEntity.entityName === entity.entityName }"
            @click="changeSelectedNavEntity(entity)"> {{ entity.entityName }} Management
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useEntityStore} from "../stores/Entity";

const entityStore = useEntityStore();


const changeSelectedNavEntity = (selectedEntity: { entityName: string, searchBarName: string }) => {
  entityStore.selectedNavEntity.entityName = selectedEntity.entityName;
  entityStore.selectedNavEntity.displayName = selectedEntity.searchBarName;
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