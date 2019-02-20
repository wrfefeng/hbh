<template>
  <div class="content">
    <div class="item cl">
      <div class="fl label">姓名</div>
      <div class="fl">
        <input class="ipt" placeholder="姓名" type="text">
      </div>
    </div>
    <div class="item cl">
      <div class="fl label">证件类型</div>
      <div class="fl">
        <input class="ipt" placeholder="身份证" type="text">
      </div>
    </div>
    <div class="item">
      <div class="fl label">证件号码</div>
      <div class="fl">
        <input class="ipt" placeholder="1515140910" type="text">
      </div>
    </div>
    <div class="item">
      <div class="fl label">手机号</div>
      <div class="fl">
        <input class="ipt" placeholder="" type="text">
      </div>
    </div>
    <div>我已阅读并接受《安全运输规定》《开通城市》《服务协议》《值机常见问题》</div>
    <div class="item btn">办理值机</div>
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
  .content {
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
