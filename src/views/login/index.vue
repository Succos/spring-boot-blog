<template>
  <div class="login-background" style="@/assets/login-back.jpg">
    <div class="login-container">
      <div class="login-title">欢迎进入succos博客</div>
      <a-menu v-model="current" mode="horizontal" @select="changeTab">
        <a-menu-item key="login">登录</a-menu-item>
        <a-menu-item key="register">注册</a-menu-item>
      </a-menu>
      <div class="content">
        <div v-show="login" class="login">
          <a-form :form="loginForm" @submit="loginSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'username',
                  { rules: [{ required: true, message: '请输入账号!' }] }
                ]"
                placeholder="请输入账号"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: '请输入密码!' }] }
                ]"
                placeholder="请输入密码"
                type="password"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" block>登录</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div v-show="register" class="register">
          <a-form :form="registerForm" @submit="registerSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'username',
                  { rules: [{ required: true, message: '请输入账号!' }] }
                ]"
                placeholder="请输入账号"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: '请输入密码!' }] }
                ]"
                placeholder="请输入密码"
                type="password"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'nickname',
                  { rules: [{ required: true, message: '请输入昵称!' }] }
                ]"
                placeholder="请输入昵称"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'userEmail',
                  { rules: [{ required: true, message: '请输入邮箱!' }] }
                ]"
                placeholder="请输入邮箱"
              />
            </a-form-item>
            <a-form-item>
              <a-radio-group v-decorator="['sex']">
                <a-radio value="1">
                  男
                </a-radio>
                <a-radio value="2">
                  女
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" block>注册</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.login-background {
  width: 100%;
  height: 100%;
  position: fixed;
}

.login-container {
  background-color: #fff;
  width: 450px;
  min-height: 450px;
  margin: 150px auto;
  border: 1px solid #e5e5e5;
  padding: 50px 50px 0 50px;
  border-radius: 5px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.ant-menu-item {
  width: 50%;
  text-align: center;
}

.content {
  margin-top: 20px;
}
</style>
