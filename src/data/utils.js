export const getRoutes = (routes) => {
  return routes.map((route) => ({
    path: route.path,
    component: route.component,
  }));
};

export const getNavigation = (routes) => {
  const navItems = [];
  for (const route of routes) {
    if (route.hidden) continue;
    const baseRoute = route.path.split("/")[1];
    const indexBaseRoute = navItems.findIndex((item) => item.path === `/${baseRoute}`);

    if (indexBaseRoute === -1) {
      navItems.push({
        path: `/${baseRoute}`,
        label: route.label,
        dropdownItems: [],
      });
    } else if (!route.path.includes(":")) {
      navItems[indexBaseRoute].dropdownItems.push({
        path: route.path,
        label: route.label,
      });
    }
  }

  return navItems;
};
