import Vue from 'vue'
import Router from 'vue-router'
import Ujian from '@/components/Ujian'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Ujian",
      component: Ujian
    }
  ]
});
