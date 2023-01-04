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



            // Admin Dashboard
            { path: '/dashboard', name: 'Dashboard', component: () => import("../views/Admin/Dashboard/Index.vue"), meta: { requiresAdmin: true } },


            // { path: '/dashboard/kiosks', name: 'KioskList', component: () => import("../views/Admin/Dashboard/Kiosks.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/cities', name: 'CityList', component: () => import("../views/Admin/Dashboard/Cities.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/districts', name: 'DistrictList', component: () => import("../views/Admin/Dashboard/Districts.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/users', name: 'UserList', component: () => import("../views/Admin/Dashboard/Users.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/modules', name: 'ModuleList', component: () => import("../views/Admin/Dashboard/Modules.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/notifications', name: 'NotificationList', component: () => import("../views/Admin/Dashboard/Notifications.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/logs', name: 'LogList', component: () => import("../views/Admin/Dashboard/Logs.vue"), meta: { requiresAdmin: true } },
            // { path: '/dashboard/logs', name: 'SurveyList', component: () => import("../views/Admin/Dashboard/Surveys.vue"), meta: { requiresAdmin: true } },



        ]
})

export default router
