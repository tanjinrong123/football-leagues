<template>
    <div class="layout">
    <top></top>
        <!--中间内容-->
        <Content :style="{margin: '64px 0px 0', background: '#fff', minHeight: '500px'}">
            <!--走马灯，引用的Git上找的VueAwesomeSwiper   ui框架-->
            <div class="carousels">
                <!-- swiper -->
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <router-link to="/news"><img src="../assets/images/new22.jpg" alt=""></router-link>
                        </swiper-slide>
                        <swiper-slide>
                            <router-link to="/news"><img src="../assets/images/new22.jpg" alt=""></router-link>
                        </swiper-slide>
                        <swiper-slide>
                            <router-link to="/news"><img src="../assets/images/new22.jpg" alt=""></router-link>
                        </swiper-slide>
                        <swiper-slide>
                            <router-link to="/news"><img src="../assets/images/new22.jpg" alt=""></router-link>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
            </div>
            <!--五大联赛-->
            <div class="league">
                <div class="left">
                    <h2> 哈哈,欢迎来到五大联赛</h2>
                    <p>欧洲足球五大联赛是欧洲足球联赛影响力及竞技水平排名前五的联赛，即西班牙足球甲级联赛（La Liga）、英格兰足球超级联赛（The Premier League）、意大利足球甲级联赛（Serie A）、德国足球甲级联赛（ Bundesliga ）和法国足球甲级联赛（Ligue 1）。
                        这些联赛代表着世界足坛最顶尖的足球水平，吸引了众多球星加盟，是世界足球发展的风向标。</p>
                    <Button type="default" ghost>了解详情</Button>
                </div>
                <div class="right_img">
                    <div class="right_lunbo" >
                        <Carousel autoplay v-model="value1" loop>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <img src="../assets/images/0f98d6f9a74f087bd6887d81.jpg" alt="">
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <img src="../assets/images/200811481642561_2.jpg" alt="">
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <img src="../assets/images/0f98d6f9a74f087bd6887d81.jpg" alt="">
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel">
                                    <img src="../assets/images/200811481642561_2.jpg" alt="">
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>

                </div>

            </div>
            <!--俱乐部-->
            <div class="clubs">
                <div class=" leftclub demo-split-pane">
                    <ul>
                        <li><a href="#"><img src="../assets/images/皇马.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/巴萨.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/拜仁.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/曼联.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/利物浦.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/切尔西.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/曼城.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/尤文图斯.jpg" alt=""></a></li>
                        <li><a href="#"><img src="../assets/images/巴黎.jpg" alt=""></a></li>
                    </ul>
                </div>
                <div class="rightclub demo-split-pane">
                    <div class="clubs_title">
                        <h2>俱乐部</h2>
                        <p>主要提供孕妇照、宝宝照、亲子照和全家福的专业儿童拍摄服务。历经12年的发展历程，如今已成为拥有多家直营店的全国知名儿童摄影机构</p>
                        <el-button type="info" round>了解更多俱乐部</el-button>
                    </div>
                </div>
            </div>
            <!--球员-->
            <div class="players">
                <div class="players_title">
                    <h2>球员</h2>
                    <p>看球员在球场上奋战，这是一种享受。so,让我们来扒一扒那些精彩的故事</p>
                    <Button shape="circle">了解更多球员</Button>
                </div>
                <div class="players_images">
                        <!-- swiper1 -->
                        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                            <swiper-slide class="slide-1">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-5">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                            <swiper-slide class="slide-1">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                            <swiper-slide class="slide-5">
                                <a href="#"><img src="../assets/images/new1.jpg" alt=""></a>
                            </swiper-slide>
                        </swiper>
                </div>
            </div>
        </Content>
    </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return{
        split1: 0.5,
        value1: 0,
        // VueAwesomeSwiper ui框架引用的carousel需要的设置
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        // 最后一栏players，VueAwesomeSwiper ui框架引用的carousel需要的设置
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
      },
    // VueAwesomeSwiper ui框架引用的carousel需要的设置
      mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>
