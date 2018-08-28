<template>
    <div class="nav_list">

      <!-- 遮罩 -->
      <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut" >
      <div class="mask" @click="$emit('close')" v-if="isNavShow"></div>
      </transition>

      <!-- 导航栏 -->
      <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft" >
      <nav class="nav-group" v-if="isNavShow">
        <ul @click="$emit('close')">
          <router-link
            tag="li"
            v-for="tit in navs"
            :key="tit.id"
            :to="tit.path"
            >{{tit.title}}
            <i class="fa fa-angle-right"></i>
          </router-link>
        </ul>
      </nav>
      </transition>

    </div>
</template>

<script>
  export default{//导出
    name:"Navlist",
    props:["isNavShow"],
    data() {//子组件中data必须是函数
      return{
        navs:[
          {id:1,title:"首页",path:"/home"},
          {id:2,title:"影片",path:"/flims"},
          {id:3,title:"影院",path:"cinema"},
          {id:4,title:"商城",path:""},
          {id:5,title:"我的",path:"/mine"},
          {id:6,title:"卖座卡",path:""}
        ]
      }
    }
  };
</script>

<style scoped lang="scss">
  .animated{
    animation-duration: 0.8s;
  }
  .nav_list{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #9a9a9a;
    z-index: 499;
    .mask{
      background: rgba(0,0,0,0.5);
      position: absolute;
      top: 0.5rem;
      right: 0;
      height:100vh;
      left: 0;
      transition: all ease 0.4s;
      -webkit-transition: all ease 0.4s;
    }
    .nav-group{
      border-top: 1px solid #222;
      box-shadow: 0 1px 1px #363636 inset;
      background: #282828;
      position: absolute;
      display: block;
      top: 0.5rem;
      right: 1.10rem;
      height:100vh;
      left: 0;
      transition: all ease 0.4s;
      -webkit-transition: all ease 0.4s;
      li{
        line-height: 0.5rem;
        font-size:0.14rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 0.16rem;
        border-bottom:1px solid #333;
      }
    }
  }
</style>
