<template>
  <div>
    <a-card hoverable>
      <img src="@/assets/my-back.jpg" class="my-back">
      <img src="@/assets/header.gif" alt="" class="my-header">
      <div class="my-bottom-container">
        <div class="my-nickname">succos</div>
        <div class="my-signature">This is the description</div>
        <a-divider />
        <div class="social-container">
          <div class="social-text">社交：</div>
          <div class="social-item">
            <a href="https://me.csdn.net/">
              <img src="@/assets/icons/csdn.png" class="social-icon">
            </a>
            <a href="https://gitee.com/gccdd">
              <img src="@/assets/icons/gitee.png" class="social-icon">
            </a>
            <a href="http://wpa.qq.com/msgrd?v=3&uin=3322480003&site=qq&menu=yes">
              <img src="@/assets/icons/qq.png" class="social-icon">
            </a>
            <a href="https://github.com/Succos">
              <img src="@/assets/icons/github.png" class="social-icon">
            </a>
          </div>
        </div>
        <a-divider />
        <div class="social-container">
          <div class="social-text">加入我们：</div>
          <div class="join-item">
            <a href="//shang.qq.com/wpa/qunwpa?idkey=">
              <img src="@/assets/icons/QQqun.png" class="social-icon">
            </a>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>
<style scoped>
.my-back {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left:0
}
.ant-card-body {
  padding: 0;
  text-align: left;
}
.my-header {
  width: 100px;
  height: 100px;
  border: 5px solid #e5e5e5;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  margin: 75px auto 15px;
}
.my-bottom-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

}
.my-nickname{
  margin: 0 auto;
  font-size: 22px;
  font-weight: bold;
  line-height: 60px;
}
.my-signature{
  margin: auto;
  font-size: 15px;
  color: #878d99;
}

.social-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.social-text {
  font-size: 15px;
  color: #878d99;
}

.social-icon {
  width: 40px;
  height: 40px;
}

.social-item {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.join-item {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
