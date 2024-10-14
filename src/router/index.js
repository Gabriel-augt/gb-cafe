import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/Home.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Página Inicial",
      component: HomePage
    },
    {
      path: "/carrinho",
      name: "Carrinho",
      component: Cart,
    },
  ],
});

export default router;
