import {
    createRouter, createWebHashHistory 
} from 'vue-router'

const routes = [
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

const baseURL = import.meta.env.VITE_BASE_URL 
    ? (typeof import.meta.env.VITE_BASE_URL === 'boolean' ? undefined : import.meta.env.VITE_BASE_URL)
    : undefined

const Router = createRouter({
    history: createWebHashHistory(baseURL),
    linkExactActiveClass: 'active',
    routes
})

export default Router