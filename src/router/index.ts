import { createRouter, createWebHistory } from 'vue-router'
import { useEntityStore } from '../stores/Entity'




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
        [
            { path: '/welcome', name: 'Welcome', component: () => import("../views/Welcome.vue") },
            { path: '/migrationInTurkey', name: 'MigrationInTurkey', component: () => import('../views/MigrationInTurkey.vue') },

            {
                path: "/Dashboard", name: "Dashboard", component: () => import("../views/Admin/Dashboard/Index.vue"),
                children: [
                    
                    { path: "CityIndex", name: "CityIndex", component: () => import("../views/Admin/Dashboard/City/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "CityDetails/:id", name: "CityDetails", component: () => import("../views/Admin/Dashboard/City/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "CityUpsert/:id?", name: "CityUpsert", component: () => import("../views/Admin/Dashboard/City/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "DistrictIndex", name: "DistrictIndex", component: () => import("../views/Admin/Dashboard/District/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "DistrictDetails/:id", name: "DistrictDetails", component: () => import("../views/Admin/Dashboard/District/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "DistrictUpsert/:id?", name: "DistrictUpsert", component: () => import("../views/Admin/Dashboard/District/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "KioskIndex", name: "KioskIndex", component: () => import("../views/Admin/Dashboard/Kiosk/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "KioskDetails/:id", name: "KioskDetails", component: () => import("../views/Admin/Dashboard/Kiosk/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "KioskUpsert/:id?", name: "KioskUpsert", component: () => import("../views/Admin/Dashboard/Kiosk/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "LogIndex", name: "LogIndex", component: () => import("../views/Admin/Dashboard/Log/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "LogDetails/:id", name: "LogDetails", component: () => import("../views/Admin/Dashboard/Log/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "LogUpsert/:id?", name: "LogUpsert", component: () => import("../views/Admin/Dashboard/Log/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "ModuleIndex", name: "ModuleIndex", component: () => import("../views/Admin/Dashboard/Module/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "ModuleDetails/:id", name: "ModuleDetails", component: () => import("../views/Admin/Dashboard/Module/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "ModuleUpsert/:id?", name: "ModuleUpsert", component: () => import("../views/Admin/Dashboard/Module/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "NotificationIndex", name: "NotificationIndex", component: () => import("../views/Admin/Dashboard/Notification/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "NotificationDetails/:id", name: "NotificationDetails", component: () => import("../views/Admin/Dashboard/Notification/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "NotificationUpsert/:id?", name: "NotificationUpsert", component: () => import("../views/Admin/Dashboard/Notification/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "RoleIndex", name: "RoleIndex", component: () => import("../views/Admin/Dashboard/Role/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "RoleDetails/:id", name: "RoleDetails", component: () => import("../views/Admin/Dashboard/Role/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "RoleUpsert/:id?", name: "RoleUpsert", component: () => import("../views/Admin/Dashboard/Role/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "SurveyIndex", name: "SurveyIndex", component: () => import("../views/Admin/Dashboard/Survey/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "SurveyDetails/:id", name: "SurveyDetails", component: () => import("../views/Admin/Dashboard/Survey/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "SurveyUpsert/:id?", name: "SurveyUpsert", component: () => import("../views/Admin/Dashboard/Survey/Upsert.vue"), meta: { requiresAdmin: true } },


                    { path: "UserIndex", name: "UserIndex", component: () => import("../views/Admin/Dashboard/User/Index.vue"), meta: { requiresAdmin: true } },
                    { path: "UserDetails/:id", name: "UserDetails", component: () => import("../views/Admin/Dashboard/User/Details.vue"), meta: { requiresAdmin: true } },
                    { path: "UserUpsert/:id?", name: "UserUpsert", component: () => import("../views/Admin/Dashboard/User/Upsert.vue"), meta: { requiresAdmin: true } },

                ]
            },


        ]
})


// router.beforeEach((to,from)=>{


// });

export default router
