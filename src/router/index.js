import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  //로그인 화면
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  //글목록 페이지
  {
    path : '/board',
    name : 'board',
    component : function(){
      return import("../views/BoardView.vue")
    },
    children : [
      {
        path : ':page',
        component : function(){
          return import("../components/PageComponent.vue");
        }
      }
    ]
  },
  //메인페이지
  {
    path: '/',
    name: 'board',
    component: function () {
      return import('../views/BoardView.vue')
    }
  },
  //유저 정보
  {
    path: '/user/:user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
