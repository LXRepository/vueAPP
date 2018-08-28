<template>
  <li>
    <div class="item-img">
      <img :src="movie.cover.origin">
      <div class="left fl">
        <div class="title" :class="type.url_type">{{movie.name}}</div>
        <div class="count" v-if="type.url_type=='now-playing'">{{movie.cinemaCount}}家影院上映 {{movie.watchCount}}人购票</div>
      </div>
      <div class="right">
        <div class="score" v-if="type.url_type=='now-playing'">{{movie.grade}}</div>
        <div class="date" v-else>{{movie.premiereAt | time}} 上映</div>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
      name:"MovieItem",
      props:["type","movie"],
      filters : {
        time(value) {
          let date = new Date(value);
          return date.getMonth() + 1 + "月" + date.getDate() + "日";
        }
      },
      data() {
        return {

        }
      }
    };
</script>

<style scoped lang="scss">
  .item-img{
    width: 2.86rem;
    height:2.1rem;
    margin:auto;
    margin-top:0.16rem;
    color: #333;
    border: 1px solid #ccc;
    background-image: url("/static/images/loading.png");
    background-size: 100% 100%;
    background-position: center center;
    img{
      width:2.86rem;
      height:1.6rem;
      float:left;
    }
    div{
      box-sizing: border-box;
    }
    .left{
      height: 0.5rem;
      padding-right: 0;
      padding-top: 0.13rem;
      padding-left: 0.1rem;
      .title{
        font-size: 0.12rem;
        line-height: 0.15rem;
        -webkit-user-select: text;
        user-select: text;
      }
      .count{
        font-size: 0.08rem;
        color: #9a9a9a;
        line-height: 0.15rem;
      }
    }
    .right{
      color: #f78360;
      line-height: 0.5rem;
      float: right;
      margin-right: 0.15rem;
      font-size: 0.18rem;
    }
  }
  .date{
    font-size: 0.1rem;
    color:rgb(245,162,125);
    padding-top: -0.15rem;
  }
    .coming-soon{
      padding-top: 0.05rem;
    }

</style>
