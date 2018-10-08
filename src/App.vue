<template>
    <!--公共部分，不写在这里，因为登录页面没有头部-->
    <div class="app">
        <router-view ></router-view>
    </div>
</template>
<script>

  export default {
    data () {
      return {
      }
    },
    created(){
      // this.$store.dispatch('getleagueInfo'),
      //   this.$store.dispatch('getclubInfo')
      this.getuserInfo()
    },
    methods:{
      //初始化，判断有没有用户信息，有则自动登录
       getuserInfo(){
         this.$ajax.get('autologin')
           .then(res=>{
             if(res.data.code===200){
               this.$store.commit('user',res.data.user)
             }else {
               this.$router.push('/')
             }
           })
       }
    }
  }
</script>
<style scoped>
</style>
