<template>
  <div class="not_found">
    <div>
      <img src="/static/images/404.jpg">
    </div>
    <p>这个页面,神秘失踪了...</p>
    <p><span>不如</span><a href="#/home">返回卖座电影首页</a></p>
    <p>吧</p>
  </div>
</template>

<script>
  export default{
    name:"NotFound",
    data(){
      return {

      }
    }
  };

</script>

<style scoped lang="scss">
  .not_found{
    width:1.76rem;
    height:2.14rem;
    margin:1rem auto;
  }
  img{
    width:1.76rem;
    height:1.2rem;
    float:left;
  }
  p{
    line-height: 0.3rem;
    text-align:center;
    a{
      color: #cb885e;
      text-decoration:underline;
    }
  }
</style>
