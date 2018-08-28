<template>
    <header>
      <nav class="toolbar">
        <h1 class="nav_left fl">
          <div class="nav_list_icon" @click="isNavShow=!isNavShow">
            <i class="fa fa-navicon"></i>
          </div>
          <div class="too_title">{{coc}}</div>
        </h1>
        <div class="nav_right fr">
          <div class="city" @click="chgaddr">
            成都
            <i class="fa fa-angle-down"></i>
          </div>
          <div class="user" @click="chgmine">
            <i class="fa fa-user-o"></i>
          </div>
        </div>
      </nav>

      <!-- 导航栏 -->

      <nav-list :isNavShow="isNavShow" @close="isNavShow=false"></nav-list>

    </header>
</template>

<script>
  import NavList from "./NavList";
  import "animate.css";
  import router from "../../../router/index.js";
  export default{//导出
    name:"Header",
    data() {//子组件中data必须是函数
      return{
        isNavShow:false,
        coc:"卖座电影"
      }
    },
    components:{
      NavList
    },
    methods:{
      closeNavList(){
        this.isNavShow = false;
      },
      chgaddr(){
       this.$router.push("/addr");
       this.isNavShow = false;
      },
      chgmine(){
      this.$router.push("/mine");
       this.isNavShow = false;
      }
    },
    created(){
      // bus.$on("closeNav",this.closeNavList);

      router.beforeEach((to,from,next)=>{
        this.closeNavList();
        next();
      });
    },
    mounted(){

      this.bus.$on('title',(name)=>{
        this.coc = name
      });
    }
  };
</script>

<style scoped lang="scss">
  .toolbar{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    .nav_left{
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.5rem;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 0.5rem;
      margin: 0 auto;
      div{
        float:left;
      }
      .nav_list_icon{
        float: left;
        width: 0.48rem;
        text-align: center;
        border-right: 1px solid #222;
        box-shadow: 1px 0 1px #363636;
        color: #999;
      }
      .too_title{
        width:1.5rem;
        padding: 0 1em;
        font-size: 0.14rem;
        color: #efefef;
        text-overflow: ellipsis;
        white-space: nowrap;
        displdday: inline-block;
        overflow: hidden;
        box-sizing:border-box;
        font-weight:normal;
      }
    }
    .nav_right{
      color: #999;
      font-size: 0.16rem;
      line-height: 0.5rem;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 0.5rem;
      margin: 0 auto;
      div{
        float:left;
      }
      .user{
        font-size: 0.16rem;
        width: 0.48rem;
        text-align: center;
      }
      .city{
        font-size:0.14rem;
        padding: 0 0.06rem;
        i{
          font-size:0.16rem;
        }
      }
    }
  }
</style>
