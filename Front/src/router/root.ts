import MainRoutes from "./main";
import AccountRoutes from "./account";
import ErrorRoutes from "./error";

import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  { path: "", redirect: "/account" },
  ...AccountRoutes,
  ...MainRoutes,
  ...ErrorRoutes,
  { path: "*", redirect: "/error/404" }
];

export default routes;