<style lang="scss" scoped>
    /*轮播图*/
    .ivu-layout-content .carousels {
        width: 100%;
    }
    .ivu-carousel .ivu-carousel-item {
        height: 100%;
    }
    .ivu-carousel .demo-carousel {
        height: 580px;
    }
    .ivu-carousel-item .demo-carousel img {
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
    /*第一部分*/
    .league{
        width: 100%;
        height: 580px;
        background-color: #f2f2f2;
        position: relative;
    }
    .league .left {
        width: 30%;
        float: left;
        padding-top: 100px;
        padding-left: 8%;
        text-align: left;
        min-width: 250px;

    }
    .league .left h2{
        font-size: 30px;
    }
    .league .left p{
        padding: 30px 0;
        font-size: 12px;
    }
    .league .right_img{
        width: 70%;
        height:90%;
        position: absolute;
        /*记住，right,left等等只有在设置了position时生效*/
        top:35px;
        right: 0;
        background: url(../assets/images/pic.png) no-repeat center center;
        -webkit-background-size: 80%;
        background-size: 80%;

    }
    .league .right_lunbo{
        height: 68%;
        width: 74%;
        position: absolute;
        top:7%;
        left: 13%;

    }
    .league .right_lunbo .ivu-carousel{
        height: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__item h3 {
         color: #475669;
         font-size: 14px;
         opacity: 0.75;
         line-height: 200px;
         margin: 0;
     }

    /*第二部分*/
    .clubs {
        height: 500px;
    .leftclub {
        float: left;
        width: 50%;
        padding: 30px;
    }
    li {
        float: left;
    img {
        width: 125px;
        height: 125px;
        margin: 12px 28px;
    }
    }
    .rightclub{
        width: 50%;
        float: right;
        padding: 30px;
    }
    .clubs_title{
        text-align: left;
        margin: 40px 55px;
    h2{
        font-size: 30px;
    }
    p{
        width: 100%;
        margin:40px 0;
        font-size: 14px;
    }
    .el-button {
        margin-top: 23px;
    }
    }
    }

    /*第三部分*/
    .players{
        width: 100%;
        height: 620px;
        /*padding: 20px 50px 0px 50px;*/
    .players_title{
        height: 250px;
        text-align: center;
        /*font-size: 30px;*/
        padding: 20px 0;
    h2{
        font-size: 30px;
    }
    p{
        width: 600px;
        margin:10px auto;
        font-size: 15px;
    }
    .ivu-btn{
        margin-top: 20px;
        margin-left: 0px;
    }
    }
    .players_images{
    height:440px;
    .ivu-carousel-list {
        height: 100%;
    }
    .ivu-carousel-track, .ivu-carousel-track.higher {
        height: 100%;
    }
    .ivu-btn{
        font-size: 20px;
        margin-left: 50px;
    }
    .swiper-container {
        background-color: #000;
    }
    .swiper-slide {
        background-size: cover;
        background-position: center;
    &.slide-1 {
         background-image:url('/static/images/surmon-1.jpg');
     }

    &.slide-2 {
         background-image:url('/static/images/surmon-6.jpg');
     }

    &.slide-3 {
         background-image:url('/static/images/surmon-8.jpg');
     }

    &.slide-4 {
         background-image:url('/static/images/surmon-9.jpg');
     }

    &.slide-5 {
         background-image:url('/static/images/surmon-10.jpg');
     }
    }
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
    }
    }
</style>
<style>
    .right_lunbo .ivu-carousel-list{
        height: 100%;
    }
    .right_lunbo .ivu-carousel-track{
        height: 100%;
    }
    .right_lunbo .ivu-carousel-track higher{
        height: 100%;
    }
    .right_lunbo .ivu-carousel .ivu-carousel-item{
        height: 100%;
    }
</style>

