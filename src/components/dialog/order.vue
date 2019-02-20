<template>
  <div class="content">
    <div class="top" @click="switchCity">
      切换城市
    </div>
    <div class="item cl">
      <div class="fl label">出发城市</div>
      <div class="fl">
        <input class="ipt" placeholder="城都" v-model="startCity" type="text">
      </div>
    </div>
    <div class="item cl">
      <div class="fl label">到达城市</div>
      <div class="fl">
        <input class="ipt" placeholder="石家庄" v-model="endCity" type="text">
      </div>
    </div>
    <div class="item">
      <div class="fl label">出发日期</div>
      <div class="fl">
        <input class="ipt" placeholder="2019-02-18" type="text">
      </div>
    </div>
    <div class="item">
      <div class="fl label">返程日期</div>
      <div class="fl">
        <input class="ipt" placeholder="2019-02-19" type="text">
      </div>
    </div>
    <div class="item btn" @click="route">立即查询</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      startCity: '成都',
      endCity: '石家庄'
    }
  },
  methods: {
    route () {
      this.$router.push('/ticketBook')
    },
    switchCity () {
      let city = this.startCity
      this.startCity = this.endCity
      this.endCity = city
    }
  }
}
</script>
<style scoped lang="scss">
  @import url('../../common/style/index.scss');
.content {
  .top {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: right;
    color: #f00;
    cursor: pointer;
  }
  .item {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    background: #fff;
    .label {
      width: 60px;
      border-right: 1px solid #ccc;
      line-height: 18px;
      height: 18px;
      margin-top: 9px;
      padding: 0 15px;
      font-size: 14px;
    }
    .ipt {
      height: 25px;
      line-height: 25px;
      border: none;
      outline: none;
      /*border: 1px solid #000;*/
      padding-left: 20px;
      color: #666;
    }
  }
  .btn {
    width: 140px;
    text-align: center;
    border-radius: 4px;
    margin-left: 170px;
    color: #fff;
    background: #d22120;
    border: none;
    cursor: pointer;
  }
}
</style>
