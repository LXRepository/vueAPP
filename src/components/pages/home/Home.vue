<template>
    <div class="home">
      <!-- 轮播图 -->
      <banner></banner>
      <!-- 正在热映 -->
      <movie-box v-for="type in types" :key="type.id" :type="type"></movie-box>
      <!-- <div class="dividing-line">
        <div class="up-coming">即将上映</div>
      </div> -->

      <!-- 即将上映
      <movie-box url_type="coming-soon" count="3"></movie-box> -->
    </div>

</template>

<script>
  import Banner from "./Banner.vue";
  import MovieBox from "./Movebox.vue";
  export default{//导出
    name:"Home",
    data() {//子组件中data必须是函数
      return{
        types:[
          {id:1,url_type:"now-playing",count:5,title:"热映"},
          {id:2,url_type:"coming-soon",count:3,title:"即将上映"}
        ]
      }
    },
    components:{
      Banner,
      MovieBox
    }
  };
</script>

<style scoped lang="scss">
  .home{
    margin-top: 0.5rem;
  }
  .dividing-line {
      position: relative;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      border-bottom: 1px solid #a8a8a8;
      .up-coming {
        width: 0.65rem;
        height: 0.2rem;
        margin: 0 auto;
        margin-bottom: -0.1rem;
        border-radius: 0.05rem;
        font-size: 0.01rem;
        line-height: 0.2rem;
        text-align: center;
        color: #eee;
        background-color: #a7a7a7;
      }
  }
</style>
