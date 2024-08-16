// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "./view/MyHome.vue"
import MyAbout from "./view/MyAbout.vue"
import CharacterDetail from './view/CharacterDetail.vue'

const routes = [
    { path: '/', component: MyHome },
    { path: '/about', component: MyAbout },
    { path: '/characterdetail/:id', name: 'characterdetail', component: CharacterDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
