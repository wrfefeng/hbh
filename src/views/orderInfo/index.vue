<template>
  <div class="container">
    <home-header></home-header>
    <div class="main">
      <div class="steps">
        <steps></steps>
      </div>
      <div class="travel-info">
        <order-info-case>
          <div>航班信息</div>
        </order-info-case>
        <div class="travel-info-main cl">
          <div class="fl travel-info-item travel-info-icon">
            <div class="icon"></div>
          </div>
          <div class="fl travel-info-item travel-info-address">
            <div class="cl">
              <span class="start-city">成都</span>
              <span class="fly-icon"></span>
              <span class="end-city">石家庄</span>
            </div>
            <div class="no">[直飞]NS3210  738</div>
          </div>
          <div class="fl travel-info-item travel-info-time">
            <div class="start-time">
              <span>2019-02-20 21:05   双流机场T2</span>
            </div>
            <div class="end-time">
              <span>2019-02-20 23:20   正定机场T2</span>
            </div>
          </div>
          <div class="fl travel-info-item travel-info-duration">
            <div class="start-time">
              <span>2小时15分钟</span>
            </div>
            <div class="end-time">
              <span>有餐</span>
            </div>
          </div>
          <div class="fr travel-info-item travel-info-price">
            <div class="price">¥4130</div>
            <div class="notice">退改签规定</div>
          </div>
        </div>
      </div>
      <div class="pay-info">
        <order-info-case>
          <div>支付信息详情</div>
        </order-info-case>
        <div class="pay-info-header cl">
          <div class="header-item fl">保险费用</div>
          <div class="header-item fl">其他费用</div>
          <div class="header-item fl">机票费用</div>
          <div class="header-item fl">总计</div>
        </div>
        <div class="pay-info-body cl">
          <div class="pay-body-item fl">¥0</div>
          <div class="pay-body-item fl">¥50</div>
          <div class="pay-body-item fl">¥4130</div>
          <div class="pay-body-item fl">¥4180</div>
        </div>
      </div>
      <div class="cl">
        <div class="fl left">
          <div class="common-user">
            <order-info-case>
              <div>常用乘机人</div>
            </order-info-case>
            <div>随便写一个吧</div>
          </div>
          <div class="user-info">
            <order-info-case>
              <div class="cl">
                <div class="fl">乘机人信息</div>
                <div class="fr mr-10">
                  <span>旅客人数：</span>
                  <span>成人×{{passengerNum.adult}} </span>
                  <span>儿童×{{passengerNum.child}} </span>
                  <span>婴儿×{{passengerNum.baby}} </span>
                  <span>军残×{{passengerNum.soldier}} </span>
                  <span>警残×{{passengerNum.police}} </span>
                </div>
                <div class="fr mr-30 year">
                  <span>12岁≤成人</span>
                  <span>2岁≤儿童＜12岁</span>
                  <span>14天＜婴儿＜2岁</span>
                </div>
              </div>

            </order-info-case>
            <div class="user-info-main">
              <div class="btn-container text-right">
                <button class="mr-10" @click="passengerAdd(3)" :disabled="passengerList.length > 8">添加警残</button>
                <button class="mr-10" @click="passengerAdd(4)" :disabled="passengerList.length > 8">添加军残</button>
                <button class="mr-10" @click="passengerAdd(0)" :disabled="passengerList.length > 8">添加成人</button>
                <button class="mr-10" @click="passengerAdd(1)" :disabled="passengerList.length > 8">添加儿童</button>
                <button class="mr-10" @click="passengerAdd(2)" :disabled="passengerList.length > 8">添加婴儿</button>
              </div>
              <div class="info-container cl" v-for="(item, index) in passengerList" :key="item.id">
                <div class="fl col-1">
                  {{item.categoryName}}
                </div>
                <div class="fl col-2">
                  <div class="cl user-info-main-item">
                    <div class="user-name-label fl">姓名</div>
                    <div class="user-name-text fl">
                      <input type="text" class="ipt">
                    </div>
                  </div>
                  <div class="cl user-info-main-item">
                    <div class="user-tel-label fl">电话</div>
                    <div class="user-tel-text fl">
                      <input type="text" class="ipt">
                    </div>
                  </div>
                </div>
                <div class="fl col-3">
                  <div class="cl user-info-main-item">
                    <div class="user-no-label fl">证件</div>
                    <div class="user-no-text fl">
                      <select class="ipt">
                        <option value="0">身份证</option>
                        <option value="0">护照</option>
                        <option value="0">港澳台居住证、其他</option>
                      </select>
                    </div>
                  </div>
                  <div class="cl user-info-main-item">
                    <div class="user-card-label fl">常客卡号</div>
                    <div class="user-card-text fl">
                      <select class="ipt">
                        <option value="0">选择航司</option>
                        <option value="1">河北航空</option>
                        <option value="0">厦门航空</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="fl col-4">
                  <input type="text" class="ipt">
                  <div class="delete-btn">
                    <button class="btn" @click="childrenDeleteJude(index, item.category, item.id)">删除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="handle-container">
            <button>下一步</button>
          </div>
        </div>
        <div class="fr right">
          <order-info-case>
            支付信息详情
          </order-info-case>
          <div class="ticket-module">
            <div class="title">机票</div>
            <div class="cl item">
              <div class="label fl">成人{{passengerNum.adult}}位</div>
              <div class="fr text">+¥ {{passengerNum.adult * basePrice}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">儿童{{passengerNum.child}}位</div>
              <div class="fr text">+¥ {{passengerNum.child * basePrice * 0.5}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">婴儿{{passengerNum.baby}}位</div>
              <div class="fr text">+¥ {{passengerNum.baby * basePrice * 0}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">警残{{passengerNum.police}}位</div>
              <div class="fr text">+¥ {{passengerNum.police * basePrice * 0.2}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">军残{{passengerNum.soldier}}位</div>
              <div class="fr text">+¥ {{passengerNum.soldier * basePrice * 0.2}}</div>
            </div>
          </div>
          <div class="text-right ticketPrice">= ¥ {{priceSum.ticketPrice}}</div>
          <div class="ticket-module">
            <div class="title">航空保险</div>
            <div class="cl item">
              <div class="label fl">成人{{passengerNum.adult}}位</div>
              <div class="fr text">+¥ {{passengerNum.adult * baoPrice}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">儿童{{passengerNum.child}}位</div>
              <div class="fr text">+¥ {{passengerNum.child * baoPrice}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">婴儿{{passengerNum.baby}}位</div>
              <div class="fr text">+¥ {{passengerNum.child * baoPrice * 0}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">警残{{passengerNum.police}}位</div>
              <div class="fr text">+¥ {{passengerNum.police * baoPrice * 0.2}}</div>
            </div>
            <div class="cl item">
              <div class="label fl">军残{{passengerNum.soldier}}位</div>
              <div class="fr text">+¥ {{passengerNum.soldier * baoPrice * 0.2}}</div>
            </div>
          </div>
          <div class="text-right ticketPrice">= ¥ {{priceSum.baoPrice}}</div>
          <div class="totalPrice cl">
            <div class="label fl">总计</div>
            <div class="num fr">=¥ {{priceSum.totalPrice}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <footer-content></footer-content>
    </div>
  </div>
</template>

<script>
import HomeHeader from '../../components/header/index.'
import Steps from '../../components/steps/index'
import OrderInfoCase from '../../components/orderInfoCase/index'
import { randomStr } from '../../common/script/util'
import FooterContent from '../homePage/footer.'
export default {
  name: 'orderInfo',
  data () {
    return {
      adult: 0,
      child: 0,
      baby: 0,
      police: 0,
      soldier: 0,
      passengerList: [
      ],
      basePrice: 2650,
      baoPrice: 50,
      otPrice: 0
    }
  },
  created () {
  },
  computed: {
    passengerNum: function () {
      let obj = {
        adult: 0,
        child: 0,
        baby: 0,
        police: 0,
        soldier: 0
      }
      for (let i = 0; i < this.passengerList.length; i++) {
        switch (this.passengerList[i].category) {
          case 0:
            obj.adult++
            break
          case 1:
            obj.child++
            break
          case 2:
            obj.baby++
            break
          case 3:
            obj.police++
            break
          default:
            obj.soldier++
        }
      }
      return obj
    },
    priceSum: function () {
      let obj = {}
      obj.ticketPrice = (this.passengerNum.adult + this.passengerNum.child * 0.5 + this.passengerNum.police * 0.2 + this.passengerNum.soldier * 0.2) * this.basePrice
      obj.baoPrice = (this.passengerNum.adult + this.passengerNum.child * 0.5 + this.passengerNum.police * 0.2 + this.passengerNum.soldier * 0.2) * this.baoPrice
      obj.otPrice = (this.passengerNum.adult + this.passengerNum.child * 0.5 + this.passengerNum.police * 0.2 + this.passengerNum.soldier * 0.2) * this.otPrice
      obj.totalPrice = obj.ticketPrice + obj.baoPrice + obj.otPrice
      return obj
    }
  },
  components: {
    HomeHeader,
    Steps,
    OrderInfoCase,
    FooterContent
  },
  methods: {
    passengerAdd (category) {
      if (this.passengerList.length <= 8) {
        switch (category) {
          case 0: // 成人
            this.adult++
            this.adultAdd()
            break
          case 1: // 儿童
            this.child++
            this.childrenAddJude(1)
            break
          case 2: // 婴儿
            this.baby++
            this.childrenAddJude(2)
            break
          case 3: // 警残
            this.police++
            this.policeAdd()
            break
          case 4: // 军残
            this.soldier++
            this.soldierAdd()
            break
        }
      }
    },
    adultAdd () {
      let obj = {
        id: randomStr(1, 16, 24),
        categoryName: '成人',
        category: 0,
        list: []
      }
      this.passengerList.push(obj)
      // 移除所有军残和警残
      for (let i = 0; i < this.passengerList.length; i++) {
        if (this.passengerList[i].category === 3 || this.passengerList[i].category === 4) {
          this.passengerList.splice(i, 1)
          i--
        }
      }
    },
    childAdd () {
      let obj = {
        id: randomStr(1, 12, 24),
        categoryName: '儿童',
        category: 1
      }
      this.passengerList.push(obj)
    },
    babyAdd () {
      let obj = {
        id: randomStr(1, 12, 24),
        categoryName: '婴儿',
        category: 2
      }
      this.passengerList.push(obj)
      return obj.id
    },
    policeAdd () {
      let obj = {
        id: randomStr(1, 12, 24),
        categoryName: '警残',
        category: 3
      }
      this.passengerList.push(obj)
      for (let i = 0; i < this.passengerList.length; i++) {
        if (this.passengerList[i].category === 0 || this.passengerList[i].category === 1 || this.passengerList[i].category === 2) {
          this.passengerList.splice(i, 1)
          i--
        }
      }
    },
    soldierAdd () {
      let obj = {
        id: randomStr(1, 12, 24),
        categoryName: '军残',
        category: 4
      }
      this.passengerList.push(obj)
      for (let i = 0; i < this.passengerList.length; i++) {
        if (this.passengerList[i].category === 0 || this.passengerList[i].category === 1 || this.passengerList[i].category === 2) {
          this.passengerList.splice(i, 1)
          i--
        }
      }
    },
    // 添加儿童婴儿判断
    childrenAddJude (category) {
      // category为1，添加儿童
      // category为2，添加婴儿
      if (category === 2) { // 婴儿
        for (let i = 0; i < this.passengerList.length; i++) {
          if (this.passengerList[i].category === 0 && (this.passengerList[i].list.length === 0 || (this.passengerList[i].list.length === 1 && this.passengerList[i].list[0].category === 1))) {
            let id = randomStr(1, 12, 24)
            let obj = {
              id: id,
              categoryName: '婴儿',
              category: 2
            }
            this.passengerList.push(obj)
            this.passengerList[i].list.push(obj)
            break
          }
        }
      } else { // 儿童
        for (let i = 0; i < this.passengerList.length; i++) {
          if (this.passengerList[i].category === 0 && this.passengerList[i].list.length <= 1) {
            let id = randomStr(1, 12, 24)
            let obj = {
              id: id,
              categoryName: '儿童',
              category: 1
            }
            this.passengerList.push(obj)
            this.passengerList[i].list.push(obj)
            break
          }
        }
      }
    },
    // 删除乘客
    childrenDeleteJude (index, category, id) {
      // category为1，删除儿童
      // category为2，删除婴儿
      // 如果要删除成人，则需要判断孩子儿童携带情况
      if (category === 0) {
        this.passengerList.splice(index, 1)
      } else {
        // 如果删除孩子婴儿，则需要判断其与成人关联情况
        this.passengerList.splice(index, 1)
        for (let i = 0; i < this.passengerList.length; i++) {
          if (this.passengerList[i].category === 0) {
            for (let j = 0; j < this.passengerList[i].list.length; j++) {
              if (this.passengerList[i].list[j].id === id) {
                this.passengerList[i].list.splice(j, 1)
              }
            }
          }
        }
      }
    }
    // // 删除乘客
    // deletePassenger (index, category, id) {
    //   console.log(index, category, id)
    // }
  }
}
</script>

<style scoped lang="scss">
  @import url('../../common/style/index.scss');
  .container {
  }
  .main {
    box-sizing: border-box;
    padding: 10px;
    width: 1170px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #fafafa;
  }
  .steps {
    width: 960px;
    margin: 0 auto;
  }
  .travel-info {
    min-height: 120px;
    box-shadow: 0 3px 3px #bdbdbd;
  }
  .travel-info-item {
    /*border: 1px solid #ccc;*/
    box-sizing: border-box;
    text-align: center;
    &:first-child {
      width: 15%;
    }
    &:nth-child(2) {
      width: 25%;
    }
    &:nth-child(3) {
      width: 20%;
    }
    &:nth-child(4) {
      width: 20%;
    }
    &:last-child {
      width: 20%;
    }
    .icon {
      width: 40px;
      height: 40px;
      /*border: 1px solid #ccc;*/
      margin: 18px auto;
      background-image: url("./ticketbookicon.png");
      background-position: -20px -214px;
    }
    .start-city, .end-city {
      display: inline-block;
      font-weight: 700;
    }
  }
  .travel-info-address {
    margin-top: 15px;
    .fly-icon {
      display: inline-block;
      width: 30px;
      height: 20px;
      /*border: 1px solid #ccc;*/
      background-image: url("./ticketbookicon.png");
      background-position: -26px -270px;
      margin: 0 20px;
      vertical-align: bottom;
    }
    div {
      vertical-align: top;
    }
    .no {
      margin-top: 15px;
    }
  }
  .travel-info-time, .travel-info-duration {
    padding-top: 5px;
    .start-time, .end-time {
      margin-top: 15px;
    }
  }
  .travel-info-price {
    .price {
      font-size: 20px;
      font-weight: 700;
      color: #d22120;
      margin-top: 15px;
    }
    .notice {
      color: #23527c;
      margin-top: 15px;
      cursor: pointer;
    }
  }
  .pay-info {
    margin-top: 15px;
    box-sizing: border-box;
    min-height: 120px;
    box-shadow: 0 3px 3px #bdbdbd;
    padding-bottom: 1px;
  }
  .pay-info-header {
    background-color: #adbcc8;
    height: 30px;
    line-height: 30px;
    margin: 15px 15px 0 15px;
    border: 1px solid #ccc;
    .header-item {
      width: 25%;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
      color: #fff;
      text-align: center;
    }
  }
  .pay-info-body {
    background-color: #fff;
    height: 30px;
    line-height: 30px;
    margin: 0 15px 23px 15px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .pay-body-item {
    width: 25%;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    color: #d22120;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  .common-user {
    margin-top: 15px;
    box-shadow: 0 3px 3px #bdbdbd;
    min-height: 80px;
  }
  .user-info {
    margin-top: 15px;
    .year {
      color: #666;
    }
    box-sizing: border-box;
    .user-info-main {
      min-height: 80px;
      background-color: #fff;
      padding: 15px;
      box-sizing: border-box;
    }
  }
  .btn-container {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .info-container {
    margin-top: 15px;
  }
  .col-1 {
    width: 150px;
    min-height: 50px;
    /*border: 1px solid #ccc;*/
    margin-right: 5px;
  }
  .col-2, .col-3 {
    width: 200px;
    min-height: 50px;
    /*border: 1px solid #ccc;*/
    margin-right: 5px;
  }

  .col-4 {
    width: 190px;
    min-height: 50px;
    padding: 8px;
    /*border: 1px solid #ccc;*/
  }
  .info-container {
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .user-info-main-item {
    line-height: 40px;
    height: 40px;
  }
  .user-name-label, .user-tel-label, .user-no-label, .user-card-label {
    width: 70px;
    text-align: right;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .ipt {
    /*display: block;*/
    /*!*width: 100%;*!*/
    /*height: 14px;*/
    /*padding: 6px 12px;*/
    /*font-size: 14px;*/
    /*line-height: 1.42857143;*/
    /*color: #555;*/
    /*background-color: #fff;*/
    /*background-image: none;*/
    /*border: 1px solid #ccc;*/
    /*border-radius: 4px;*/
    /*-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);*/
    /*box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);*/
    /*-webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;*/
    /*-o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;*/
    /*transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;*/
    width: 120px;
  }

  .delete-btn {
    text-align: right;
    margin-top: 15px;
    .btn {
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -ms-touch-action: manipulation;
      touch-action: manipulation;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      background-color: #d22121;
      color: #fff;
    }
  }
  .left {
    width: 870px;
  }
  .right {
    margin-top: 15px;
    min-width: 250px;
    min-height: 600px;
    /*border: 1px solid #ccc;*/
    background-color: #fff;
    box-shadow: 0 3px 3px #bdbdbd;
    color: #666;
  }
  .ticket-module {
    .title {
      font-size: 14px;
      padding: 15px 20px;
      /*border: 1px solid #ccc;*/
    }
    .item {
      margin: 0 30px;
      padding: 7px 15px;
      font-size: 14px;
      box-sizing: border-box;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      .text {
        color: #999;
      }
    }
  }
  .ticketPrice {
    padding: 10px;
    margin-right: 30px;
    color: #999;
  }
  .totalPrice {
    margin-top: 30px;
    font-size: 16px;
    /*font-weight: 700;*/
    padding: 0 30px;
    .num {
      color: #d22120;
    }
  }
  .handle-container {
    text-align: center;
    background-color: #fff;
    padding: 30px 0;
  }
  .footer {
    width: 100%;
    background: #f1f1f1;
    min-height: 80px;
  }
</style>
