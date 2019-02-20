<template>
  <div class="container">
    <div class="top">
      <span class="single" :class="{'active': travelCategory === 0}" @click="switchTravleCategory(0)">单程</span>
      <span class="multiple" :class="{'active': travelCategory === 1}" @click="switchTravleCategory(1)">往返</span>
    </div>
    <div class="main cl">
      <div class="item fl cl">
        <div class="fl label">出发城市</div>
        <div class="fl">
          <input class="ipt" placeholder="南京" v-model="startCity" type="text">
        </div>
      </div>
      <div class="city-switch fl" @click="switchCity">切换</div>
      <div class="item fl cl">
        <div class="fl label">到达城市</div>
        <div class="fl">
          <input class="ipt" placeholder="北京" v-model="endCity" type="text">
        </div>
      </div>
      <div class="item fl cl">
        <div class="fl label">出发日期</div>
        <div class="fl">
          <!--<datepicker class="ipt"></datepicker>-->
          <input class="ipt" placeholder="2019-02-19" type="text">
        </div>
      </div>
      <div class="item fl cl">
        <div class="fl label">返程日期</div>
        <div class="fl">
          <input class="ipt" :disabled="travelCategory === 0" placeholder="2019-02-20" type="text">
        </div>
      </div>
      <div class="btn fr">重新查询</div>
    </div>
  </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker'
export default {
  name: 'queryComponent',
  components: {
    // Datepicker
  },
  data () {
    return {
      travelCategory: 0, // 0单程， 1 往返
      startCity: '成都',
      endCity: '石家庄'
    }
  },
  methods: {
    // 切换行程类型
    switchTravleCategory (param) {
      this.travelCategory = param
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
.container {
  box-shadow: 0px 3px 4px #bdbdbd;
  .top {
    height: 40px;
    line-height: 40px;
    background: #ddd;
    .single, .multiple {
      display: inline-block;
      padding: 0 35px;
      cursor: pointer;
      font-size: 14px;
    }
    .active {
      background: #fff;
      color: #23527c;
      border-top: 3px solid #d22120;
    }
  }
  .main {
    height: 60px;
    line-height: 60px;
    margin-top: 10px;
    padding: 0 20px;
    .item {
      width: 230px;
      height: 35px;
      line-height: 35px;
      border: 1px solid #ccc;
      margin-bottom: 20px;
      background: #fff;
      margin-right: 10px;
      border-radius: 3px;
      .label {
        width: 60px;
        border-right: 1px solid #ccc;
        line-height: 18px;
        height: 18px;
        margin-top: 9px;
        padding: 0 5px;
        font-size: 14px;
      }
      .ipt {
        width: 120px;
        height: 25px;
        line-height: 25px;
        border: none;
        outline: none;
        margin-top: 2px;
        /*border: 1px solid #000;*/
        padding-left: 20px;
        color: #666;
      }
    }
    .btn {
      width: 120px;
      background: #d22120;
      height: 35px;
      line-height: 35px;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
    .city-switch {
      height: 35px;
      line-height: 35px;
      margin-right: 10px;
      color: #d22120;
      cursor: pointer;
    }
  }
}
</style>
