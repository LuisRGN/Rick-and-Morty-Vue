// src/router.js
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', },
    { path: '/about', }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
