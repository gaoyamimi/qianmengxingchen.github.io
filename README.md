# 介绍

这里是权酱在 Github 的个人网站
页面已经重新编写尚未完成

### 主页界面（旧）

xiaoqvan 自写个人主页
![主页](/screenshots/1.png)

### 预览

- [权的主页](https://www.xiaoqvan.top)

### 功能

- [x] Hitokoto 一言
- [ ] 移动端适配
- [ ] 博客
- [ ] 游戏展示
- [x] 番剧内容
- [ ] 快速配置

### 番剧

感谢[Bangumi](https://github.com/bangumi/api)的 API 接口

# 构建

克隆本项目

```bush
//安装依赖
npm install
//构建
npm run build
//推送到分支gh-pages
//vite.config.js修改仓库名称如果使用<USERNAME>.github.io不用修改
git add dist -f
git commit -m "推送到gh-pages"
git subtree split --prefix dist -b gh-pages-temp
git push -f origin gh-pages-temp:gh-pages
git branch -D gh-pages-temp
```
