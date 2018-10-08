// The Vue build version to load with the `import` command

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Vuex from 'vuex'
Vue.use(Vuex)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper,/* { default global options } */)
import axios from 'axios'
Vue.prototype.$ajax = axios
axios.defaults.baseURL = 'http://127.0.0.1:5000/api/'

import Top from './components/Top.vue'
Vue.component('top',Top)


var store = new Vuex.Store({
  state:{
//     leagueinfo:[],
//     clubinfo:[]
    user:null
  },
//   mutations:{
//     getlea(state,res){
//       state.leagueinfo=res.data
//     },
//     getclub(state,res){
//       state.clubinfo=res.data
//     }
//   },
//   getters:{//
//     getleagueAll:(state)=>{
//       return state.leagueinfo
//     },//
//     getclubAll:(state)=>{
//       return state.clubinfo
//     }
//   },
//   actions:{
//     // 获取所有联赛信息
//     getleagueInfo(store) {
//       axios.get('leagues')
//         .then(res=>{
//           store.commit("getlea",res)
//         })
//         .catch(err=>{
//           console.log(err)
//         })
//     },
//     getclubInfo(store){
//       axios.get('clubs')
//         .then(res=>{
//           // console.log(res.data)
//           store.commit("getclub",res)
//         })
//         .catch(err=>{
//           console.log(err)
//         })
//     }
//   },
//   // computed:{
//   //   aa:function () {
//   //     return this.$store.state.leagueinfo
//   //   },
//   //   bb:function () {
//   //     return this.$store.state.clubinfo
//   //   },
//   // },
//   watch:{
//     leagueinfo:function (newVal) {
//       this.leagueinfo=newVal//
//     },
//     clubinfo:function (newVal) {
//       this.clubinfo=newVal
//     },
//   }
  mutations:{
    //修改用户信息，组件触发
    user(state,load){
      state.user=load
    }
  }
 })
Vue.config.productionTip = false
import App from './App.vue'
import router from './router/router.js'
var vm=new Vue({
  el: '#app',
  data: {},
  render: c => c(App),
  router,
  store,

  })









