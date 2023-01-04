import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            currentUser: {
                username: null,
                isAuthenticated: false,
                isAdmin: false
            }
        }
    },
    actions: {

    },
    getters: {

    }
});