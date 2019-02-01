import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'
import Ujian from '@/components/Ujian'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/TestComponent",
      name: "TestComponent",
      component: TestComponent
    },
    {
      path: "/Ujian",
      name: "Ujian",
      component: Ujian
    }
  ]
});
