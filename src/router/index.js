import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由, 如果是 index.js， 可以省略 绝对路径
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(VueRouter)

  const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  { // 默认路由，重定向到 movie
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
