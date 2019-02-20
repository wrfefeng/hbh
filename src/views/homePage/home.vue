<template>
    <div class="homePage">
      <home-header></home-header>
      <carousel></carousel>
      <div class="main">
        <div class="title-item">
          <title-item>
            <div>促销与服务</div>
          </title-item>
        </div>
        <div class="serve-content">
          <server-content></server-content>
        </div>
        <div class="title-item">
          <title-item>
            <div>随心起航，快乐飞翔</div>
          </title-item>
        </div>
        <div class="linkContent">
          <link-content></link-content>
        </div>
        <div class="news-container cl">
          <div class="news-title fl">新闻</div>
          <div class="news-content fl">河北航空天津-温州-琼海航线顺利开航</div>
          <div class="news-more fr">查看更多</div>
        </div>
      </div>
      <div class="footer">
        <footer-content></footer-content>
      </div>
      <div class="dialog">
        <dialog-content></dialog-content>
      </div>
    </div>
</template>
<script>
import HomeHeader from '../../components/header/index.'
import Carousel from '../../components/carousel/index.'
import TitleItem from '../../components/titleItem/index.'
import ServerContent from './serverContent.'
import LinkContent from './linkContent.'
import FooterContent from './footer.'
import DialogContent from '../../components/dialog/index.'
export default {
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    Carousel,
    TitleItem,
    ServerContent,
    LinkContent,
    FooterContent,
    DialogContent
  }
}
</script>
<style scoped lang="scss">
  .homePage {
    position: relative;
  }
.main {
  width: 1140px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
  /*border: 1px solid #000;*/
  background: #fafafa;
  .serve-content {
    margin-top: 20px;
  }
  .title-item {
    margin-top: 20px;
  }
  .linkContent {
    margin-top: 20px;
  }
  .news-container {
    margin-top: 20px;
    box-shadow: 0px 3px 4px rgba(166, 166, 166, 0.22);
    height: 70px;
    line-height: 70px;
    padding: 5px 0;
    background: #fff;
    .news-title {
      padding: 0 15px;
      border-right: 1px solid #333;
      min-width: 60px;
    }
    .news-content {
      padding: 0 15px;
      color: #23527c;
      text-decoration: none;
      & {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .news-more {
      padding: 0 15px;
      color: #23527c;
      cursor: pointer;
    }
  }
}
  .footer {
    width: 100%;
    background: #f1f1f1;
    min-height: 80px;
  }
  .dialog {
    position: absolute;
    left: 0;
    right: 0;
    top: 200px;
    margin-left: auto;
    margin-right: auto;
    width: 1170px; /* 要设定宽度 */
    /*border: 1px solid #000;*/
    min-height: 400px;
  }
</style>
