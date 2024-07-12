// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./view/MyHome.vue"
import MyAbout from "./view/MyAbout.vue"

const routes = [
    { path: '/', component: MyHome },
    { path: '/about', component: MyAbout }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
