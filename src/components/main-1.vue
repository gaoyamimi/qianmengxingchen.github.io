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
    <div class="tx-all">
        <!-- 基本信息 -->
        <div class="tx">
            <img src="https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOmk6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VYV0U5TjAzS2tSS3ByRmZkd2JFVzJBQkVnaVN4ZFRyb1pLZ3c0T0RBMHdqZ0E.jpg"
                alt="">
            <h1>xiaoqvan</h1>
            <div class="tx-content">
                <p>这里是权哦</p>
                <p>欢迎来到我的个人主页</p>
            </div>
        </div>
        <!-- 一言 -->
        <div class="hitokoto-all" id="hitokoto-content">
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

