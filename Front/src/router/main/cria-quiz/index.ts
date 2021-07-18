import { RouteConfig } from "vue-router";

const prefix = "/criaQuiz";
const CriaQuiz = () => import("@/views/cria-quiz/CriaQuiz.vue");

const routes: RouteConfig[] = [
  {
    path: `${prefix}/`,
    component: CriaQuiz
  }
];

export default routes;
