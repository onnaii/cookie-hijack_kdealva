import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: LoginPage},
        {path: '/home', component: HomePage},
    ]
})

export default router
