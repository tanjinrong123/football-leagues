<template>
    <div>
        <!--导入导航栏-->
        <top></top>
        <!--轮播图，导入公共组件luntobu,并父传值给子-->
        <div class="league_lunbotu">
            <yclunbo :lunbotu="lunbotuList"></yclunbo>
        </div>
        <!--联赛信息的介绍-->
        <div class="league_info">
            <h2>联赛介绍</h2>
            <hr>
            <!--获取西甲的数据，动态渲染，没有的数据写死-->
            <img :src="leagueinfo.league_logo" alt="">
            <div class="table">
                <dl class="table_left">
                    <dt >
                        中文名称
                    </dt>
                    <dd >
                        西班牙足球甲级联赛
                    </dd>
                    <dt >
                        英文名称
                    </dt>
                    <dd>
                        La Liga
                    </dd>
                    <dt>
                        赛事类型
                    </dt>
                    <dd>
                        联赛
                    </dd>
                </dl>
                <dl class="table_right">
                    <dt>
                        国    家
                    </dt>
                    <dd>
                        西班牙
                    </dd>
                    <dt>
                        成立年份
                    </dt>
                    <dd>
                        1929年
                    </dd>
                    <dt>
                        球队数
                    </dt>
                    <dd>
                        20
                    </dd>
                </dl>
            </div>
            <p>西班牙足球甲级联赛（La Liga）在中国则一般简称为“<a href="https://www.laliga.es/">西甲</a>”，是西班牙最高等级的职业足球联赛，也是欧洲及世界最高水平的职业足球联赛之一，现有参赛球队20支。西甲历史上成绩最好的7支球队分别是：皇马、巴萨、马竞、瓦伦西亚、毕尔巴鄂竞技、塞维利亚和比利亚雷亚尔。参加过西甲迄今为止所有赛季的球队有3支：皇马、巴萨和毕尔巴鄂竞技。
                西甲同时亦是出产——FIFA金球奖与世界足球先生和欧洲足球先生（队报，金球奖）最多的联赛。联赛历史上，夺冠次数最多的球队是皇家马德里，共有33次；其次是巴塞罗那，有25次，马德里竞技10次。</p>
        </div>
        <!--联赛的俱乐部介绍，动态获取数据库的俱乐部信息-->
        <div class="league_club">
            <h2>联赛俱乐部</h2>
            <hr>
            <div class="club">
                <ul>
                    <li v-for="item in clubList" :key="item.club_id">
                        <router-link :to="'/league/xj/'+item.club_id"><img :src="item.club_logo" alt="">
                            <p>{{item.club_name}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--联赛的明星球员，写死的数据-->
        <div class="league_player">
            <h2>明星球员</h2>
            <hr>
            <div class="player">
                <ul>
                    <li><a href="#"><img src="../../../assets/images/player1.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                    <li><a href="#"><img src="../../../assets/images/player2.jpg" alt=""><p>斯蒂芬.杰拉德</p></a></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    import yclunbo from '../../subcoponents/lunbotu.vue'
  export default {
    data () {
      return {
        lunbotuList:[  //轮播图的数据，img的地址记得写require
          {id:1,img:require('../../../assets/images/yc/1.jpg'),text:'新闻1',url:'/league/yc/news1'},
          {id:2,img:require('../../../assets/images/yc/2.jpg'),text:'新闻2',url:'/league/yc/news2'},
          {id:3,img:require('../../../assets/images/yc/3.jpg'),text:'新闻3',url:'/league/yc/news3'},
          {id:4,img:require('../../../assets/images/yc/4.jpg'),text:'新闻4',url:'/league/yc/news4'}
        ],
        clubList: [],
        leagueinfo: {},
        league_name: '西甲',
        league_id: 3,
        club_name:'皇家马德里',
        // vuex的state获取了所有的信息
        // Allplayer:[],
        // Allleague:[],
        // Allclub:[]
      }
    },
    created () {
        this.getleagueInfoById(),
        this.getclubInfoByleaguename()
    },
    methods: {
      // 第一是state中封装获取的所有数据的方法。这样的话，组件按id和leaguenama就
      // 可以遍历数组，来查找数据，而不用向接口发送请求获取数据
      // 第二：本想在state中封装安不同id获取不同数据的方法，牵扯异步请求，组件触发时获取的数据有可能是空，最终没能实现
      //  获取所有联赛信息
      // getleagueAllInfo(){
      //   this.Allleague=this.$store.getters.getleagueAll
      //   // console.log(this.aa)
      // },
      // //获取所有俱乐部的信息
      // getclubAllInfo(){
      //   this.Allclub=this.$store.getters.getclubAll
      //   // console.log(this.clubList)
      // },


       // 第三：按不同接口获取各自数据
      // 根据id获取西甲联赛的信息
      getleagueInfoById(){
        this.$ajax.get('leagues/'+this.league_id)
          .then(res=>{
            this.leagueinfo=res.data[0]
          })
          .catch(err=>{
            console.log(err)
          })
      },
      // 按照西甲联赛的名字获取西甲所属的所有俱乐部的信息
      getclubInfoByleaguename(){
        this.$ajax.get('clubs/'+this.league_name)
          .then(res=>{
            this.clubList=res.data
          })
          .catch(err=>{
            console.log(err)
          })
      }
    },
    components:{
      yclunbo
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
    .league_info{
    height:380px;
        h2{
            margin-top: 4%;
            margin-left: 8%;
            font-size: 3em;
        }
        hr{
            margin:0 auto;
            width: 84%;
        }
        img{
            margin-top: 40px;
            width: 16%;
            float: left;
            margin-left: 15%;
            max-height: 250px;
        }
        .table{
         margin-left:40%;
         font-size:15px;
         margin-top:4%;
         .table_left{
             width: 40%;
             float: left;
         }
         .table_right{
             width: 40%;
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
       }    }
       p{
           width: 50%;
           margin-top: 17%;
           margin-left: 40%;
           font-size: 14px;
           text-indent: 2em;
       }
        }
    .league_club{
        h2{
            margin-top: 4%;
            margin-left: 8%;
            font-size: 3em;
        }
        hr{
            margin:0 auto;
            width: 84%;
        }
        .club{
        padding:20px 106px;
        ul{
            overflow: hidden;
        }
            li{
                float: left;
                margin:25px 12px;
                img{
                    width: 76px;
                    max-height: 80px;
                }
                p{
                    text-align: center;
                    font-size: 14px;
                    color: #404040;
                    margin-top: 10px;
                }
            }
        }
    }
    .league_player{
        h2{
            margin-top: 4%;
            margin-left: 8%;
            font-size: 3em;
        }
        hr{
            margin:0 auto;
            width: 84%;
        }
        .player{
            padding:12px 106px;
        }
        li{
        float: left;
        margin:25px 25px;
        img{
        width: 150px;
        max-height: 180px;
        }
        p{
        text-align: center;
        font-size: 14px;
        color: #404040;
        margin-top: 10px;
        }
        }
    }

</style>
