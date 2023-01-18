import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode: address/#/path 에서 #를 제거하고 싶을때 history를 사용
  mode: "history",
  routes: [
    {
      path: "/",
      // redirect: 해당 path로 접근했을 때 이동할 url 주소
      redirect: "/news",
    },
    {
      // path: url 주소
      path: "/news",
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: "/ask",
      component: AskView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/item",
      component: ItemView,
    },
    {
      path: "/user",
      component: UserView,
    },
  ],
});
