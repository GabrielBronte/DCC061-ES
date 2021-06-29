import { RouteConfig } from "vue-router";

const prefix = "/account";
const Login = () => import("@/views/account/login/Login.vue");
const Cadastro = () => import("@/views/account/cadastro/Cadastro.vue");

const routes: RouteConfig[] = [
  {
    path: prefix,
    redirect: `${prefix}/login`
  },
  {
    path: `${prefix}/login`,
    component: Login
  },
  {
    path: `${prefix}/cadastro`,
    component: Cadastro
  }
];

export default routes;
