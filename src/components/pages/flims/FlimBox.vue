<template>
  <div class="flim-box">
    <flim-nav @change="change" :type="type"></flim-nav>
    <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
    infinite-scroll-immediate-check='false'>
      <li is="flim-item"
        v-for="flim in flims"
        :key="flim.id"
        :flim="flim"
        :type="type">
      </li>
    </ul>
  </div>
</template>

<script>
import FlimItem from "./FlimItem.vue";
import FlimNav from "./FlimNav.vue";
import axios from "axios";
import { Toast } from "mint-ui";
  export default {
    name:"FlimBox",
    data() {
      return {
        type:"now-playing",
        flims:[],
        page:1,
        count:7,
        loading:false
      }
    },
    components:{
      FlimItem,
      FlimNav
    },
    methods:{
      change(type){
        this.type = type;
      },
      search() {
        let toast = Toast({
          message: 'Loading...',
          duration: -1,
          iconClass:"fa fa-spinner fa-spin"
        });
        let {page,count} = this;
        axios.get("/mz/v4/api/film/" + this.type,{
          params:{
            page,
            count
          }
        }).then(res=>{
          //concat连接数组是原数组不受影响
          this.flims = this.flims.concat(res.data.data.films);
          let {current,total} = res.data.data.page;
          if(current === total){
            return;
          }

          toast.close();

          this.loading = false;
          this.page++;
        });
      },
      loadMore() {
        this.loading = true;
        this.search()
      }
    },
    created() {
      this.search();
    },
    watch:{
      type(val) {
          this.page=1;
          this.loading = false;
          this.flims=[];
          this.search()
        }

    }
  };
</script>

<style scoped lang="scss">

</style>
