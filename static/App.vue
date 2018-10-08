<template>
  <div id="app">
    <div class="container">
      <!--导航栏-->
      <div class="header">
        <div class="navBox" @mouseenter="toggle" @mouseleave="toggle" >
          <router-link to="/"><span class="iconfont icon-liebiao"></span></router-link>
          <ul class="navList"  ref="ul" v-show="flag">
            <li class="li">
              <router-link to="/league">足球联赛</router-link>
            </li>
            <li class="li">
              <router-link to="/club">足球俱乐部</router-link>
            <li>
            <li class="li">
              <router-link to="/players">球员</router-link>
            </li>
          </ul>
        </div>
        <ul class="rightList">
          <li><a href="javascript:void(0)" onclick="popUpContact()" id="t-connect" data="0">登录</a></li>
          <li><a href="javascript:void(0);" id="t-show" data="0">关于我们</a></li>
        </ul>
      </div>
      <!--中间内容-->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:false
      }
    },
  created(){
    this.flag=false
  },
  methods:{
    toggle(){
      // this.$refs.ul.style.display='block'
      this.flag=!this.flag
    }
  }
  }

</script>
<style src="./assets/fonts/iconfont.css">
</style>
<style lang="scss" >
  .container {

  .header {
    background-color: #eeeeee;
    padding: 0 20px;
    /*height: 200px;*/
    position: relative;
    text-align: center;
  .navBox {
    position: absolute;
    top: 30px;
    text-align: left;
    z-index: 10;
  .navList {
  /*display: none;*/
  li {
    margin-bottom: 5px;
    line-height: 1.5;
  }
  }
  .iconfont {
    display: block;
    margin-bottom: 10px;
    font-size: 19px;
  }
  }
  .rightList {
    position: absolute;
    right: 5%;
    top: 30px;
    z-index: 10;
     li {
     float: right;
      margin-right: 10px;
    }

  }
  }
  }
</style>





