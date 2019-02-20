<template>
  <div class="container">
    <div class="label-info cl">
      <div class="label-info-item fl">航班</div>
      <div class="label-info-item fl">起飞</div>
      <div class="label-info-item fl">到达</div>
      <div class="label-info-item fl">飞行时间</div>
      <div class="label-info-item fl">餐食</div>
      <div class="label-info-item fl">最低报价</div>
    </div>
    <div class="table">
      <div v-for="item in travelData" :key="item.id">
        <div class="table-header cl">
          <div class="table-header-item fl">
            <div class="travel-h">{{item.hbNo.name}}</div>
            <div class="travel-j">{{item.hbNo.no}}</div>
          </div>
          <div class="table-header-item start fl">
            <div class="start-city">{{item.startInfo.city}}</div>
            <div class="start-time">{{item.startInfo.time}}</div>
            <div class="start-place">{{item.startInfo.place}}</div>
          </div>
          <div class="table-header-item fl">
            <div class="end-city">{{item.endInfo.city}}</div>
            <div class="end-time">{{item.endInfo.time}}</div>
            <div class="end-place">{{item.endInfo.place}}</div>
          </div>
          <div class="table-header-item fl">
            <div class="duration">{{item.duration}}</div>
          </div>
          <div class="table-header-item fl">
            <div class="isFood">
              <span v-if="item.isFood">有餐</span>
              <span v-else>无餐</span>
            </div>
          </div>
          <div class="table-header-item fl">
            <div class="travel-price">¥{{item.price}}</div>
          </div>
        </div>
        <div class="table-body cl">
          <div class="table-body-row cl" v-for="val in item.seatList" :key="val.id">
            <div class="fl table-body-item">{{val.category}}</div>
            <div class="fl table-body-item">{{val.discount}}折 | 退改签规定 | 行李额{{val.baggage}}KG</div>
            <div class="fl table-body-item">机场建设费用: {{val.placePrice}}元</div>
            <div class="fl table-body-item">燃油附加费: {{val.oilPrice}}元</div>
            <div class="fl table-body-item">¥{{val.price}}（可获{{val.point}}积分）</div>
            <div class="fl table-body-item residual-ticket">
              <span v-if="val.num < 10">剩余{{val.num}}座</span>
              <span v-else>余票充足</span>
            </div>
            <div class="fl table-body-item">
              <button @click="routeInfo">预订</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from './data'
export default {
  name: 'travelListComponent',
  data () {
    return {
      travelData: Data
    }
  },
  methods: {
    routeInfo () {
      if (localStorage.getItem('HBHUserCode')) {
        this.$router.push({
          path: '/orderInfo'
        })
      } else {
        window.alert('请先登录')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .table-header {
    box-shadow: 0 3px 3px #ddd;
  }
  .label-info-item, .table-header-item {
    /*border: 1px solid #ccc;*/
    box-sizing: border-box;
    text-align: center;
    color: #999;
    height: 34px;
    line-height: 34px;
    font-size: 16px;
    text-align: center;
    &:first-child {
      width: 160px;
    }
    &:nth-child(2) {
      width: 170px;
    }
    &:nth-child(3) {
      width: 180px;
    }
    &:nth-child(4) {
      width: 260px;
    }
    &:nth-child(5) {
      width: 240px;
    }
    &:nth-child(6) {
      width: 160px;
    }
  }
  .table-header-item {
    line-height: 22.5px;
    font-size: 16px;
    .duration,.isFood {
      line-height: 80px;
      font-size: 16px;
      font-weight: 700;
      color: #666;
    }
    .travel-price {
      font-size: 16px;
      font-weight: 700;
      color: #d22120;
      line-height: 80px;
    }
  }
  .table-header {
    height: 80px;
    background-color: #f0f5f8;
    .start-city, .end-city {
      font-weight: 700;
      color: #666;
      margin-top: 5px;
      font-size:14px ;
    }
    .start-time, .end-time {
      font-weight: 700;
      font-size: 16px;
      color: #d22120;
      margin-top: 5px;
    }
    .start-place, .end-place {
      font-size: 14px;
      margin-top: 5px;
    }
  }
  .travel-h {
    color: #666;
  }
  .travel-h, .travel-j {
    margin-top: 10px;
  }
  .table-body-row {
    line-height: 40px;
    border-bottom: 1px dotted #ccc;
  }
  .residual-ticket {
    color: #d22120 !important;
  }
  .table-body-item {
    width: 14.28%;
    text-align: center;
    box-sizing: border-box;
    /*border: 1px solid #ccc;*/
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(6), &:nth-child(7) {
      width: 10%;
    }
  }
}
</style>
