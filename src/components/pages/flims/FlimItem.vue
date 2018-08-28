<template>
    <router-link
    tag="li"
    class="flim-item-li"
    :to="{name:'detail',params:{id:flim.id}}">
      <div class="flim-item"
      @click="bus.$emit('title',flim.name)">
        <div class="flim-item-img">
          <img :src="flim.poster.origin">
        </div>
        <div class="flim-desc">
          <div class="flim-next-arrow">
            <i class="fa fa-angle-right"></i>
          </div>
          <div class="flim-grade">{{flim.grade}}</div>
          <div class="flim-name">{{flim.name}}</div>
          <div class="flim-intro">{{flim.intro}}</div>
          <div class="flim-counts">{{flim.cinemaCount}} 家影院 {{flim.watchCount}}人观影</div>
        </div>
      </div>
    </router-link>
</template>

<script>
  export default {
    name:"FlimItem",
    props:["flim"],
    data() {
      return {

      }
    }
  };
</script>

<style scoped lang="scss">
  .flim-item-li {
    .flim-item {
      width: 100%;
        padding: 0.2rem 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        height: 0.82rem;

        .flim-item-img {
          width: 0.6rem;
          height: 0.82rem;
          float: left;
          overflow: hidden;
          background-image: url("/static/images/loading.png");
          background-size: 100% 100%;
          background-position: center center;
          img{
            width: 0.6rem;
            height: 0.82rem;
          }
        }

        .flim-desc {
          padding-left: 0.15rem;
          display: inline-block;
          width: 70%;
          float:left;

          .flim-next-arrow {
            float: right;
            line-height: 0.29rem;
            color: #c6c6c6;
          }
        }

        .flim-grade {
          float: right;
          font-size: 0.16rem;
          line-height: 0.32rem;
          color: #fc7103;
        }

        .flim-name {
          font-size: 0.16rem;
          line-height: 0.32rem;
          color: #000;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .flim-intro {
          height: 0.24rem;
          line-height: 0.24rem;
          color: #8e8e8e;
          font-size: 0.12rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          display: inline-block;
        }

        .flim-counts {
          line-height: 0.24rem;
          color: #8e8e8e;
          font-size: 0.12rem;
        }
    }
  }
</style>
