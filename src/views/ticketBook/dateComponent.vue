<template>
  <div class="container cl">
    <div class="fl btn-arrow" @click="arrowSwitch(0)">《</div>
    <div class="fl date-item" :class="{'active': item.id === currentDate}" v-for="item in dateList" :key="item.id" @click="switchDate(item.id)">
      <div class="date-info">
        <span>{{item.week}}{{item.date}}</span>
      </div>
      <div class="price">¥{{item.price}}</div>
    </div>
    <div class="fl btn-arrow" @click="arrowSwitch(1)">》</div>
    <div class="fl price-calendar">价格日历</div>
  </div>
</template>

<script>
export default {
  name: 'dateComponent',
  data () {
    return {
      dateList: [
        { id: 0, week: '星期二', date: '02-19', price: 1120, isActive: false },
        { id: 1, week: '星期三', date: '02-20', price: 810, isActive: false },
        { id: 2, week: '星期四', date: '02-21', price: 820, isActive: false },
        { id: 3, week: '星期五', date: '02-22', price: 4310, isActive: false },
        { id: 4, week: '星期六', date: '02-23', price: 1790, isActive: false },
        { id: 5, week: '星期日', date: '02-24', price: 2350, isActive: false },
        { id: 6, week: '星期一', date: '02-25', price: 1120, isActive: false }
      ],
      currentDate: 1
    }
  },
  methods: {
    switchDate (param) {
      this.currentDate = param
    },
    arrowSwitch (category) {
      if (category === 0) {
        // 后移
        if (this.currentDate >= 1) {
          this.currentDate--
        }
      } else {
        if (this.currentDate <= 5) {
          this.currentDate++
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import url('../../common/style/index.scss');
  .container {
    /*height: 80px;*/
    /*line-height: 80px;*/
    background-color: #aebcc9;
    cursor: pointer;
    .btn-arrow {
      line-height: 80px;
      font-size: 20px;
      color: #fff;
      border-right: 1px solid #ccc;
      padding: 0 15px;
    }
    .date-item {
      height: 80px;
      text-align: center;
      /*line-height: 80px;*/
      width: 140px;
      font-size: 16px;
      color: #fff;
      border-right: 1px solid #ccc;
      .date-info {
        height: 40px;
        line-height: 40px;
      }
      .price {
        height: 40px;
        line-height: 40px;
      }
    }
    .price-calendar {
      line-height: 80px;
      padding-left: 10px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      text-align: center;
    }
    .active {
      background-color: #fff;
      color: #23527c;
    }
  }
</style>
