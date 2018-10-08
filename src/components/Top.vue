<template>
<div>
    <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <img src="../assets/images/logo.png" class="layout-logo">
            <div class="layout-nav">
                <MenuItem name="1">
                    <router-link to="/home">首页</router-link>
                </MenuItem>
                <!--下拉菜单-->
                <Submenu name="2" class="liansai">
                    <template slot="title">
                        联赛
                    </template>
                    <MenuGroup>
                        <MenuItem name="2-1">
                            <router-link to="/league/yc">英超</router-link>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <router-link to="/league/xj">西甲</router-link>
                        </MenuItem>
                        <MenuItem name="2-3">德甲</MenuItem>
                        <MenuItem name="2-4">意甲</MenuItem>
                        <MenuItem name="2-5">法甲</MenuItem>
                    </MenuGroup>
                </Submenu>
                <Submenu name="3" class="club">
                    <template slot="title">
                        俱乐部
                    </template>
                    <MenuGroup>
                        <MenuItem name="3-1">
                            <router-link to="/league/xj/90">皇马</router-link>
                        </MenuItem>
                        <MenuItem name="3-2">
                            <router-link to="#">巴萨</router-link>
                        </MenuItem>
                        <MenuItem name="3-3">
                            <router-link to="#">利物浦</router-link>
                        </MenuItem>
                    </MenuGroup>
                </Submenu>

                <MenuItem name="4">
                    <router-link :to="user?'/user':'/'">{{user? user.user_name:'登录'}}</router-link>
                </MenuItem>
                <MenuItem name="5">
                    <a href="#" @click.prevent="logout">退出</a>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</div>
</template>

<script>
  export default {
    name: '',
    computed:{
      user(){
        return this.$store.state.user
      }
    },
    methods:{
      logout(){
        this.$ajax.get('logout')
          .then(res=>{
            if(res.data.code===200){
              this.$store.commit('user',null)
              this.$router.push('/')
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
    .ivu-layout-header{
        top:0;
    }
    .layout-logo {
        width: 40px;
        /*height: 30px;*/
        /*background: #5b6270;*/
        /*border-radius: 3px;*/
        float: left;
        position: relative;
        top: 15px;
        left: 10px;
    }
    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<style>
    .ivu-layout-header{
        z-index: 999;
    }
    .liansai .ivu-select-dropdown {
        background-color: #dcdee2;
        color: white;
    }

    .liansai .ivu-menu-item-group-title {
        height: 5px;
        color: white;
    }

    .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
        text-align: justify;
        text-justify: inter-ideograph;
        padding: 6px 25px 6px;
        letter-spacing: 10px;
    }
</style>
