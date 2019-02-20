<template>
  <div class="container">
    <div class="cl nav-container">
      <div
        class="fl nav-list"
        @click="navHandle(item.id)"
        v-for="item in navList" :key="item.id">
        <div class="nav-text">
          {{item.label}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        { id: 0, label: '首页' },
        { id: 1, label: '预定服务' },
        { id: 2, label: '冀鹰会员' },
        { id: 3, label: '旅行贴士' }
      ]
    }
  },
  methods: {
    navHandle (param) {
      if (!param) {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped lang="scss">
  @import url('../../common/style/index.scss');
  .container {
    width: 100%;
    font-size: 14px;
    background: #d22120;
    .nav-container {
      max-width: 1140px;
      height: 50px;
      /*line-height: 50px;*/
      /*background: #d22120;*/
      margin: 0 auto;
      .nav-list {
        box-sizing: border-box;
        width: 25%;
        text-align: center;
        border-right: 1px solid #fff;
        &:last-child {
          border-right: none;
        }
        .nav-text {
          box-sizing: border-box;
          /*margin-top: 10px;*/
          padding-top: 5px;
          height: 40px;
          margin-top: 10px;
          margin-left: 30px;
          margin-right: 30px;
          color: #fff;
          &:hover {
            background: #fff;
            color: #d22120;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
