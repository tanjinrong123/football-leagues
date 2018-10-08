<template>
    <div>
        <div class="league_lunbotu">
            <yclunbo :lunbotu="lunbotuList"></yclunbo>
        </div>
        <div class="league_info">
            <h2>联赛介绍</h2>
            <hr>
            <img :src="leagueinfo.league_logo" alt="">
            <div class="table">
                <dl class="table_left">
                    <dt >
                        中文名称
                    </dt>
                    <dd >
                        英格兰足球超级联赛
                    </dd>
                    <dt >
                        英文名称
                    </dt>
                    <dd>
                        Premier League
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
                        主办机构
                    </dt>
                    <dd>
                        英格兰足总
                    </dd>
                    <dt>
                        球队数
                    </dt>
                    <dd>
                        20
                    </dd>
                </dl>
            </div>
            <p>英格兰足球超级联赛（Premier League），通常简称“<a href="https://www.premierleague.com/">英超</a>” [1]  ，是英格兰足球总会属下的最高等级职业足球联赛，前身是英格兰足球甲级联赛。英超是“欧洲五大联赛”之一，由20支球队组成，由超级联盟负责具体运作，赛季结束后积分榜末三位降入英格兰足球冠军联赛。
                英超联赛一直以来被认为是世界上最好的联赛之一，节奏快、竞争激烈、强队众多，现已成为世界上最受欢迎的体育赛事，也是收入最高的足球联赛。</p>
        </div>
        <div class="league_club">
            <h2>联赛俱乐部</h2>
            <hr>
            <div class="club">
                <ul>
                    <li v-for="item in clubList" :key="item.club_id">
                        <a href="#"><img :src="item.club_logo" alt="">
                            <p>{{item.club_name}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
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
    // import ycinfo from  '../subcoponents/leagueInfo'
  export default {
    data () {
      return {
        lunbotuList: [  //轮播图的数据
          {id: 1, img: require('../../../assets/images/yc/1.jpg'), text: '新闻1', url: '/league/yc/news1'},
          {id: 2, img: require('../../../assets/images/yc/2.jpg'), text: '新闻2', url: '/league/yc/news2'},
          {id: 3, img: require('../../../assets/images/yc/3.jpg'), text: '新闻3', url: '/league/yc/news3'},
          {id: 4, img: require('../../../assets/images/yc/4.jpg'), text: '新闻4', url: '/league/yc/news4'}
        ]
      }
    },
    components: {
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
       }
       }
       p{
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
                    width: 75px;
                    max-height: 75px;
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
