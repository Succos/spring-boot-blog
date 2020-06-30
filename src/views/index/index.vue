<template>
  <div>
    <div class="index-carousel">
      <a-carousel :after-change="onChange">
        <div><img class="carousel-image" src="@/assets/carousel.gif" alt=""></div>
        <div><img class="carousel-image" src="@/assets/carousel.gif" alt=""></div>
        <div><img class="carousel-image" src="@/assets/carousel.gif" alt=""></div>
      </a-carousel>
      <blog-list />
    </div>
  </div>
</template>
<script>
import BlogList from '@/views/blog/blog-list'
export default {
  components: {
    BlogList
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>
<style scoped>
.carousel-image{
  width: 100%;
  height: 100%;
}
</style>
