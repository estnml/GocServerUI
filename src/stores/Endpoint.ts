import { defineStore } from "pinia";

export const useEndpointStore = defineStore("endpointStore", {
    state: () => {
        return {
            baseURL: "https://localhost:7043/",
        }
    },
    actions: {

    },
    getters: {


    }
});