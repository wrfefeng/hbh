<template>
  <div class="container">
    <div class="top">
      <slot></slot>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'orderInfoCase'
}
</script>

<style scoped lang="scss">
  @import url('../../common/style/index.scss');
  .container {
    width: 100%;
  }
  .top {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    background-color: #d8dde1;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin: 0;
    line-height: 40px;
    padding-left: 30px;
    color: #0c5da9;
  }
</style>
