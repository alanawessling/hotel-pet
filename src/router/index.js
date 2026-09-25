import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pets',
      component: () => import("../views/PetView.vue"),
    },
    {
      path: '/pet/novo',
      name: 'addPet',
      component: () => import("../views/AddPetView.vue/")
    }
  ],
});

export default router;
