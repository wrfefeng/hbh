<template>
  <div class="ticketBook">
    <home-header></home-header>
    <div class="main">
      <div class="steps">
        <steps></steps>
      </div>
      <div class="query">
        <query-component></query-component>
      </div>
      <div class="flight-info">
        <div class="base-info cl">
          <div class="fl base-info-item city">去程：成都 - 石家庄</div>
          <div class="fl base-info-item date">航班日期: 2019-02-20</div>
          <div class="fr base-info-item price">公布价：¥1670</div>
        </div>
        <div class="date-info">
          <date-component></date-component>
        </div>
        <div class="travel-info"></div>
        <div class="travel-list">
          <travel-list-component></travel-list-component>
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
import QueryComponent from './queryComponent'
// import FlightInfo from './flightComponent'
import dateComponent from './dateComponent'
import travelListComponent from './travelListComponent'
import FooterContent from '../homePage/footer.'
export default {
  name: 'ticketBook',
  components: {
    HomeHeader,
    Steps,
    QueryComponent,
    dateComponent,
    travelListComponent,
    FooterContent
    // FlightInfo
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import url('../../common/style/index.scss');
  .ticketBook {
  }
.main {
  width: 1170px;
  margin: 0 auto;
  min-height: 500px;
  padding: 10px;
  background: #fafafa;

  .steps {
    width: 960px;
    margin: 0 auto;
  }

  .query, .flight-info {
    margin-top: 10px;
  }

  .base-info {
    width: 100%;
    box-sizing: border-box;
    height: 45px;
    line-height: 45px;
    padding: 0 25px;
    background-color: #d8d8d8;

    .base-info-item {
      color: #23527c;
      font-size: 16px;
    }

    .city {
      width: 25%;
    }
  }
}
  .footer {
    width: 100%;
    background: #f1f1f1;
    min-height: 80px;
  }
</style>
