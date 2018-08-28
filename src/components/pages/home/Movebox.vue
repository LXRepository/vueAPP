<template>
  <div class="movie-box">
    <ul>
      <li
       is="movie-item"
       v-for="movie in movies"
       :key="movie.id"
       :movie="movie"
       :type="type"></li>
    </ul>
    <div class="more-button">更多{{type.title}}电影</div>
    <slot></slot>
  </div>
</template>

<script>
    import MovieItem from "./MovieItem";
    import axios from "axios";
    export default {
      name:"MovieBox",
      props:["type"],
      data() {
        return {
          movies:[],
          page:1
        }
      },
      components:{
        MovieItem
      },
      methods:{
        getMovies() {
          axios.get("/mz/v4/api/film/" + this.type.url_type,{
            params:{
              page:this.page,
              count:this.type.count,
              _t:Date.now()//当前时间毫秒值
            }
          }).then(res=>{
            this.movies=res.data.data.films;
          });
        }
      },
      created() {
        this.getMovies()
      }
    };
</script>

<style scoped lang="scss">
  .more-button{
    width: 1.6rem;
    height: 0.3rem;
    border: 1px solid #aaa;
    border-radius: 0.15rem;
    margin: 0.2rem auto 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.12rem;
    color: #616161;
  }
</style>
