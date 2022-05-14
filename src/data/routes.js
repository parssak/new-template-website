export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About" },
  },
];
