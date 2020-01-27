import Home from "@/pages/home.vue";
import Favorites from "@/pages/favorites.vue";
import Detail from "@/pages/detail.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/favorites",
    component: Favorites,
    name: "favorites"
  },
  {
    path: "/detail",
    component: Detail,
    name: "detail/:id"
  }
];

export default routes;
