<template>
  <div class="container cl">
    <div class="fl left cl">
      <div class="fl left-item">
        <div class="title">关于我们</div>
        <div class="text">公司简介</div>
        <div class="text">新闻资讯</div>
        <div class="text">人才招聘</div>
        <div class="text">货运服务</div>
      </div>
      <div class="fl left-item">
        <div class="title">客户服务</div>
        <div class="text">常见问题</div>
        <div class="text">购票服务</div>
        <div class="text">地面服务</div>
        <div class="text">运输服务</div>
      </div>
      <div class="fl left-item">
        <div class="title">友情链接</div>
        <div class="text">厦门航空</div>
      </div>
    </div>
    <div class="fl right">
      <div class="concat">联系我们</div>
      <div class="address">公司地址：石家庄正定国际机场</div>
      <div class="tel">24小时订票热线：0311-96699</div>
      <div class="advice">意见与建议</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
  @import url('../../common/style/index.scss');
  .container {
    max-width: 1140px;
    margin: 0 auto;
    background: #f1f1f1;
    padding: 20px 0;
    .left {
      width: 70%;
      .left-item {
        margin-right: 30px;
        .title {
          border-bottom: 1px solid #ccc;
          padding: 5px;
          margin-bottom: 10px;
        }
        .text {
          padding: 5px;
          color: #999;
          &:hover {
            cursor: pointer;
            color: #23527c;
            text-decoration: underline;
          }
        }
      }
    }
    .right {
      width: 30%;
      .concat {
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        margin-bottom: 15px;
      }
      .concat, .address, .advice, .tel {
        color: #999;
        padding: 5px;
      }
      .advice:hover {
        cursor: pointer;
        color: #23527c;
        text-decoration: underline;
      }
    }
  }
</style>
