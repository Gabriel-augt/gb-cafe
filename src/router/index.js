import { createRouter, createWebHistory } from "vue-router";
import Cart from '../components/cart/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      //component:
    },
    {
      path: "/carrinho",
      name: "Carrinho",
      component: Cart,
    },
  ],
});

export default router;
