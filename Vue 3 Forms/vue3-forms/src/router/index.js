import { createRouter, createWebHistory } from 'vue-router'
import SimpleForm from '../views/SimpleForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: SimpleForm
    },
  ]
})

export default router
