<template>

  <div class="details">
    <div
    v-for="film in films"
    :key="film.id">
    </div>
    <div class="detail_img">
      <img :src="films.cover.origin">
    </div>
    <div class="film_into">
      <div class="film-word1"><span class="bor_box">影片简介</span></div>
      <div class="film-word2"><span class="bor_box">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{films.director}}</span></div>
      <div class="film-word3"><span class="bor_box">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
      {{films.actors[0].name}}  |
      {{films.actors[1].name}}  |
      {{films.actors[2].name}}  |
      {{films.actors[3].name}}  |
      {{films.actors[4].name}}</span></div>
      <div class="film-word4"><span class="bor_box">地区语言：{{films.nation}}({{films.language}})</span></div>
      <div class="film-word5"><span class="bor_box">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{films.category}}</span></div>
      <div class="film-word6"><span class="bor_box">上映日期：{{films.premiereAt | time}}上映</span></div>
      <div class="film-word7">{{films.synopsis}}</div>
    </div>
    <div class="buy">
      <button>立即购票</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name:'Detail',
    props:['id'],
    data() {
      return {
        films:[]
      }
    },
    filters:{
      time(val){
        let date = new Date(val);
        return date.getMonth() + 1 + "月" + date.getDate() + "日";
      }
    },
    methods:{
      showList(){
        axios.get("/mz/v4/api/film/"+this.id,{
          params:{
            __t:Date.now()
          }
        }).then(res=>{
          this.films = res.data.data.film;
          console.log(this.films )
        })
      }
    },
    created(){
      this.showList()
    }
  }
</script>

<style scoped lang="scss">
  .details{
    margin-top: 0.5rem;
    .detail_img{
      width: 3.2rem;
      height:1.8rem;
      img{
        width: 3.2rem;
        height:1.8rem;
        float:left;
      }
    }
  }
  .film_into{
    div{
      line-height: 0.18rem;
      overflow: hidden;
      margin-bottom: 0.10rem;
      padding-left: 0.20rem;
      font-size:0.12rem;
      color:#333;
    }
    .film-word1{
      height:0.24rem;
      line-height: 0.24rem;
      margin: 0.16rem auto;
      border-left: 0.16rem solid RGB(228, 200, 156);
      font-size: 0.16rem;
      padding-left: 0.04rem;
    }
    .film-word7{
      text-overflow: ellipsis;
      margin-bottom: 0.8rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
  }
  .bor_box{
    box-sizing: border-box;
  }
  .buy{
    width:1.9rem;
    position: absolute;
    left:0;
    right:0;
    margin:0 auto;
    bottom:0.3rem;
    button{
      font-size: 0.14rem;
      min-width: 1.56rem;
      height: 0.36rem;
      line-height: 0.36rem;
      border: none;
      background-color: #fe8233;
      padding: 0;
      margin: 0;
      border-radius: 0.18rem;
      color: #fff;
      -webkit-transition: 0.5s ease;
    }
  }
</style>
