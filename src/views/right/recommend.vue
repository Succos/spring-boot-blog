<template>
  <div>
    <a-card title="推荐阅读" :head-style="headStyle" :body-style="bodyStyle" class="recomment-card ">

      <div class="blog-title">标题</div>
      <div class="blog-type">分类：<a-tag color="green">666</a-tag></div>
      <div class="blog-bottom">
        <div class="blog-time">2019-5-5</div>
        <div class="blog-meta">
          <a-icon type="eye" /> 666
          <a-icon type="heart" /> 666
          <a-icon type="like" /> 66
          <a-icon type="message" /> 66
        </div>
      </div>

      <div class="blog-title">标题</div>
      <div class="blog-type">分类：<a-tag color="green">666</a-tag></div>
      <div class="blog-bottom">
        <div class="blog-time">2019-5-5</div>
        <div class="blog-meta">
          <a-icon type="eye" /> 666
          <a-icon type="heart" /> 666
          <a-icon type="like" /> 66
          <a-icon type="message" /> 66
        </div>
      </div>

      <div class="blog-title">标题</div>
      <div class="blog-type">分类：<a-tag color="green">666</a-tag></div>
      <div class="blog-bottom">
        <div class="blog-time">2019-5-5</div>
        <div class="blog-meta">
          <a-icon type="eye" /> 666
          <a-icon type="heart" /> 666
          <a-icon type="like" /> 66
          <a-icon type="message" /> 66
        </div>
      </div>

      <div class="blog-title">标题</div>
      <div class="blog-type">分类：<a-tag color="green">666</a-tag></div>
      <div class="blog-bottom">
        <div class="blog-time">2019-5-5</div>
        <div class="blog-meta">
          <a-icon type="eye" /> 666
          <a-icon type="heart" /> 666
          <a-icon type="like" /> 66
          <a-icon type="message" /> 66
        </div>
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
      bodyStyle: {
        maxHeight: '530px',
        overflow: 'hidden'
      },
      recommendList: [] // 推荐阅读列表
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
.recomment-card {
  max-height: 500px;
  overflow: hidden;
  text-align: left;
}
.ant-card-bordered {
  border: none !important;

}

a {
  display: flex;
  flex-direction: column;
  color: #3e4149;
}

a:hover {
  color: #3e4149;
}

.blog-title {
  font-size: 16px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog-type {
  line-height: 40px;
}

.blog-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: #b8b8b8;
  margin-bottom: 2px;
}

</style>
