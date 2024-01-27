# 介绍

这里是权酱托管在 Github 的个人网站

## 本页面已经已经使用了 Vue3 使用 Vite 作为脚手架

### 主页界面

xiaoqvan 自写个人主页
![主页](/screenshots/1.png)

### 预览

- [权的主页](https://www.xiaoqvan.top)

### 功能

- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 实时天气
- [x] 音乐播放器
- [ ] 移动端完全适配 
- [ ] 番剧内容（尚未完全）

### 番剧

番剧页面使用本人自写 Python 脚本加 Github Actions 实现每天实时更新。
感谢[弹弹 play 开放平台](https://github.com/kaedei/dandanplay-libraryindex/blob/master/api/OpenPlatform.md)的 API 接口

# 构建

克隆本项目
```bush
//安装依赖
npm install
//构建
npm run build
//推送到分支gh-pages
//vite.config.ts修改仓库名称如果使用<USERNAME>.github.io不用修改
npm run deploy
```
