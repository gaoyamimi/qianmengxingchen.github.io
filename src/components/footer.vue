<script setup name="footer">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>


<template>
    <footer>
        <div class="footer_div">
            <div class="footer-text Theme_colors Frosted_glass">
                <div>
                    <!-- 版权信息 -->
                    <span id="power">Copyright&nbsp;&copy;
                        {{ currentYear }}
                        <!-- 下面取消注释填写你的个人信息 -->
                        <a href="#" id="power-text"></a>
                    </span>
                    <!-- 网站模板作者信息 -->
                    <span class="made" id="made">&nbsp;&amp;&nbsp;Made&nbsp;by&nbsp;<a rel="noopener"
                            href="https://github.com/XQxiaoqvan/xqxiaoqvan.github.io"
                            target="_blank">xiaoqvan</a></span>
                    <!-- 备案信息 -->
                    <a rel="noopener" href="https://beian.miit.gov.cn" id="beian"
                        target="_blank">&nbsp;&amp;&nbsp;蜀ICP备2023029793号-1</a>
                </div>
                <!-- 网页构建时间 -->
                <div class="build_time">
                    <p>构建日期:2024-3-14</p>
                    <p>更新时间:2024-3-14</p>
                </div>
            </div>

        </div>
    </footer>
</template>


<style scoped>
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    /* 上下填充 */
}

.footer_div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-text {
    display: flex;
    width: 80%;
    color: black;
    text-align: center;
    padding: 10px;
    border-radius: 15px 15px 0 0;
    box-sizing: border-box;
    transform: translateY(+27px);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.footer-text:hover {
    transform: translateY(+0px);
    transition: transform 0.3s ease;
}

.build_time {
    display: flex;
    margin-top: 5px;
}

.build_time p {
    margin: 0 10px;
}

footer a {
    text-decoration: none;
    color: #000;
}

footer a:hover {
    color: rgb(0, 4, 255);
    text-decoration: underline;
}
</style>