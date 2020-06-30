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
    <div class="user-comment">
      <a-textarea v-model="content" placeholder="请输入评论内容：不超过300字" :rows="4" />

      <div class="comment-btn">
        <a-button type="primary">
          发表评论
        </a-button>
        <div v-show="countShow" class="content-button">
          <div class="content-count">
            还能输入{{ commentContentCount }}字符
          </div>
        </div>
      </div>

    </div>
    <div class="comment-bg">
      <div class="comment-header">\
        <img src="@/assets/header.gif" alt="" class="header-img">
      </div>
      <div class="comment-container">
        <div class="comment-nickname">昵称</div>
        <div class="comment-time">发表于 2020-2-14 11：</div>
        <div class="comment-content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容 </div>

      </div>
      <div class="comment-good"> <a-icon type="like" /> 66 点赞</div>
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
<style>
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
.comment-bg{
  text-align: left;
  background-color: #fff;
  margin-top: 15px;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-img{
  width: 100px;
  height: 100px;
  border: 5px solid #e5e5e5;
  border-radius: 50%;
}
.comment-container{
  width: 400px;
  display: flex;
  flex-direction: column;
}
.comment-nickname{
  font-weight: bold;
}
.comment-time{
  font-size: 12px;
  color: #9c9ea8;
}
.user-comment{
  margin-top: 15px;
  background: #fff;
  padding-bottom: 4px;
}
.comment-btn{
  margin: 15px;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 15px;
  align-items: center;
}
.comment-content{

}
</style>
