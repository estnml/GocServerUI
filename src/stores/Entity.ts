import {defineStore} from "pinia";

export const useEntityStore = defineStore("entityStore", {
    state: () => {
        return {
            entityList: [
                {
                    entityName: "Kiosk",
                    searchBarName: "Kiosks"
                },
                {
                    entityName: "City",
                    searchBarName: "Cities"
                },
                {
                    entityName: "Module",
                    searchBarName: "Modules"
                },
                {
                    entityName: "District",
                    searchBarName: "Districts"
                },
                {
                    entityName: "Log",
                    searchBarName: "Logs"
                },
                {
                    entityName: "Notification",
                    searchBarName: "Notifications"
                },
                {
                    entityName: "User",
                    searchBarName: "Users"
                },
                {
                    entityName: "Survey",
                    searchBarName: "Surveys"
                }
            ],
            kioskList: {
                data: [],
                entityName: "Kiosk",
                headers: ["Id"]
            },
            userList: {
                data: [],
                entityName: "User",
                headers: ["Id"]
            },
            notificationList: {
                data: [],
                entityName: "Notification",
                headers: ["Id"]
            },
            cityList: {
                data: [],
                entityName: "City",
                headers: ["Id"]
            },
            districtList: {
                data: [],
                entityName: "District",
                headers: ["Id"]
            },
            logList: {
                data: [],
                entityName: "Log",
                headers: ["Id"]
            },
            moduleList: {
                data: [],
                entityName: "Module",
                headers: ["Id"]
            },
            surveyList: {
                data: [],
                entityName: "Survey",
                headers: ["Id"]
            },


            selectedNavEntity: {
                entityName: "Kiosk",
                displayName: "Kiosks"
            }
        }
    },
    actions: {
        async fetchDataList(this, entityName: string) {
            const apiURL = `https://localhost:7043/api/${this.selectedNavEntity.displayName}/getAll`;

            let fetchData = await fetch(apiURL)
                .then(response => response.json())
                .then(result => {

                    switch (this.selectedNavEntity.entityName) {

                        case "Kiosk":
                            this.kioskList.data = result;

                        case "User":
                            this.userList.data = result;

                        case "City":
                            this.cityList.data = result;

                        case "District":
                            this.districtList.data = result;

                        case "Module":
                            this.moduleList.data = result;

                        case "Notification":
                            this.notificationList.data = result;

                        case "Log":
                            this.logList.data = result;

                        case "Survey":
                            this.surveyList.data = result;

                    }

                })
                .catch(error => console.log('error', error));


        }
    },
    getters: {
        getDataList: (state) => {
            switch (state.selectedNavEntity.entityName) {

                case "Kiosk":
                    return state.kioskList;

                case "User":
                    return state.userList;

                case "City":
                    return state.cityList;

                case "District":
                    return state.districtList;

                case "Module":
                    return state.moduleList;

                case "Notification":
                    return state.notificationList;

                case "Log":
                    return state.logList;

                case "Survey":
                    return state.surveyList;

            }
        }
    }
});