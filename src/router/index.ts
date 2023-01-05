import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
        [
            { path: '/welcome', name: 'Welcome', component: () => import("../views/Welcome.vue") },
            { path: '/migrationInTurkey', name: 'MigrationInTurkey', component: () => import('../views/MigrationInTurkey.vue') },

            // E-Devlet ile ilgili sayfalar

            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },

            // E-İkamet ile ilgili sayfalar

            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },

            // E-Randevu ile ilgili sayfalar

            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },
            // { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true } },




            {
                // Admin Dashboard
                path: '/dashboard', name: 'Dashboard', component: () => import("../views/Admin/Dashboard/Index.vue"), meta: { requiresAdmin: true },
                children: [

                    { path: 'kiosks', name: 'KioskList', component: () => import("../views/Admin/Dashboard/Kiosks.vue"), meta: { requiresAdmin: true } },
                    { path: 'cities', name: 'CityList', component: () => import("../views/Admin/Dashboard/Cities.vue"), meta: { requiresAdmin: true } },
                    { path: 'districts', name: 'DistrictList', component: () => import("../views/Admin/Dashboard/Districts.vue"), meta: { requiresAdmin: true } },
                    { path: 'users', name: 'UserList', component: () => import("../views/Admin/Dashboard/Users.vue"), meta: { requiresAdmin: true } },
                    { path: 'modules', name: 'ModuleList', component: () => import("../views/Admin/Dashboard/Modules.vue"), meta: { requiresAdmin: true } },
                    { path: 'notifications', name: 'NotificationList', component: () => import("../views/Admin/Dashboard/Notifications.vue"), meta: { requiresAdmin: true } },
                    { path: 'logs', name: 'LogList', component: () => import("../views/Admin/Dashboard/Logs.vue"), meta: { requiresAdmin: true } },
                    { path: 'logs', name: 'SurveyList', component: () => import("../views/Admin/Dashboard/Surveys.vue"), meta: { requiresAdmin: true } },

                ]

            },





        ]
})

export default router
