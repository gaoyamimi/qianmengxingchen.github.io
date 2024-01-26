<script setup lang="ts" name="App">
import Main1 from "./components/main-1.vue";
import Main2 from "./components/main-2.vue";
import Main3 from "./components/main-3.vue";
import background from "./components/background.vue";
import { RouterView } from "vue-router";
import { ref, computed } from 'vue';

const currentDate = ref(new Date());
const currentYear = computed(() => currentDate.value.getFullYear());
</script>

<template>
  <RouterView />
  <background />
  <div class="main-all">
    <div class="main">
      <Main1 />
      <Main2 />
      <Main3 />
    </div>
  </div>
  <footer>
    <!-- 版权信息 -->
    <span id="power">Copyright&nbsp;&copy;
      {{ currentYear }}
      <!-- 下面取消注释填写你的个人信息 -->
      <!-- <a href="#" id="power-text">xiaoqvan</a> -->
    </span>
    <!-- 这里为网站模板作者信息，以下信息请不要修改哦 -->
    <span class="made" id="made">&nbsp;&amp;&nbsp;Made&nbsp;by&nbsp;<a rel="noopener"
        href="https://github.com/XQxiaoqvan/xqxiaoqvan.github.io" target="_blank">xiaoqvan</a></span>
    <!-- 备案信息 -->
    <a rel="noopener" href="https://beian.miit.gov.cn" id="beian" target="_blank">&nbsp;&amp;&nbsp;蜀ICP备2023029793号-1</a>
  </footer>
</template>

<style>
@font-face {
  font-family: 'UnidreamLED';
  src: url('../src/assets/font/UnidreamLED.ttf') format('truetype');
  /* 替换为你的字体文件路径和格式 */
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}



/* 悬浮提示窗 */

.iziToast>.iziToast-body .iziToast-title {
  font-size: 16px !important;
}

.iziToast {
  border-radius: 50px !important;
}

.iziToast-body .iziToast-message {
  line-height: 18px !important;
}

.iziToast>.iziToast-body .iziToast-message {
  margin: 6px 0px 4px 0px !important;
}

.iziToast:after {
  box-shadow: none !important;
}

.iziToast>.iziToast-body .iziToast-texts {
  margin: 6px 6px !important;
  display: flex !important;
  align-items: center;
}

.iziToast>.iziToast-body i {
  margin-left: 6px;
  margin-top: 10px;
}

.iziToast-message {
  word-break: break-all !important;
}


/* 主体 */

.main-all {
  overflow: hidden;
  margin: 200px 0;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 190px;
  height: 100%;
}

/* 第一屏 */

.tx-all {
  width: 100%;
  height: auto;
  transition: display 0.5s ease;
  /* 添加过渡效果 */
}

/* 头像 */

.tx {
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0px;
}

.tx img {
  margin-top: 30px;
  width: 150px;
  height: 150px;
  border-radius: 500px;
}

.tx h1 {
  margin-top: 0;
  margin-bottom: 10px;
}

.tx-content {
  margin-bottom: 10px;
}

.tx-content p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* 一言 */

.hitokoto-all {
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  height: 100%;
  padding: 20px;
  margin: 10px 0;
}

.hitokoto-text {
  text-align: left;
}

.hitokoto-from {
  text-align: right;
}

/* 社交信息 */

.relation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.relation div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin: 0 10px;
}

.relation i {
  font-size: 26px;
}

.relation a {
  text-decoration: none;
  color: inherit;
}

/* 第二屏 */

.main-2 {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 60px;
}

.fanjv {
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 10px;
  width: 500px;
  /* 设置容器宽度 */
  overflow: hidden;
  /* 隐藏溢出内容 */
}

/* 第三屏 */

.main-3 {
  width: 100%;
  height: auto;
}

/* 时间 */

.timeshow {
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-text {
  font-size: 55px;
  font-family: 'UnidreamLED', sans-serif;
  margin: 0;
}

.time-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 70px;
}

/* 音乐播放器 */

.music-bfq {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  flex-wrap: nowrap;
}

.music-bfq img {
  width: 90px;
  height: 90px;
  border-radius: 10px;
}

.music-info {
  text-align: center;


  /* 让子元素在容器中水平居中 */
}

.active {
  font-size: 35px;
  color: #fff;
  margin: 10px 0 !important;
}

.player-info {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  padding: 5px;
  display: inline-block;
  /* 让元素变成行内块元素 */
}

.music-content {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 40px;
}

.music-content h1,
.music-content p {
  margin: 0;
}

.music-content h1 {
  font-size: 20px;
}

.music-progress {
  width: 100%;
  margin: 0 0;
}

.music-progress progress {
  width: 100%;
}

/* 进度条 */

