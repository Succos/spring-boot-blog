<template>
  <div>
    <div class="button-container">

      <div class="button-text">{{ name }}</div>
      <div class="button-menu">
        <a-menu v-model="current" mode="horizontal" @click="changeSort">
          <a-menu-item key="createdTime">
            最新
          </a-menu-item>
          <a-menu-item key="blogGoods">
            点赞最多
          </a-menu-item>
          <a-menu-item key="blogComment">
            评论最多
          </a-menu-item>
          <a-menu-item key="blogRead">
            阅读最多
          </a-menu-item>
          <a-menu-item key="blogCollection">
            收藏最多
          </a-menu-item>
        </a-menu>
      </div>
    </div>

    <div class="blog-list-container">
      <a-card :body-style="blogBodyStyle" class="blog-card">
        <div class="blog-main">
          <div class="blog-image">
            <img class="blog-cover">
          </div>
          <div class="blog-container">
            <router-link to="/info/1">

              <div class="blog-title">标题</div>
              <div class="blog-comment">备注描述</div>
              <div class="blog-bottom">
                <div class="blog-type">
                  分类：<a-tag color="green">java</a-tag>
                </div>
                <div class="blog-meta">
                  <div class="blog-time">2018-6 20:30</div>
                  <div class="blog-other">
                    <a-icon type="eye" /> 20
                    <a-icon type="heart" /> 66
                    <a-icon type="like" /> 66
                    <a-icon type="message" /> 22
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </a-card>
    </div>

    <div class="blog-list-container">
      <a-card :body-style="blogBodyStyle" class="blog-card">
        <div class="blog-main">
          <div class="blog-image">
            <img class="blog-cover">
          </div>
          <div class="blog-container">
            <div class="blog-title">标题</div>
            <div class="blog-comment">备注描述</div>
            <div class="blog-bottom">
              <div class="blog-type">
                分类：<a-tag color="green">java</a-tag>
              </div>
              <div class="blog-meta">
                <div class="blog-time">2018-6 20:30</div>
                <div class="blog-other">
                  <a-icon type="eye" /> 20
                  <a-icon type="heart" /> 66
                  <a-icon type="like" /> 66
                  <a-icon type="message" /> 22
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>

    <div class="blog-list-container">
      <a-card :body-style="blogBodyStyle" class="blog-card">
        <div class="blog-main">
          <div class="blog-image">
            <img class="blog-cover">
          </div>
          <div class="blog-container">
            <div class="blog-title">标题</div>
            <div class="blog-comment">备注描述</div>
            <div class="blog-bottom">
              <div class="blog-type">
                分类：<a-tag color="green">java</a-tag>
              </div>
              <div class="blog-meta">
                <div class="blog-time">2018-6 20:30</div>
                <div class="blog-other">
                  <a-icon type="eye" /> 20
                  <a-icon type="heart" /> 66
                  <a-icon type="like" /> 66
                  <a-icon type="message" /> 22
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>

    <div class="blog-pagination">
      <a-pagination :show-total="total => `共 ${total} 条`" show-quick-jumper :default-current="1" :total="page.totalCount" @change="pageChange" />
    </div>

  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: '博客'
    }
  },
  data() {
    return {
      current: ['createdTime'],
      blogBodyStyle: {
        padding: '18px'
      },
      page: {
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        params: {},
        sortColumn: 'createdTime',
        sortMethod: 'desc',
        list: []
      }
    }
  }

}
</script>

<style scoped>
    .button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 5px;
        align-items: center;
        line-height: 70px;
    }

    .button-text {
        font-size: 20px;
    }

    .ant-menu-horizontal {
        border-bottom: none !important;
    }

    .ant-menu {
        background: none !important;
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #3e4149;
    }

    .blog-container {
        width: 100%;
        min-height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .image-blog {
        width: 550px;
        min-height: 130px;
    }

    a:hover {
        color: #3e4149;
    }

    .blog-title {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 10px;
    }

    .blog-comment {
        margin-bottom: 10px;
        font-size: 14px;
        color: #9c9ea8;
        line-height: 22px;
        max-height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .blog-main {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .blog-bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .blog-meta {
        font-size: 12px;
        color: #9c9ea8;
    }

    .blog-image {
        width: 230px;
        margin-right: 20px;
    }

    .blog-cover {
        width: 100%;
        border-radius: 5px;
    }

    .blog-card {
        margin-bottom: 15px;
        border-radius: 5px;
    }
</style>
