import datetime
import requests
import json
import os
import pytz

# 获取中国的时区对象
china_timezone = pytz.timezone('Asia/Shanghai')

# 使用中国时区获取当前时间
china_time = datetime.datetime.now(china_timezone).strftime('%Y-%m-%d')

# 发送请求获取JSON数据
url = "https://api.dandanplay.net/api/v2/bangumi/shin"
headers = {"Accept": "application/json"}  # 修改为接受JSON
response = requests.get(url, headers=headers)
response.raise_for_status()

# 解析JSON数据
data = json.loads(response.text)
# 初始化星期分类字典
weekdays = {i: [] for i in range(7)}

# 读取所有BangumiIntro
for bangumi_intro in data['bangumiList']:
    anime_title = bangumi_intro['animeTitle']
    image_url = bangumi_intro['imageUrl']
    air_day = int(bangumi_intro['airDay'])
    rating = bangumi_intro.get('rating', 'N/A')  # 使用get以处理没有评分的情况
    # 将数据按星期分类
    weekdays[air_day].append({
        'animeId': bangumi_intro['animeId'],
        'AnimeTitle': anime_title,
        'AnimeImage': image_url,
        'AnimeRating': str(rating)
    })

# 开始构建Vue组件内容
vue_content = f"""
<template>
    <div class='fanjv-all' id='fanjv-python'>
        <div class='fanjv-top'>
            <div class='fanjv-top-1'>
                <div class='fanjv-header'>
                    <h1>每日番剧</h1>
                </div>
                <div class='fanjv-scrq'>
                    <p>{{{{ risetime }}}}</p>
                </div>
            </div>
        </div>
        <div class='fanjv-times'>
"""

day_names = ["日", "一", "二", "三", "四", "五", "六"]
for day_name in day_names:
   vue_content += f"            <div><p class='today-header'><span id='xq'>星期</span>{day_name}</p></div>\n"

vue_content += """        </div>
        <div class='fanjv-main'>
            <div v-for="(animeDay, dayIndex) in animeList" :key="dayIndex" :id="'day-' + dayIndex" class='day-container'>
                <div class='anime-list'>
                    <div v-for="(anime, animeIndex) in animeDay" :key="animeIndex" class='anime-container'>
                        <img :alt='anime.AnimeTitle' class='anime-image' :src='anime.AnimeImage'>
                        <div class='anime-title'>{{ anime.AnimeTitle }}</div>
                        <div class="anime-rating">{{ anime.AnimeRating }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="anime">
import { ref, reactive } from "vue";
let animeList = reactive({
"""

for day in range(7):
    vue_content += f"    airDay{day}: [\n"
    for anime in weekdays[day]:
        vue_content += f"        {str(anime)},\n"
    vue_content += "    ],\n"

vue_content += f"""
}});
let risetime = ref('更新时间：{china_time}');
</script>
"""
vue_content += """
<style scoped>
.fanjv-main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    white-space: nowrap;
    /* 不换行 */
    overflow-x: scroll;
    /* 保持为scroll */
    overflow-y: hidden;
    /* 隐藏纵向滚动条 */
    width: 100%;
    /* 确保宽度占满父容器 */
    background-color: rgba(255, 255, 255, 0.486);
    border-radius: 5px;
}


/* 自定义滚动条样式 */

.fanjv-main::-webkit-scrollbar {
    width: 15px;
    /* 设置滚动条宽度 */
    height: 5px;
}

.fanjv-main::-webkit-scrollbar-thumb {
    background-color: #888;
    /* 设置滚动条拖拽部分的颜色 */
    border-radius: 6px;
    /* 设置滚动条拖拽部分的圆角 */
}

.fanjv-main::-webkit-scrollbar-track {
    background-color: #f1f1f100;
    /* 设置滚动条背景颜色 */
}

.fanjv-top {
    box-sizing: border-box;
    width: 100%;
}

.fanjv-top-1 {
    background-color: rgba(255, 255, 255, 0.486);
    border-radius: 0 0 7px 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
}

.fanjv-all {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.anime-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
}

.anime-image {
    width: 100px;
    height: 135px;
    object-fit: cover;
    border-radius: 10px;
}

.fanjv-header h1 {
    margin: 0;
    font-size: 20px;
}

.fanjv-scrq p {
    margin: 0;
    font-size: 15px;
}

.fanjv-times {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

.fanjv-times p {
    margin: 0 3px;
    font-size: 17px;
}

.anime-title {
    width: 105px;
    /* 设置文本显示的宽度 */
    white-space: nowrap;
    /* 禁止换行 */
    overflow: hidden;
    /* 超出部分隐藏 */
    text-overflow: ellipsis;
    /* 超出部分用省略号表示 */
    font-size: 13px;
}

.day-container {
    padding: 5px;
}

.dqxq {
    background-color: rgba(255, 255, 255, 0.486);
    border-radius: 5px 5px 0 0;
}
</style>

"""
# 确保目录存在
os.makedirs('fanjv', exist_ok=True)

# 写入文件
with open("src/components/anime.vue", "w", encoding="utf-8") as file:
    file.write(vue_content)

print("Vue组件已生成为 index.vue")
