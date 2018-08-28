<template>
  <!-- banner -->
  <div class="swiper-container banner" >
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
          <img :src="banner.imageUrl">
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  export default{
    name:"Banner",
    data() {
      return {
        banners:[]
      }
    },
    methods:{
      getBanner() {
        axios.get("/mz/v4/api/billboard/home",{
          params:{
            _t:Date.now(),
          }
        })
        .then(res=>{
          this.banners = res.data.data.billboards;
        });
      }
    },
    created(){
      this.getBanner();
    },
    updated() {
      new Swiper(".swiper-container",{
        loop:true,
        autoplay:true
      });
    }
  };
</script>

<style scoped lang="scss">
  .banner{
    position:relative;
    display:block;
    overflow:hidden;
    margin: 0;
    padding: 0;
    width: 3.2rem;
    height:1.8rem;
    background-image: url("/static/images/loading.png");
    background-size: 100% 100%;
    background-position: center center;
    img{
      width: 3.2rem;
      float:left;
    }
  }
</style>
