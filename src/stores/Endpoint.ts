import { defineStore } from "pinia";

export const useEndpointStore = defineStore("endpointStore", {
    state: () => {
        return {
            apiURL: "https://localhost:7043/api/",
        }
    },
    actions: {

    },
    getters: {


    }
});