import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue"

const routes = [
    { path: "/", name: "Home", component: Home },
    { 
        path: "/destination/:id/:slug", 
        name: "destination.show", 
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({ id: parseInt(route.params.id)}) 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router