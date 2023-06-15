import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ('../views/LoginForm.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/SignupForm.vue')
        },
        {
            path: '/home',
            name: 'homeform',
            component: () =>
                import ('../views/HomeForm.vue')
        },
         {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('../views/LoginForm.vue')
        },
         {
            path: '/product',
            name: 'product',
            component: () =>
                import ('../views/Category/HomePage.vue')
        },
    ]
})

export default router