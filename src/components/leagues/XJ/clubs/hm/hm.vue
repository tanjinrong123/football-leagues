<template>
    <div >
        <top></top>
        <div class="hm">
            <!--俱乐部信息-->
            <div class="club_info">
                <img :src="clubinfo.club_logo" alt="">
                <div class="table clearfix">
                    <dl class="table_left">
                        <dt >
                            中文名称
                        </dt>
                        <dd >
                            <strong>{{clubinfo.club_name}}</strong>
                        </dd>
                        <dt >
                            英文名称
                        </dt>
                        <dd>
                            {{clubinfo.club_uname}}
                        </dd>
                        <dt>
                            角逐赛事
                        </dt>
                        <dd>
                            <router-link to="/league/xj">西班牙足球甲级联赛</router-link>
                        </dd>
                        <dt>
                            所属地区
                        </dt>
                        <dd>
                            西班牙马德里
                        </dd>
                        <dt>
                            成立时间
                        </dt>
                        <dd>
                            1902年3月6日
                        </dd>
                        <dt>
                            主场馆
                        </dt>
                        <dd>
                            {{clubinfo.club_soccerfield}}
                        </dd>

                    </dl>
                    <dl class="table_right">
                        <dt>
                            主    席
                        </dt>
                        <dd>
                            弗洛伦蒂诺·佩雷斯
                        </dd>
                        <dt>
                            现任主教练
                        </dt>
                        <dd>
                            {{clubinfo.club_manager}}
                        </dd>
                        <dt>
                            现任队长
                        </dt>
                        <dd>
                            塞尔吉奥·拉莫斯（西班牙)
                        </dd>
                        <dt>
                            球队绰号
                        </dt>
                        <dd>
                            银河战舰
                        </dd>
                        <dt>
                            球迷昵称
                        </dt>
                        <dd>
                            美凌格
                        </dd>
                        <dt>
                            官    网
                        </dt>
                        <dd>
                            <a href="http://www.realmadrid.cn/">http://www.realmadrid.cn/</a>
                        </dd>
                    </dl>
                </div>
                <p>皇家马德里足球俱乐部（Real Madrid Club de Fútbol ，中文简称为 "<a href="http://www.realmadrid.cn/">皇马</a>"）是一家位于西班牙首都马德里的足球俱乐部，球队成立于1902年3月6日，前称马德里足球队。
                    1920年6月29日，时任西班牙国王阿方索十三世把"Real"（西语，皇家之意）一词加于俱乐部名前，徽章上加上了皇冠，以此来推动足球运动在西班牙首都马德里市的发展。从此，俱乐部正式更名为皇家马德里足球俱乐部。
                </p>
                <p>皇家马德里足球俱乐部，拥有众多世界球星。2000年12月11日被国际足球联合会（FIFA）评为20世纪最伟大的球队。2009年9月10日被国际足球历史和统计联合会评为20世纪欧洲最佳俱乐部。2014年9月10日被评为2014年度欧洲最佳俱乐部。
                    皇家马德里已夺得过13次欧冠冠军（夺冠次数欧洲足坛第一）、33次西班牙足球甲级联赛冠军（西甲第一）、19次西班牙国王杯冠军、10次西班牙超级杯冠军、4次欧洲超级杯冠军、5次世俱杯冠军（含前身丰田杯，夺冠次数第一）。
                    2017年5月22日，皇马客场2-0完胜马拉加，夺得本赛季联赛冠军，这是皇马近5年来首个西甲冠军，俱乐部历史上第33次联赛捧杯！ 6月4日，皇家马
                    德里4-1大胜尤文图斯，夺得本赛季欧洲冠军杯冠军，这是皇马近4年来第3个欧冠冠军，俱乐部历史上第12次欧冠冠军，也成为欧冠改制以来第一支成功卫冕欧冠冠军的球队。2018年5月26日，皇家马德里在欧冠决赛中3比1战胜利物浦，
                    拿下队史第十三冠，同时也完成欧冠改制之后史无前例的三连冠伟业，这也是皇马近五年内第四次获得欧冠冠军。</p>
                </p>
            </div>
            <!--俱乐部球员，动态渲染数据时，图片渲染有问题，没有解决-->
            <div class="club_player">
                <div class="coach">
                    <h2>教练</h2>
                    <hr>
                    <img src="../../../../../assets/images/hmjl.jpg" alt="">
                </div>
                <div class="player">
                    <h2>球员</h2>
                    <hr>
                    <!--element的table组件-->
                    <el-table
                            :data="playerList"
                            border
                            :default-sort = "{prop: 'date', order: 'descending'}"
                            style="width: 100%">
                        <el-table-column
                                prop="player_name"
                                label="姓名">
                        </el-table-column>
                        <el-table-column
                                prop="player_uname"
                                label="英文姓名"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="player_photo"
                                label="照片"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="player_age"
                                label="年龄"
                                width="70"
                                sortable>
                        </el-table-column>
                        <el-table-column
                                prop="player_high"
                                label="身高"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                prop="player_weight"
                                label="体重"
                                width="70">
                        </el-table-column>
                        <el-table-column
                                prop="player_nationality"
                                label="国家"
                                width="70">
                        </el-table-column>
                        <el-table-column
                                prop="club_name"
                                label="俱乐部">
                        </el-table-column>
                        <el-table-column
                                prop="league_name"
                                label="联赛"
                                width="70">
                        </el-table-column>
                        <el-table-column
                                prop="player_position"
                                label="角色"
                                width="70">
                        </el-table-column>
                        <el-table-column
                                prop="player_networth"
                                label="工资">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return{
        club_name:'皇家马德里',
        playerList:[],   //球员列表
        clubinfo:{},   //俱乐部信息
        club_id:90  //俱乐部id
      }
    },
    created(){
      this.getplayerInfo(),
        this.getclubInfo()
    },
    methods:{
      //根据俱乐id，获取俱乐部的信息
      getclubInfo(){
        this.$ajax.get('club/'+this.club_id)
          .then(res=>{
            this.clubinfo=res.data[0]
          })
          .catch(err=>{
            console.log(err)
          })
      },
      //按照俱乐部名字，获取每个球员的信息
      getplayerInfo(){
        this.$ajax.get('players/'+this.club_name)
          .then(res=>{
            // console.log(res)
            this.playerList=res.data
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .clearfix:after{
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .hm{
        padding: 0 100px;
    }
    .club_info{
       img{
        margin-top: 40px;
        width: 16%;
        float: left;
        margin-left: 60px;
        max-height: 250px;
    }
    .table{
        margin-bottom: 35px;
        margin-left:37%;
        font-size:13px;
        margin-top:5%;
    .table_left{
        margin-top: 70px;
        width: 50%;
        float: left;
    }
    .table_right{
        margin-top: 70px;
        width: 45%;
        float: left;
    }
    dt {
        background: #b3e8bc;
        color:#fff;
        float:left;
        font-weight:bold;
        margin-right:10px;
        padding:5px;
        width:40%;
    }
    dd {
        margin:2px 0;
        padding:5px 0;
    }
    }
    p{
        margin-top: 1%;
        font-size: 14px;
        text-indent: 2em;
    }

    }
    .club_player{
    .coach{
        height: 350px;
    h2{
        margin-top: 4%;

        font-size: 3em;
    }
    img{
        margin-top: 2%;
        width: 16%;
        float: left;
        margin-left: 2%;
        max-height: 250px;
    }
    }
    .player{
    height:500px;
    }
    }
</style>
<style>
    /*el组件的属性在scoped里面改不了，就单独拿出来修改*/
    .club_player .ivu-table td{
        height: 100px;
    }
    .club_player .ivu-table th{
        text-align: center;
    }
    .club_player .ivu-table-cell{
        text-align: center;
        padding: 0;
    }
    .player .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
        padding-left: 0px;
        text-align: center;
    }
    .player .el-table th, .el-table tr{
        height: 120px;
    }
</style>
