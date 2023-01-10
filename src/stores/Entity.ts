import { defineStore } from "pinia";

import { Kiosk } from "../interfaces/Kiosk";
import { City } from "../interfaces/City";
import { Module } from "../interfaces/Module";
import { Log } from "../interfaces/Log";
import { District } from "../interfaces/District";
import { Notification } from "../interfaces/Notification";

export const useEntityStore = defineStore("entityStore", {
    state: () => ({

        // kioskList: [] as Kiosk[],
        // cityList: [] as City[],
        // moduleList: [] as Module[],
        // logList: [] as Log[],
        // districtList: [] as District[],
        // notificationList: [] as Notification[],

        selectedEntity: { name: "Kiosk", displayName: "Devices" },
        currentDataList: [] as Object[],
        entities: {

            kiosk: { name: "Kiosk", displayName: "Devices", headers: ["Id", "Name", "City"] },
            city: { name: "City", displayName: "Cities", headers: ["Id", "Name", "Active"] },
            module: { name: "Module", displayName: "Modules", headers: ["Id", "Name"] },
            district: { name: "District", displayName: "Districts", headers: ["Id"] },
            notification: { name: "Notification", displayName: "Notifications", headers: ["Id"] },
            log: { name: "Log", displayName: "Logs", headers: ["Id"] }

        }

    }),
    getters: {

    },
    actions: {

    }
});