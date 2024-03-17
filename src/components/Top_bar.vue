<!-- 这里是顶部栏 -->
<script setup name="Top_bar">
import { RouterLink } from 'vue-router'; 
</script>


<template>
    <div class="top Theme_colors">
        <div class="topbar">
            <!-- 标题 -->
            <div class="topbar__title">
                <h1>xiaoqvan</h1>
            </div>
            <!-- 导航标签 -->
            <div class="topbar__tag">
                <RouterLink to="/home" class="tag" active-class="active">首页</RouterLink>
                <RouterLink to="/article" class="tag" active-class="active">文章</RouterLink>
                <RouterLink to="/games" class="tag" active-class="active">游戏</RouterLink>
                <RouterLink to="/anime" class="tag" active-class="active">动漫</RouterLink>
                <RouterLink to="/about" class="tag" active-class="active">关于</RouterLink>
            </div>
            <!-- 账号登录 -->
            <div class="topbar__info">
                <!-- <p>登录</p> -->
                <div class="info">
                    <img src="@/assets/img/tx.jpg" alt="头像">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* 去链接样式 */
.tag {
    text-decoration: none;
    color: inherit;
}

/* 顶部栏背景 */
.top {
    width: 100%;
    border-radius: 0 0 20px 20px;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    transform: translateY(-5px);
    transition: transform 0.3s ease;
}

.top:hover {
    transform: translateY(0px);
    transition: transform 0.3s ease;
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    padding: 10px 20px 10px 20px;

}

.topbar__title h1 {
    font-size: 20px;
}

.topbar__tag {
    display: flex;
}

/* 标签背景 */
.tag {
    margin: 0 2px;
    background-color: rgba(192, 192, 192, 0.2);
    padding: 10px;
    border-radius: 6px;

}

.tag:hover {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px 5px rgba(104, 104, 104, 0.16);
    transform: translateY(-1px);
    transition: transform 0.3s ease;
}

/* 登录信息栏 */
.topbar__info {
    width: 50px;
    height: 50px;

}

.info {
    width: 100%;
    height: 100%;
}

.info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    border: 2px solid #fff;
    box-shadow: 0 0 5px 5px rgba(104, 104, 104, 0.591);
}

.info img:hover {
    box-shadow: 0 0 10px 6px rgba(104, 104, 104, 0.591);
    transform: translateY(-1px) scale(1.01);
    transition: transform 0.3s ease;
}

.active {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px 5px rgba(104, 104, 104, 0.16);
}
</style>