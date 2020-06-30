<template>
  <div>
    <div class="bg-white">
      <div class="blog-title">
        title
      </div>
      <div class="blog-item">
        <div class="blog-tiem"> 发布时间：2020-2-2 20:6:66</div>
        <div class="blog-meta">
          <a-icon type="eye" /> 666阅读
          <a-icon type="heart" /> 666收藏
          <a-icon type="like" /> 66点赞
        </div>
      </div>
      <div class="blog-content">
        wenzhag 文章正文
        文章正文
        文章正文
        文章正文文章正文文章正文文章正文文章正文文章正文
      </div>
      <div class="blog-action">
        <div class="blog-like">
          <a-icon type="like" /> 点赞
        </div>
        <div class="blog-heart">
          <a-icon type="heart" />  收藏
        </div>

      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
      commentContentCount: 300,
      countShow: false
    }
  },
  watch: {
    content(newVal, oldVal) {
      if (this.content.length > 300) {
        this.content = this.content.substring(0, 300)
      }
      if (this.content.length > 0) {
        this.countShow = true
      } else {
        this.countShow = false
      }
      const newValLength = newVal.length
      const oldValLength = oldVal.length
      this.commentContentCount = this.commentContentCount - (newValLength - oldValLength)
    }
  }
}
</script>>
<style scoped>
.bg-white{
  background: #fff;
  padding: 40px 25px;
}
.blog-title{
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  line-height: 60px;
}
.blog-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.blog-content{
  margin-top:20px;
}
.blog-action{
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
}
</style>
