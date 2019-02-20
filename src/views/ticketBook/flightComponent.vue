<template>
  <div class="container">
    <div class="base-info cl">
      <div class="fl base-info-item city">去程：成都 - 石家庄</div>
      <div class="fl base-info-item date">航班日期: 2019-02-20</div>
      <div class="fr base-info-item price">公布价：¥1670</div>
    </div>
    <div class="date-info"></div>
    <div class="travel-info"></div>
    <div class="travel-list"></div>
  </div>
</template>

<script>
export default {
  name: 'flightComponent'
}
</script>

<style scoped lang="scss">
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
</style>
