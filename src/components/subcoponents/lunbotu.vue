<template>
    <!--写的轮播图组件，以供不同的联赛leagues的页面使用，使用的iview的组件-->
    <div class="lunbotu">
        <Carousel autoplay v-model="value" loop >
            <CarouselItem v-for="item in lunbotu" :key="item.id">
                <div class="demo-carousel">
                    <router-link :to="item.url">
                        <img :src="item.img" alt="">
                        <h3>{{item.text}}</h3>
                    </router-link>
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        value:0
      }
    },
    props:['lunbotu']
  }
</script>
<style lang="scss" scoped>
    .league_lunbotu{
        .lunbotu{
         margin-top: 100px;
        .ivu-carousel{
            /*top: 100px;*/
            width: 85%;
            margin: 0 auto;
        .ivu-carousel-dots-inside{
            left: 46%;
        }
        .ivu-carousel-list
            .demo-carousel {
                img{
                max-height: 480px;
                width: 100%;
                }
                h3{
                position: absolute;
                bottom: 30px;
                margin-left: 50px;
                font-size: 20px;
                z-index: 33;
                }
            }
        }
    }
    }


</style>
