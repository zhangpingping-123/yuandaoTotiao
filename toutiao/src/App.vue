<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style lang='less'>
  * {
    --themeColor: #e66272;
  }
  .tt-message {
  line-height: 30px;
  font-size: 16px;
  color: #6ac144;
  text-align: center;
  left: 50%;
  position: fixed;
  top: 10px;
  width: 400px;
  height: 30px;
  margin-left: -200px;
  border: 1px solid #6ac144;
  border-radius: 10px;
}
</style>
