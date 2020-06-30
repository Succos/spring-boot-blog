<template>
  <div id="app" class="main">
    <transition name="menu">
      <nav-bar v-show="show" class="menu-container" />
    </transition>

    <div class="main-container">
      <div class="left-container">
        <router-view />
      </div>
      <div class="right-info">
        <right />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/views/navbar/navbar'
import Right from '@/views/right/index'
export default {
  components: {
    NavBar,
    Right
  },
  data() {
    return {
      current: ['mail'],
      show: false
    }
  },
  created() {
    this.mouseScroll()
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) { // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    watchScroll(e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      }
    }

  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.main {
  background-color: #e5e5e5;
}
.main-container {
  width: 80%;
  /*background: pink;*/
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.menu-container{
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.menu-enter-active, .menu-leave-active {
  transition: opacity .5s;
  transition: all .8s ease;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform:rotateY(-70px);
  opacity: 0;
}

.left-container {
  width: 70%;
  /*background: green;*/
  padding: 0 10px;
}
.right-info {
  /*background: blue;*/
  width: 30%;
  padding: 0 10px;
}
</style>
