<template>
  <div class="menu-container">
    <div class="nav-logo">
      <img class="logo-img" src="@/assets/logo.png" alt="logo">
      <span class="logo-text">succos</span>
    </div>
    <div class="nav-search">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="/">
          <router-link to="/">
            <a-icon type="mail" />首页
          </router-link>

        </a-menu-item>

        <a-menu-item key="type">
          <router-link to="/type">
            <a-icon type="branches" />分类
          </router-link>

        </a-menu-item>
        <a-menu-item key="timeLine">
          <router-link to="/timeLine">
            <a-icon type="sort-descending" />时间轴
          </router-link>

        </a-menu-item>
        <a-menu-item key="about">
          <router-link to="/about">
            <a-icon type="user" />关于我
          </router-link>

        </a-menu-item>
      </a-menu>
      <a-input-search
        placeholder="input search text"
        enter-button="Search"
        size="large"
        @search="onSearch"
      />

      <!-- <router-link to="/manager" class="login-header">
        <img class="login-header-img">
      </router-link> -->
    </div>
    <router-link to="/login" class="login">登录/注册</router-link>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      current: ['type']
    }
  },
  methods: {
    onSearch(v) {
      console.log(v)
    }
  }
}
</script>
<style scoped>
.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 400px;
  line-height: 60px;
  background: #fff;
  margin-bottom: 10px;
}
.nav-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-img {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.logo-text {
  height: 100%;
  font-size: 24px;
  line-height: 60px;
}
.nav-search {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-search .ant-menu-horizontal {
  font-size: 16px;
  line-height: 60px;
  border-bottom: none;
  margin-right: 20px;
}

.login {
  color: black;
  margin-left: 20px;
}

.login:hover {
  color: black;
}

.login-header {
  color: black;
  margin-left: 20px;
}

.login-header-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #e5e5e5;
}
</style>
