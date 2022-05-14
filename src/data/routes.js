export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
  },

  {
    path: "/about",
    label: "about",
    component: () => import("@/views/about"),
  },

  {
    path: "/about/team",
    label: "team",
    component: () => import("@/views/about/team"),
  },

  {
    path: "/services",
    label: "services",
    component: () => import("@/views/services"),
  },

  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
  },
];
