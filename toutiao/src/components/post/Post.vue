<!-- 切换栏 -->
<template>
  <div class="post-box">
    <!-- tab切换开始 -->
    <div class="post-tabs">
      <div
        :class="['tabs-item',{'active':tab.id==activeTab}]"
        v-for="tab in tabs"
        :key="tab.id"
        @click.stop="clickTab(tab.id)"
      >{{tab.text}}</div>
    </div>
    <!-- tab切换结束 -->
    <!-- 文章输入开始 -->
    <div class="post-text" v-show="activeTab=='wTouTiao'">
      <textarea class="text-input" name id cols="30" rows="10" placeholder="有什么新鲜事告诉大家"></textarea>
      <div class="bottom">
        <div class="imgButton">
          <div class="imgButton-tiitle" @click.stop="toggleUpImgbutton">图片</div>
          <div class="upload-img" v-show="showUpImgbutton">
            <div class="upImg">
              <div class="title">+</div>
              <input type="file" multiple @change="handleImgbutton" accept=".jpg, .png" />
            </div>
            <!-- 上传图片的地方开始 -->
            <div class="img-item" v-for="(img,index) in upImgs" :key="img">
              <img :src="img" alt />
              <div class="deleteImg" @click.stop="deleteImg(index)">x</div>
            </div>
            <!-- 上传图片的地方结束 -->
          </div>
        </div>
        <div class="wTouTiao-release">发布</div>
      </div>
    </div>
    <div class="post-text" v-show="activeTab=='article'">
      <input class="post-text-input" type="text" placeholder="请输入内容" />
      <vue-editor v-model="richContent" class="rich-editor" placeholder="请输入文章"/>
      <div class="rich-publish">发布</div>
    </div>
    <!-- 文章输入结束 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

//引用富文本
import { VueEditor } from "vue2-editor";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    VueEditor
  },
  data() {
    //这里存放数据
    return {
      tabs: [
        {
          id: "wTouTiao",
          text: "发布微头条"
        },
        {
          id: "article",
          text: "写文章"
        }
      ],
      activeTab: "wTouTiao",
      showUpImgbutton: false,
      upImgs: [],
      richContent: "" //富文本编辑器的内容
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //删除上传照片事件
    deleteImg: function(index) {
      this.upImgs.splice(index, 1);
    },
    //图片文件上传事件
    handleImgbutton: function(e) {
      Array.from(e.target.files).forEach(f => {
        let params = new FormData();
        params.append("file", f);

        //发请求
        this.$axios.post("/aliossUpload", params).then(res => {
          console.log(res);
          this.upImgs.push(res.url);
        });
      });
    },
    //切换是否显示图片
    toggleUpImgbutton: function() {
      this.showUpImgbutton = !this.showUpImgbutton;
    },
    //切换tab栏
    clickTab: function(tabId) {
      this.activeTab = tabId;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
@import "../../assets/ttIconfont.css";
.post-box {
  .post-tabs {
    width: 100%;
    display: flex;
    zoom: 1;
    .tabs-item {
      width: 100px;
      font-size: 14px;
      height: 40px;
      margin: 0 20px;
      text-align: center;
      line-height: 40px;
    }
    .active {
      border-bottom: 2px solid var(--themeColor);
      color: #629bfb;
    }
  }
  .post-text {
    width: 100%;
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
        position: relative;

        .imgButton-tiitle {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .icon-picture {
          font-size: 20px;
        }
        .upload-img {
          width: 350px;
          border: 1px solid #ddd;
          position: absolute;
          padding: 15px;
          border-radius: 5px;
          display: flex;
          flex-wrap: wrap;

          .upImg {
            width: 100px;
            height: 100px;
            border-radius: 5px;
            border: 1px dashed #ddd;
            background-color: white;

            .title {
              font-size: 40px;
              font-weight: 600;
              color: #ddd;
              width: 100px;
              height: 100px;
              line-height: 100px;
              text-align: center;
            }

            input {
              opacity: 0;
              width: 100px;
              height: 100px;
              position: absolute;
              top: 15px;
              left: 15px;
            }
          }

          .img-item {
            display: flex;
            width: 100px;
            height: 100px;
            padding: 5px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }

            .deleteImg {
              font-size: 40px;
              font-weight: 600;
              display: none;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            &:hover {
              background-color: #7f7f7f;
              opacity: 0.8;
              transition: all 0.5s;
              .deleteImg {
                color: white;
                display: block;
              }
            }
          }
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

    .post-text-input {
      font-size: 24px;
      width: 100%;
      height: 100px;
      border: none;
    }
    // .rich-editor {
    // }
    .rich-publish {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: var(--themeColor);
      float: right;
      font-size: 16px;
      color: white;
    }
    &:after{
       content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
  }
}
</style>