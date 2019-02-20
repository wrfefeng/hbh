<template>
  <div class="container">
    <div class="topLine"></div>
    <div class="content">
      <slot></slot>
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
.container {
  box-shadow: 0px 3px 4px rgba(166, 166, 166, 0.22);
  .topLine {
    border-top: 3px solid #d22120;
  }
  .content {
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 18px;
    color: #2d4988;
  }
}
</style>
