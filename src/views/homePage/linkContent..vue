<template>
  <div class="container cl">
    <div class="item fl">
      <img src="./渐变3.jpg" alt="">
    </div>
    <div class="item fl">
      <img src="./渐变2.jpg" alt="">
    </div>
    <div class="item fl">
      <img src="./渐变1.jpg" alt="">
    </div>
    <div class="item fl">
      <img src="./4445.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
  @import url('../../common/style/index.scss');
.container {
  padding: 5px 0;
  box-shadow: 0px 3px 4px rgba(166, 166, 166, 0.22);
  .item {
    width: 25%;
    box-sizing: border-box;
    padding: 0 5px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
