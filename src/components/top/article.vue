<!-- 文章 -->
<script setup name="article">

</script>


<template>
    <div class="main">
        <div class="container Theme_colors">
            <!-- 主内容区域 -->
            <div class="main__content">
                <!-- 左边信息 -->
                <div class="content__left">
                    <!-- 博客信息 -->
                    <div class="info Theme_colors">
                        <!-- 头像 -->
                        <img src="@/assets/img/tx.jpg" alt="tx">
                        <div class="info_name">
                            <h1>xiaoqvan</h1>
                            <!-- 简介 -->
                            <div class="info__desc">
                                <p>原始人启动</p>
                            </div>
                            <!-- 社交链接 -->
                            <div class="info__social">
                                <!-- GitHub -->
                                <div>
                                    <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
                                </div>
                                <!-- twitter -->
                                <div>
                                    <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>

                                </div>
                                <!-- steam -->
                                <div>
                                    <a href="https://steamcommunity.com"><i class="fa-brands fa-steam"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右边文章 -->
                <div class="content__right">
                    <!-- 每一个文章 -->
                    <div class="article Theme_colors Frosted_glass">
                        <div class="article1">
                            <div class="">
                                <h1>第一篇文章</h1>
                            </div>
                            <div div class="article_info">
                                <div>
                                    <p>2024.3.14</p>
                                </div>
                                <div>
                                    <p>分类</p>
                                </div>
                            </div>
                            <div class="article_tap">
                                <div>
                                    <p>标签1</p>
                                </div>
                                <div>
                                    <p>标签2</p>
                                </div>
                                <div>
                                    <p>标签3</p>
                                </div>
                            </div>
                            <div class="">
                                <p>文章摘要</p>
                            </div>
                        </div>
                        <a class="article_img" href="https://www.baidu.com">
                            <img src="@/assets/img/105917465_2.png" alt="文章图片" />
                        </a>
                    </div>
                    <!-- 第2个文章 -->
                    <div class="article Theme_colors Frosted_glass">
                        <div class="article1">
                            <div class="">
                                <h1>依蕾娜</h1>
                            </div>
                            <div div class="article_info">
                                <div>
                                    <p>2000.0.0</p>
                                </div>
                                <div>
                                    <p>分类</p>
                                </div>
                            </div>
                            <div class="article_tap">
                                <div>
                                    <p>标签1</p>
                                </div>
                                <div>
                                    <p>标签2</p>
                                </div>
                                <div>
                                    <p>标签3</p>
                                </div>
                            </div>
                            <div class="article_desc">
                                <p>文章摘要</p>
                            </div>
                        </div>
                        <a class="article_img" href="https://www.baidu.com">
                            <img src="@/assets/img/tx.jpg" alt="文章图片" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: flex;
    width: 130%;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
    padding: 30px;
    border-radius: 10px;
}

/* 主内容区 */

.main__content {
    display: flex;
    width: 100%;
    box-sizing: border-box;
}


/* 左区域 */

.content__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
}


/* 信息 */

.info {
    width: 100%;
    border-radius: 10px;
}

.info img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.info_name {
    text-align: center;
    padding: 10px;
}

.info_name h1 {
    font-size: 25px;
}

.info__desc {
    margin-top: 5px;
}

.info__social {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 10px;
}

.info__social div {
    background-color: rgba(255, 255, 255, 0.306);
    border-radius: 10px;
    width: 30px;
    height: 30px;
    margin: 0 10px;
}

.info__social a {
    text-decoration: none;
    color: inherit;
}


/* 右区域 */

.content__right {
    margin-left: 10px;
    box-sizing: border-box;
    width: 100%;
}


/* 每一篇文章 */

/* 基础样式 */
.article {
    display: flex;
    width: 100%;
    /* 根据需要调整 */
    height: 300px;
    /* 根据需要调整，确保文章卡片有固定高度 */
    background-color: rgba(255, 255, 255, 0.5);
    /* 白色透明背景 */
    border-radius: 10px;
    /* 圆角 */
    overflow: hidden;
    /* 防止内容溢出 */
    margin-bottom: 10px;
    /* 文章间隔，根据需要调整 */
}

.article1,
.article_img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 垂直居中 */
}

.article1 {
    flex: 1;
    /* 占用宽度65%，不可伸缩 */
    padding: 10px;
    /* 内间距，根据需要调整 */
}

.article_img {
    flex: 0 0 35%;
    /* 占用宽度35%，不可伸缩 */
    overflow: hidden;
    /* 防止图片溢出 */
    position: relative;
    /* 定位图片 */
    width: 100%;
    /* 确保容器宽度正确 */
    height: 100%;
    /* 根据需要可能需要调整高度，使其固定 */
}

.article_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 裁剪图片以填满容器 */
    position: absolute;
    /* 绝对定位，使得可以正确裁剪 */
    top: 0;
    left: 0;
}

/* 当没有图片时，.article1占满整个容器 */
.article_img:empty+.article1 {
    flex: 1;
}

/* 横向排列的内容 */
.article_info,
.article_tap {
    display: flex;
    justify-content: space-between;
    /* 分散对齐 */
    margin: 5px 0;
    /* 根据需要调整 */
}

/* 其他可能需要的样式 */
.article_info div,
.article_tap div {
    /* 根据需要添加样式，如边距、字体大小等 */
}
</style>