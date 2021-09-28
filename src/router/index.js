import { createRouter, createWebHistory } from "vue-router";

import Characters from "@/views/Characters.vue";
import Character from "@/views/Character.vue";
import Favourites from "@/views/Favourites.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/characters",
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/character/:id",
    name: "Character",
    component: Character,
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: Favourites,
  },
  {
    path: "/not-found/:resource",
    name: "NotFound",
    component: NotFound,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/not-found/page",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
