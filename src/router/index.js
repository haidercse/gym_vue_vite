import { createRouter, createWebHistory } from 'vue-router'



const routes = [{
        path: '/',
        component: () =>
            import ('../views/website/Index.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('../views/website/HomeView.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('../views/website/AboutView.vue')
            },
        ]
    },

    {
        path: '/',
        component: () =>
            import ('../views/staff/Index.vue'),
        children: [{
                path: '/staff/dashboard',
                name: 'staff-dashboard',
                component: () =>
                    import ('../views/staff/Dashboard.vue'),
            },

        ]
    },
    {
        path: '/staff/login',
        name: 'staff-login',
        component: () =>
            import ('../views/staff/Login.vue'),
    }

];


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
})

export default router;