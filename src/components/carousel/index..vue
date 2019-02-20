<template>
  <div class="carousel-container">
    <img src="./1.jpg" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      src: '',
      carouselList: [
        {
          text: '第一张图片',
          src: './1.jpg'
        },
        {
          text: '第二张图片',
          src: './2.jpg'
        },
        {
          text: '第三张图片',
          src: './3.jpg'
        }
      ],
      currentIndex: 0,
      carouselTimer: null
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .carousel-container {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
</style>
