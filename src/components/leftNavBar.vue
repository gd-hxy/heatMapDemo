<template>
 <!-- 左侧导航开始 -->
    <div>
        <template v-for="item in list">
            <template v-if="item.child && item.child.length > 0" :child="item.child">
                <el-submenu :index="item.self.index" :key="item.id">
                    <template slot="title">
                        <i :class="item.self.icon"></i>
                        <span>{{item.self.title}}</span>
                    </template>
                    <leftNavBar :list="item.child"/>
                </el-submenu>
            </template>
            <template v-if="item.child.length == 0">
                <el-menu-item :key="item.id" :index="item.self.index">
                    <i :class="item.self.icon"></i>
                    <span>{{item.self.title}}</span>
                </el-menu-item>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: 'leftNavBar',
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

