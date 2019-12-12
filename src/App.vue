<template>
  <div id="app">
    <baidu-map class="bm-view" :center = "center" :zoom = "zoom" @ready="handler"></baidu-map>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler({BMap, map}){
      console.log(BMap, map)
      this.center.lng = 116.404;
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bm-view{
  width: 80%;
  height: 400px;
}
</style>
