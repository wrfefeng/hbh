<template>
  <div class="container">
    <div class="title-container cl">
      <div class="icon-logo fl">
      </div>
      <div class="list fr">
        <div class="my-order" @click="route">我的订单</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    route () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
  @import url('../../common/style/index.scss');
  .container {
    width: 100%;
    font-size: 12px;
    background: #fff;
    .title-container {
      max-width: 1140px;
      height: 70px;
      line-height: 70px;
      margin: 0 auto;
      .icon-logo {
        /*border: 1px solid #000;*/
        width: 240px;
        height: 70px;
        background-image: url('./icon.png');
        background-position: -40px -37px;
        cursor: pointer;
      }
      .list {
        .my-order {
          cursor: pointer;
          color: #d22120;
        }
      }
    }
  }
</style>
