import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from "./views/Search";
import About from "./views/About";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
