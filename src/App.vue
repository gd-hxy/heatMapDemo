<template>
  <div id="app">
    

      <el-container class="containerBg" style="background-color: '#1c2b36';">
      <el-aside style="width: 200px; height:100%;">
        <el-menu
      :default-active = "1"
      class = "el-menu-vertical-demo"
      :background-color = "backgroundColor"
      :text-color = 'menuTextColor'
      :active-text-color = "activityTextColor">
        <leftNavBar :list = "list"/>
      </el-menu>
      </el-aside>
      <el-container>
        <el-header class="main_head">
          <div class="head_right">
            <el-button circle icon = "el-icon-user"></el-button>
          </div>
      </el-header>

      <el-main>
        <baidu-map class="bm-view" :center = "center" :zoom = "zoom" @ready="handler">
          <bm-navigation anchor = "BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
          <bml-heatmap :data = "heatData" :max = "100" :radius = "20"></bml-heatmap>
        </baidu-map>
      </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
import leftNavBar from './components/leftNavBar'
import { BmlHeatmap } from 'vue-baidu-map'
export default {
  name: 'App',
  data (){
    return {
      center: {lng: 0, lat: 0},
      heatData: [
        {lng: 116.418261, lat: 39.921984, count: 50},
        {lng: 116.423332, lat: 39.916532, count: 51},
        {lng: 116.419787, lat: 39.930658, count: 15}
      ],
      menuTextColor: '#fff',
      backgroundColor: '#1c2b36',
      activityTextColor: '#ffd04b',
      zoom: 3,
      list: [
        {
    self: { index: "index", icon: "el-icon-odometer", title: "首页" },
    child: []
  },
  {
    self: {
      index: "userlist",
      icon: "el-icon-s-tools",
      title: "分类一"
    },
    child: [
      { self: { index: "user", icon: "", title: "功能一" }, child: [] },
      {
        self: {
          index: "usergroup",
          icon: "",
          title: "功能二"
        },
        child: []
      },
      { self: { index: "role", icon: "", title: "功能三" }, child: [] }
    ]
  },
  {
    self: {
      index: "pppp",
      icon: "el-icon-s-management",
      title: "分类二"
    },
    child: [
      { self: { index: "", icon: "", title: "功能四" }, child: [] },
      { self: { index: "", icon: "", title: "功能五" }, child: [] }
    ]
  },
  {
    self: {
      index: "/user",
      icon: "el-icon-s-ticket",
      title: "分类三"
    },
    child: [
      { self: { index: "", icon: "", title: "功能六" }, child: [] },
      { self: { index: "", icon: "", title: "功能七" }, child: [] },
      { self: { index: "", icon: "", title: "功能八" }, child: [] },
      { self: { index: "", icon: "", title: "功能九" }, child: [] }
    ]
  },
      ]
    }
  },
  components:{
    leftNavBar,
    BmlHeatmap
  },
  methods: {
    handler({BMap, map}){
      console.log(BMap, map)
      this.center.lng = 116.404;
      this.center.lat = 39.915
      this.zoom = 15
    }
  },
  
}
</script>

<style scoped>
.main_head {
  border-bottom: 1px solid #e7eaec !important;
}
.head_right {
  text-align: right;
  height: 100%;
}
.containerBg {
  width: 100%;
  height: 1000px;
}
.el-menu-vertical-demo {
  width: 200px;
  height: 100%;;
}

.bm-view{
  width: 100%;
  height: 100%;
}
</style>
