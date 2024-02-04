import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "index",
        path: "/",
        component: () => import("@pages/IndexPage.vue")
    }
]

export const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: "active"
})