.g-progress {
  margin: auto;
  width: auto;
  height: 7px;
  border-radius: 25px;
  background: linear-gradient(90deg, #0f0, #0ff var(--progress), #bbbbbb 0);
  transition: .3s --progress;
  margin: 20px 0 0 0;
}

.music-button {
  display: flex;
  align-items: center;
}

.music-button i {
  margin: 8px 8px;
  font-size: 24px;
}

.fas.fa-pause.fa-xs {
  display: none;
}

/* 歌词 */

.lyric {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  padding: 15px;
  width: 100%;
  text-align: center;
  margin: 10px 0;
}

.color-text {
  text-align: center;
  font-size: 15px;
  background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #00FFFF 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #66FFFF 90%, blue 100%);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: masked-animation 4s linear infinite;
}

@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100% 0;
  }
}

/* 播放器END */
/* 天气 */

.weather {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  width: 100%;
}

.weather-icon img {
  width: 80px;
  height: 80px;
  margin: 0 18px;
}

.weather-content {
  margin: 0 18px;
}

/* 移动页面按钮 */

.media-switchover {
  display: none;
}

/* 底部 */

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #33333384;
  color: #fff;
  font-size: 16px;
  position: absolute;
  bottom: 0;
}

footer a {
  text-decoration: none;
  color: inherit;
  margin: 10px 0;
}




/* 主体 */

.media-switchover div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.687);
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin: 0 10px;
}

.media-switchover i {
  font-size: 26px;
}


/* 手机适配 */

@media only screen and (max-width: 800px) {
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
  }

  .main-all {
    overflow: hidden;
    margin: 20px 0;
    transition: margin 0.3s ease;
  }

  .iziToast {
    width: 70% !important;
    transition: width 0.3s ease;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 12px;
    height: 100%;
    transition: margin 0.3s ease;
  }

  .relation {
    margin-top: 5px;
    transition: margin-top 0.3s ease;
  }

  .main-2 {
    display: none;
    transition: display 0.3s ease;
  }

  .fanjv {
    width: 100%;
  }

  .main-3 {
    display: none;
    margin-top: 5px;
    margin-left: 0px;
    transition: margin-top 0.3s ease, margin-left 0.3s ease;
    flex-direction: column;
  }

  .music-content {
    margin: 0 10px;
    transition: margin 0.3s ease;
  }

  .media-switchover {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }

  .made {
    display: none;
    transition: display 0.3s ease;
  }

  footer {
    position: fixed;
    transition: position 0.3s ease;
  }
}


/* 在小于420px的宽度下隐藏星期 */

@media (max-width: 410px) {
  .relation div {
    margin: 0;
  }

  .time-info {
    margin: 0;
  }

  .music-content h1 {
    font-size: 16px;
    width: 200px;
  }

  .fanjv-times p {
    margin: 0 3px;
    font-size: 15px;
  }
}

@media (max-width: 390px) {
  .music-content h1 {
    font-size: 15px;
    width: 150px;
  }

  footer {
    font-size: 12px;
  }

  .fanjv-times div p {
    font-size: 14px;
  }
}


/* 平板横屏适配 */

@media only screen and (min-width: 800px) and (max-width: 1360px) {
  .main-2 {
    display: none;
    transition: width 0.3s ease;
  }

  .main-3 {
    margin-left: 50px;
    transition: width 0.3s ease;
  }
}


/* 高度600-700设备适配 */

@media only screen and (min-height: 600px) and (max-height: 700px) {

  /* 主体 */
  .main-all {
    overflow: hidden;
    margin: 100px 0;
    transition: width 0.3s ease;
  }

  .main {
    padding: 14px;
  }
}

@media only screen and (max-height: 700px) and (max-width: 800px) {

  /* 主体 */
  .main-all {
    margin: 0 0;
    transition: width 0.3s ease;
  }
}


/* 高度600以下设备适配 */

@media only screen and (max-height: 600px) {

  /* 主体 */
  .main-all {
    overflow: hidden;
    margin: 20px 0;
    transition: width 0.3s ease;
  }
}


/* 高度500以下设备适配 */

@media only screen and (max-height: 500px) {
  .main-all {
    transform-origin: top;
    /* 设置变换的原点在顶部 */
    transform: scale(0.8);
    width: 100%;
    overflow: visible;
  }
}


/* 高度400以下设备适配 */

@media only screen and (max-height: 400px) {
  .main-all {
    transform-origin: top;
    /* 设置变换的原点在顶部 */
    transform: scale(0.7);
    width: 100%;
    overflow: visible;
  }

  .main-2 {
    display: block;
  }
}


/* 低高度300设备适配 */

@media only screen and (max-height: 300px) {
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* 防止滚动条出现 */
  }

  .main-all {
    transform-origin: top;
    /* 设置变换的原点在顶部 */
    transform: scale(0.5);
    width: 100%;
    overflow: visible;
  }

  .main {
    width: 100%;
    margin: 0 0;
  }

  .main-2 {
    display: block;
  }
}
</style>
