import  VueRouter from 'vue-router'
// 路由懒加载
const Login =()=> import('../components/Login.vue')
const YC =()=> import('../components/leagues/YC/YC.vue')
const XJ=()=> import('../components/leagues/XJ/XJ.vue')
const HM=()=> import('../components/leagues/XJ/clubs/hm/hm.vue')
const User=()=> import('../components/User.vue')
const Home=()=> import('../components/Home.vue')
const Register=()=> import('../components/Register.vue')
var router=new VueRouter({
  routes:[
     {path:'/',component:Login},
     {path:'/home',component:Home},
      {path:'/league/yc',component:YC},
      {path:'/league/xj',component:XJ},
      {path:'/league/xj/90',component:HM},
      {path:'/user',component:User},
      {path:'/register',component:Register}
  ]
})
export default router
