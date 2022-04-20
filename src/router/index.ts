import {
    createRouter, createWebHashHistory 
} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Dev.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Dev.vue')
    }
]

const baseURL = import.meta.env.VITE_BASE_URL 
    ? (typeof import.meta.env.VITE_BASE_URL === 'string' ? undefined : import.meta.env.VITE_BASE_URL)
    : undefined

const Router = createRouter({
    history: createWebHashHistory(baseURL),
    linkExactActiveClass: 'active',
    routes
})

export default Router