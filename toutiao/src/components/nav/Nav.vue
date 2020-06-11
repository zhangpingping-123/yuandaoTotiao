<!-- 左侧导航栏 -->
<template>
<div class='toutiao-nav'>
    <div class="nav-title">
        <h3>远道头条</h3>
    </div>
    <div class="nav-list">
        <div class="nav-list-item" v-for="nav in navs" :key="nav.id">{{nav.text}}</div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    navs:[
        {id:0, text:"推荐"},
        {id:2, text:"西瓜视频"},
        {id:12, text:"财经"},
        {id:3, text:"热点"},
        {id:4, text:"直播"},
        {id:5, text:"图片"},
        {id:6, text:"科技"},
        {id:7, text:"娱乐"},
        {id:8, text:"游戏"},
        {id:9, text:"体育"},
        {id:10, text:"懂车帝"},
        {id:11, text:"热点"}
    ],
    isPlaytNav:false,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    // playtNav:function(){
    //     console("被点击了")
    //     this.isPlaytNav = true;
    // }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
    .toutiao-nav {
        width: 200px;
        margin: 0 auto;
        text-align: center;
        .nav-title {
            h3 {
                color: var(--themeColor);
                font-weight: 200;
            }
        }

        .nav-list {
            padding: 0 20px;
            .nav-list-item {
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 14px;  
            }
            // .playt-nav{
            //     color: var(--themeColor);
            // }
            .nav-list-item:hover{
                color: white;
                border-radius: 5px;
                background-color: var(--themeColor);
            }
        }
    }
</style>