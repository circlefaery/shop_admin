import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
// 给router对象注册导航守卫
// to: 要去哪儿
// from: 从哪儿来
// next: 是否放行   next(): 方向  next('/login')  next('/home')
router.beforeEach((to, from, next) => {
  // console.log('哈哈哈')
  next()
  if (to.path === '/login') {
    next()
    return
  }
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
