<!-- 切换栏 -->
<template>
<div class='post-box'>
    <!-- tab切换开始 -->
    <div class="post-tabs">
        <div :class="['tabs-item',{'active':tab.id==activeTab}]" 
            v-for="tab in tabs" :key="tab.id"
            @click.stop="clickTab(tab.id)"
        >
            {{tab.text}}
        </div>
    </div>
    <!-- tab切换结束 -->
    <!-- 文章输入开始 -->
    <div class="post-text" v-show="activeTab=='wTouTiao'">
        <textarea class="text-input" name="" id="" cols="30" rows="10" placeholder="有什么新鲜事告诉大家"></textarea>
        <div class="bottom">
            <div class="imgButton">
                <i class="iconfont icon-picture"></i>
                <span>图片</span>
            </div>
            <div class="wTouTiao-release">发布</div>
        </div>
    </div>
    <div class="post-text" v-show="activeTab=='article'">写文章</div>
    <!-- 文章输入结束 -->
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
    tabs:[{
        id:"wTouTiao",
        text:"发布微头条"
    },{
        id:"article",
        text:"写文章"
    }],
    activeTab:"wTouTiao",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    clickTab:function(tabId){
        this.activeTab = tabId;
    }
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
@import "../../assets/ttIconfont.css";
.post-box{
    .post-tabs {
    width: 100%;
    display: flex;

  .tabs-item {
    width: 100px;
    font-size: 14px;
    height: 40px;
    margin: 0 20px;
    text-align: center;
    line-height: 40px;
  }
  .active{
      border-bottom: 2px solid var(--themeColor);
      color: #629bfb;
  }
}
.post-text {
    width:100%;
    padding: 10px;
  .text-input {
      width: 100%;
      border: 1px solid #ddd;
  }

  .bottom {
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    
    .imgButton {
       .icon-picture{
           font-size: 20px;
       } 
    }

    .wTouTiao-release {
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: white;
        background-color: var(--themeColor);
        text-align: center;
    }
  }
}
}
</style>