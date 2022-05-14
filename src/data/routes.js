export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/home"),
    meta: { title: "Home" },
  },

  {
    path: "/about",
    label: "about",
    component: () => import("@/views/about"),
    meta: { title: "About" },
  },
  // {
  //   path: "/about/team",
  //   label: "team",
  //   component: () => import("@/views/about/team"),
  //   meta: { title: "Team" },
  // },

  // {
  //   path: "/services",
  //   label: "services",
  //   component: () => import("@/views/services"),
  //   meta: { title: "Services" },
  // },

  // {
  //   path: "/contact",
  //   label: "contact",
  //   component: () => import("@/views/contact"),
  //   meta: { title: "Contact" },
  // },
];
