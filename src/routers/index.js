// vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../repository/store.js'

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/mysystem/',
  mode: 'history',
  routes: routes,
});

//グローバルガード
router.beforeEach((to, from, next) => {
  if(to.path === '/'){
    router.push({
      name: "top",
    })
  }else{
    next();
  }
});

export default router

