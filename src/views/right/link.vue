<template>
  <div>
    <a-card title="友情链接" :head-style="headStyle">
      <div class="link-container">
        <a>百度</a>
        <a>百度</a>
        <a>百度</a>
        <a>百度</a>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headStyle: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '15px',
        borderLeft: '5px solid #409eff'
      },
      linkList: [] // 友情链接列表
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
.link-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.link-container a {
  font-size: 24px;
  min-width: 60px;
  margin-right: 15px;
}
</style>
