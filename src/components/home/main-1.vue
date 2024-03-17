<script setup lang="ts" name="Main">
import { ref, onMounted } from 'vue';
import axios from "axios";

const hitokotoText = ref('权酱是个大吃货');
const fromText = ref('xiaoqvan');

// 获取一言
const fetchHitokoto = async () => {
    try {
        const response = await axios.get('https://v1.hitokoto.cn?max_length=24');
        const data = response.data;
        hitokotoText.value = data.hitokoto;
        fromText.value = data.from;
    } catch (error) {
        console.error(error);
    }
};

// 在组件挂载后立即获取一言
onMounted(() => {
    fetchHitokoto();
});
</script>

<template>
    <!-- 第一屏 -->
    <div class="tx-all Theme_colors Frosted_glass">
        <!-- 基本信息 -->
        <div class="tx ">
            <img src="https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOmk6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VYV0U5TjAzS2tSS3ByRmZkd2JFVzJBQkVnaVN4ZFRyb1pLZ3c0T0RBMHdqZ0E.jpg"
                alt="">
            <h1>xiaoqvan</h1>
            <div class="tx-content">
                <p>这里是权哦</p>
                <p>欢迎来到我的个人主页</p>
            </div>
        </div>
        <!-- 一言 -->
        <div class="hitokoto-all Theme_colors" id="hitokoto-content">
            <div class="hitokoto-text"><span>{{ hitokotoText }}</span></div>
            <div class="hitokoto-from">-「 <span>{{ fromText }}</span> 」</div>
        </div>
        <!--社交链接-->
        <div class="relation">
            <div>
                <a href="https://qm.qq.com/q/xwIReHzTLG" title="添加QQ">
                    <i class="fa-brands fa-qq"></i>
                </a>
            </div>
            <div>
                <a href="https://space.bilibili.com/171896697" title="bilibili">
                    <i class="fa-brands fa-bilibili"></i>
                </a>
            </div>
            <div>
                <a href="https://github.com/XQxiaoqvan" title="前往GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
            <div>
                <a href="https://twitter.com/xiao_qvan668" title="前往x-twitter">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
            </div>
            <div>
                <a href="https://t.me/ppx114514" title="前往Telegram">
                    <i class="fa-brands fa-telegram"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* 第一屏 */

.tx-all {
    width: 22%;
    height: auto;
    padding: 10px;
    margin-top: 100px;
    border-radius: 20px;
    margin-right: 900px;
}

/* 头像 */

.tx {
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
    background-color: rgba(255, 255, 255, 0.306);
    box-shadow: 0px 0px 10px 5px rgba(104, 104, 104, 0.591);
    border-radius: 10px;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    transition: transform 0.3s ease;
}

.relation div:hover {
    box-shadow: 0 0 10px 6px rgba(104, 104, 104, 0.591);
    transform: translateY(-2px) scale(1.02);
    transition: transform 0.3s ease;
}

.relation i {
    font-size: 26px;
}

.relation a {
    text-decoration: none;
    color: inherit;
}
</style>
