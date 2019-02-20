<template>
  <div class="container cl">
    <div class="fl left">
      <div v-for="item in navList" :key="item.id" class="left-nav-item" @click="switchNav(item.id, item.path)" :class="{'active': item.id === currentIndex}">
        <div v-if="item.id === 0" class="icon-container order"></div>
        <div v-else-if="item.id === 1" class="icon-container zhiji"></div>
        <div v-else-if="item.id === 2" class="icon-container order dong"></div>
        <div v-else class="icon-container order tui"></div>
        <div class="nav-text">{{item.label}}</div>
      </div>
      <!--<div class="left-nav-item">-->
        <!--<div class="icon-container order"></div>-->
        <!--<div class="nav-text">机票预订</div>-->
      <!--</div>-->
      <!--<div class="left-nav-item active">-->
        <!--<div class="icon-container zhiji"></div>-->
        <!--<div class="nav-text">办理值机</div>-->
      <!--</div>-->
      <!--<div class="left-nav-item">-->
        <!--<div class="icon-container dong"></div>-->
        <!--<div class="nav-text">航班动态</div>-->
      <!--</div>-->
      <!--<div class="left-nav-item">-->
        <!--<div class="icon-container tui"></div>-->
        <!--<div class="nav-text">退改期</div>-->
      <!--</div>-->
    </div>
    <div class="fr right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        { id: 0, label: '机票预订', path: '/order' },
        { id: 1, label: '办理值机', path: '/check' },
        { id: 2, label: '航班动态', path: '/' },
        { id: 3, label: '退改期', path: '/' }
      ],
      currentIndex: 0
    }
  },
  methods: {
    switchNav (category, path) {
      this.currentIndex = category
      this.$router.push({
        path: path
      })
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  width: 450px;
  height: 370px;
  background: #fff;
  border-radius: 4px;
  .left {
    width: 100px;
    .left-nav-item {
      height: 92.5px;
      width: 100%;
      padding-top: 15px;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      .nav-text {
        padding: 10px 0;
        font-size: 14px;
      }
      .icon-container {
        width: 25px;
        height: 20px;
        background-image: url("../../assets/icon.png");
        margin-left: 38px;
        /*margin-top: 10px;*/
      }
      .order {
        background-position: -65px -251px;
      }
      .zhiji {
        background-position: -185px -251px;
      }
      .dong {
        background-position: -120px -251px;
      }
      .tui {
        background-position: -263px -251px;
      }
    }
    .active {
      background: rgb(252, 248, 245);
      opacity: 0.95;
    }
  }
  .right {
    width: 350px;
    background: rgb(252, 248, 245);
    opacity: 0.95;
    height: 100%;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
