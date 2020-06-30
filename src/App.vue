<template>
  <div id="app" class="main">
    <transition name="menu">
      <router-view />
    </transition>
  </div>
</template>
<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  background-color: #e5e5e5;
}
</style>
