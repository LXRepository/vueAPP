<template>
  <div class="flims">
    <flim-box></flim-box>
  </div>
</template>

<script>
  import FlimBox from "./FlimBox.vue";
  export default{
    name:"Flims",
    data(){
      return {

      }
    },
    components:{
      FlimBox
    }
  };

</script>

<style scoped lang="scss">
  .flims{
    margin-top: 0.5rem;
    box-sizing:border-box;
    width:100%;
    padding-left: 0.15rem;
    padding-right: 0.15rem;
    background-color: #f9f9f9;
    position: absolute;
    min-height: 100%;
  }
</style>
