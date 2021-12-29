import {
    createRouter, createWebHashHistory 
} from 'vue-router'

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Dev.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/Dev.vue')
        }
    ]
})

export default Router