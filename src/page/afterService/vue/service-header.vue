<style scoped>
  .top{
    position: fixed;
    top: 0;
    z-index:6;
  }
  .header{
    position: relative;
    height: 44px;
    width: 3.75rem;
    background: #FFffff;
    z-index: 5;

  }
  .head_img{
    position: absolute;
    left: 0;
    height: 100%;
    width: 44px;
  }
  .back-arrow{
    position: absolute;
    top: 15px;
    left: 15px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    cursor: pointer;
    font-size: 16px;
  }
  .head_title{
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    max-width: 2.15rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>


<template>
  <div>
    <div class="top">
      <div class="header">
        <div class="head_img" @click="history">
          <i class="back-arrow"></i>
        </div>
        <div class="head_title" v-text="title"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:["title"],
    methods:{
      history(){
        history.back();
      }
    }
  }
</script>
