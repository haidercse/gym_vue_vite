import { createRouter, createWebHistory } from 'vue-router'
import store from '../stores'
import HomeView from '../views/website/HomeView.vue'

const routes = [{
        path: '/',
        component: () =>
            import ('../views/website/Index.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: HomeView,
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('../views/website/AboutView.vue')
            }
        ]
    },

    {
        path: '/staff',
        component: () =>
            import ('../views/staff/Index.vue'),
        children: [{
                path: '/staff/dashboard',
                name: 'staff-dashboard',
                component: () =>
                    import ('../views/staff/Dashboard.vue'),
                meta: {
                    requiresAuth: true,

                }
            },
            {
                path: '/staff/members',
                name: 'member',
                component: () =>
                    import ('../views/staff/member/ManageMember.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/staff/members/create',
                name: 'member-create',
                component: () =>
                    import ('../views/staff/member/CreateMember.vue'),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/staff/members/:id/edit',
                name: 'member-edit',
                component: () =>
                    import ('../views/staff/member/EditMember.vue'),
                meta: {
                    requiresAuth: true
                }
            },


        ]
    },
    //staff-login
    {
        path: '/staff/login',
        name: 'staff-login',
        component: () =>
            import ('../views/staff/LoginStaff.vue'),
        meta: {
            visited: true
        }
    }

]
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
    linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({ name: 'staff-login' })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visited)) {
        if (store.getters.loggedIn) {
            next({ name: 'staff-dashboard' })

        } else {
            next()
        }
    } else {
        next()
    }

});

export default router;