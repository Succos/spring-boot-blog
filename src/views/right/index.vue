<template>

  <div class="right-box">
    <my-back />
    <recommend />
    <Link />
    <Music />

  </div>

</template>
<script>
import MyBack from './my-back'
import recommend from './recommend'
import Link from './link'
import Music from './music'
export default {
  components: {
    MyBack,
    recommend,
    Link,
    Music
  }
}
</script>
<style scoped>
.right-box{
  width: 100%;
}
</style>
