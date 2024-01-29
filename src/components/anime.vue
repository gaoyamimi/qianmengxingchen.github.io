
<template>
    <div class='fanjv-all' id='fanjv-python'>
        <div class='fanjv-top'>
            <div class='fanjv-top-1'>
                <div class='fanjv-header'>
                    <h1>每日番剧</h1>
                </div>
                <div class='fanjv-scrq'>
                    <p>{{ risetime }}</p>
                </div>
            </div>
        </div>
        <div class='fanjv-times'>
            <div><p class='today-header'><span id='xq'>星期</span>日</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>一</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>二</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>三</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>四</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>五</p></div>
            <div><p class='today-header'><span id='xq'>星期</span>六</p></div>
        </div>
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
    airDay0: [
        {'animeId': 17263, 'AnimeTitle': '狩龙人拉格纳', 'AnimeImage': 'https://img.dandanplay.net/anime/17263_medium.jpg', 'AnimeRating': '6.7'},
        {'animeId': 17355, 'AnimeTitle': '七大罪 默示录的四骑士', 'AnimeImage': 'https://img.dandanplay.net/anime/17355_medium.jpg', 'AnimeRating': '6.2'},
        {'animeId': 17495, 'AnimeTitle': '我独自升级', 'AnimeImage': 'https://img.dandanplay.net/anime/17495_medium.jpg', 'AnimeRating': '6.8'},
        {'animeId': 17501, 'AnimeTitle': '香格里拉·弗陇提亚～屎作猎人向神作发起挑战～', 'AnimeImage': 'https://img.dandanplay.net/anime/17501_medium.jpg', 'AnimeRating': '7.3'},
        {'animeId': 17655, 'AnimeTitle': '王者天下 第五季', 'AnimeImage': 'https://img.dandanplay.net/anime/17655_medium.jpg', 'AnimeRating': '8.2'},
        {'animeId': 17693, 'AnimeTitle': '因为不是命中注定的同伴而被赶出了勇者的队伍、从此以后过上了悠闲的隐居生活 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/17693_medium.jpg', 'AnimeRating': '6.2'},
        {'animeId': 17786, 'AnimeTitle': '青之驱魔师 岛根启明结社篇', 'AnimeImage': 'https://img.dandanplay.net/anime/17786_medium.jpg', 'AnimeRating': '6.3'},
        {'animeId': 17832, 'AnimeTitle': '爱犬讯号', 'AnimeImage': 'https://img.dandanplay.net/anime/17832_medium.jpg', 'AnimeRating': '5.4'},
        {'animeId': 17870, 'AnimeTitle': '药屋少女的呢喃', 'AnimeImage': 'https://img.dandanplay.net/anime/17870_medium.jpg', 'AnimeRating': '8.4'},
        {'animeId': 17916, 'AnimeTitle': '狩火之王 第2季', 'AnimeImage': 'https://img.dandanplay.net/anime/17916_medium.jpg', 'AnimeRating': '6.3'},
        {'animeId': 17930, 'AnimeTitle': '足球小将 第二季 世少篇', 'AnimeImage': 'https://img.dandanplay.net/anime/17930_medium.jpg', 'AnimeRating': '4.6'},
        {'animeId': 18066, 'AnimeTitle': '我心中的野兽 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/18066_medium.jpg', 'AnimeRating': '8.3'},
        {'animeId': 18132, 'AnimeTitle': '忍者神威', 'AnimeImage': 'https://img.dandanplay.net/anime/18132_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18164, 'AnimeTitle': '轮回七次的反派大小姐，在前敌国享受随心所欲的新婚生活', 'AnimeImage': 'https://img.dandanplay.net/anime/18164_medium.jpg', 'AnimeRating': '6.9'},
        {'animeId': 18182, 'AnimeTitle': '小不点', 'AnimeImage': 'https://img.dandanplay.net/anime/18182_medium.jpg', 'AnimeRating': '3.4'},
        {'animeId': 18217, 'AnimeTitle': '仙王的日常生活4', 'AnimeImage': 'https://img.dandanplay.net/anime/18217_medium.jpg', 'AnimeRating': '7.2'},
        {'animeId': 18229, 'AnimeTitle': '最强肉盾的迷宫攻略～拥有稀少技能体力9999的肉盾，被勇者队伍辞退了～', 'AnimeImage': 'https://img.dandanplay.net/anime/18229_medium.jpg', 'AnimeRating': '4.5'},
        {'animeId': 18312, 'AnimeTitle': '明治击剑－1874－', 'AnimeImage': 'https://img.dandanplay.net/anime/18312_medium.jpg', 'AnimeRating': '4.9'},
        {'animeId': 18346, 'AnimeTitle': '剑域风云 第三季', 'AnimeImage': 'https://img.dandanplay.net/anime/18346_medium.jpg', 'AnimeRating': '4.5'},
        {'animeId': 18376, 'AnimeTitle': '燃夏', 'AnimeImage': 'https://img.dandanplay.net/anime/18376_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18387, 'AnimeTitle': '师士传说', 'AnimeImage': 'https://img.dandanplay.net/anime/18387_medium.jpg', 'AnimeRating': '3.3'},
    ],
    airDay1: [
        {'animeId': 16786, 'AnimeTitle': '月光下的异世界之旅 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/16786_medium.jpg', 'AnimeRating': '6.1'},
        {'animeId': 17504, 'AnimeTitle': '为了在异世界也能抚摸毛茸茸而努力', 'AnimeImage': 'https://img.dandanplay.net/anime/17504_medium.jpg', 'AnimeRating': '5.5'},
        {'animeId': 17879, 'AnimeTitle': '休假日的坏人先生', 'AnimeImage': 'https://img.dandanplay.net/anime/17879_medium.jpg', 'AnimeRating': '5.2'},
        {'animeId': 17908, 'AnimeTitle': '魔法つかいプリキュア! 2', 'AnimeImage': 'https://img.dandanplay.net/anime/17908_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 17957, 'AnimeTitle': '至高之牌 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/17957_medium.jpg', 'AnimeRating': '5.9'},
        {'animeId': 18131, 'AnimeTitle': '怪兽 一百三情飞龙侍极', 'AnimeImage': 'https://img.dandanplay.net/anime/18131_medium.jpg', 'AnimeRating': '5.9'},
        {'animeId': 18398, 'AnimeTitle': '万古狂帝', 'AnimeImage': 'https://img.dandanplay.net/anime/18398_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18402, 'AnimeTitle': '暗芝居 第十二季', 'AnimeImage': 'https://img.dandanplay.net/anime/18402_medium.jpg', 'AnimeRating': '1.2'},
        {'animeId': 18403, 'AnimeTitle': '从红月开始', 'AnimeImage': 'https://img.dandanplay.net/anime/18403_medium.jpg', 'AnimeRating': '2.4'},
        {'animeId': 18436, 'AnimeTitle': '九天玄帝诀 第五季', 'AnimeImage': 'https://img.dandanplay.net/anime/18436_medium.jpg', 'AnimeRating': '0.0'},
    ],
    airDay2: [
        {'animeId': 17682, 'AnimeTitle': '北海道辣妹贼拉可爱', 'AnimeImage': 'https://img.dandanplay.net/anime/17682_medium.jpg', 'AnimeRating': '5.7'},
        {'animeId': 17937, 'AnimeTitle': '恶役千金lv.99～我是隐藏BOSS但不是魔王～', 'AnimeImage': 'https://img.dandanplay.net/anime/17937_medium.jpg', 'AnimeRating': '6.5'},
        {'animeId': 17999, 'AnimeTitle': '愚蠢天使与恶魔共舞', 'AnimeImage': 'https://img.dandanplay.net/anime/17999_medium.jpg', 'AnimeRating': '5.3'},
        {'animeId': 18082, 'AnimeTitle': '公主大人，接下來是“拷问”时间', 'AnimeImage': 'https://img.dandanplay.net/anime/18082_medium.jpg', 'AnimeRating': '6.5'},
        {'animeId': 18206, 'AnimeTitle': '奇异贤伴 黑色天使 第二部分', 'AnimeImage': 'https://img.dandanplay.net/anime/18206_medium.jpg', 'AnimeRating': '6.5'},
        {'animeId': 18338, 'AnimeTitle': '枕刀歌 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/18338_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18365, 'AnimeTitle': '吞噬星空 第四季', 'AnimeImage': 'https://img.dandanplay.net/anime/18365_medium.jpg', 'AnimeRating': '7.1'},
    ],
    airDay3: [
        {'animeId': 17134, 'AnimeTitle': '弱角友崎同学 2nd STAGE', 'AnimeImage': 'https://img.dandanplay.net/anime/17134_medium.jpg', 'AnimeRating': '5.5'},
        {'animeId': 17237, 'AnimeTitle': '欢迎来到实力至上主义教室 第三季', 'AnimeImage': 'https://img.dandanplay.net/anime/17237_medium.jpg', 'AnimeRating': '6.2'},
        {'animeId': 17327, 'AnimeTitle': '通灵王 续篇', 'AnimeImage': 'https://img.dandanplay.net/anime/17327_medium.jpg', 'AnimeRating': '4.8'},
        {'animeId': 17866, 'AnimeTitle': '异修罗', 'AnimeImage': 'https://img.dandanplay.net/anime/17866_medium.jpg', 'AnimeRating': '6.2'},
        {'animeId': 17884, 'AnimeTitle': '女王的手术刀', 'AnimeImage': 'https://img.dandanplay.net/anime/17884_medium.jpg', 'AnimeRating': '5.2'},
        {'animeId': 17910, 'AnimeTitle': '梦想成为魔法少女', 'AnimeImage': 'https://img.dandanplay.net/anime/17910_medium.jpg', 'AnimeRating': '7.5'},
        {'animeId': 18342, 'AnimeTitle': '真武巅峰 第三季', 'AnimeImage': 'https://img.dandanplay.net/anime/18342_medium.jpg', 'AnimeRating': '5.2'},
    ],
    airDay4: [
        {'animeId': 16982, 'AnimeTitle': '魔都精兵的奴隶', 'AnimeImage': 'https://img.dandanplay.net/anime/16982_medium.jpg', 'AnimeRating': '5.9'},
        {'animeId': 17883, 'AnimeTitle': '宝可梦 礼宾部', 'AnimeImage': 'https://img.dandanplay.net/anime/17883_medium.jpg', 'AnimeRating': '7.1'},
        {'animeId': 17926, 'AnimeTitle': '金属口红', 'AnimeImage': 'https://img.dandanplay.net/anime/17926_medium.jpg', 'AnimeRating': '5.9'},
        {'animeId': 18048, 'AnimeTitle': '勇气爆发BangBravern', 'AnimeImage': 'https://img.dandanplay.net/anime/18048_medium.jpg', 'AnimeRating': '7.0'},
        {'animeId': 18114, 'AnimeTitle': '到了30岁还是处男，似乎会变成魔法师', 'AnimeImage': 'https://img.dandanplay.net/anime/18114_medium.jpg', 'AnimeRating': '5.3'},
        {'animeId': 18156, 'AnimeTitle': '战国妖狐', 'AnimeImage': 'https://img.dandanplay.net/anime/18156_medium.jpg', 'AnimeRating': '6.7'},
        {'animeId': 18202, 'AnimeTitle': '月刊妄想科学', 'AnimeImage': 'https://img.dandanplay.net/anime/18202_medium.jpg', 'AnimeRating': '3.5'},
        {'animeId': 18284, 'AnimeTitle': '不死不灭', 'AnimeImage': 'https://img.dandanplay.net/anime/18284_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18330, 'AnimeTitle': '师兄啊师兄 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/18330_medium.jpg', 'AnimeRating': '9.0'},
        {'animeId': 18385, 'AnimeTitle': '深渊游戏', 'AnimeImage': 'https://img.dandanplay.net/anime/18385_medium.jpg', 'AnimeRating': '6.3'},
    ],
    airDay5: [
        {'animeId': 17320, 'AnimeTitle': '事与愿违的不死冒险者', 'AnimeImage': 'https://img.dandanplay.net/anime/17320_medium.jpg', 'AnimeRating': '6.6'},
        {'animeId': 17530, 'AnimeTitle': '佐佐木与文鸟小哔', 'AnimeImage': 'https://img.dandanplay.net/anime/17530_medium.jpg', 'AnimeRating': '6.7'},
        {'animeId': 17564, 'AnimeTitle': '迷宫饭', 'AnimeImage': 'https://img.dandanplay.net/anime/17564_medium.jpg', 'AnimeRating': '7.6'},
        {'animeId': 17575, 'AnimeTitle': '魔女与野兽', 'AnimeImage': 'https://img.dandanplay.net/anime/17575_medium.jpg', 'AnimeRating': '5.8'},
        {'animeId': 17712, 'AnimeTitle': '最弱的驯养师开启的捡垃圾的旅途。', 'AnimeImage': 'https://img.dandanplay.net/anime/17712_medium.jpg', 'AnimeRating': '6.7'},
        {'animeId': 17749, 'AnimeTitle': '秒杀外挂太强了，异世界的家伙们根本就不是对手。', 'AnimeImage': 'https://img.dandanplay.net/anime/17749_medium.jpg', 'AnimeRating': '5.2'},
        {'animeId': 17861, 'AnimeTitle': '福星小子 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/17861_medium.jpg', 'AnimeRating': '7.3'},
        {'animeId': 18181, 'AnimeTitle': 'BEYBLADE X', 'AnimeImage': 'https://img.dandanplay.net/anime/18181_medium.jpg', 'AnimeRating': '4.6'},
        {'animeId': 18252, 'AnimeTitle': '百炼成神2', 'AnimeImage': 'https://img.dandanplay.net/anime/18252_medium.jpg', 'AnimeRating': '8.2'},
        {'animeId': 18288, 'AnimeTitle': '人气温泉『异世界温泉』开拓记 ～40岁左右的温泉爱好者转世到了悠闲的温泉天堂～', 'AnimeImage': 'https://img.dandanplay.net/anime/18288_medium.jpg', 'AnimeRating': '4.6'},
        {'animeId': 18386, 'AnimeTitle': '十方武圣', 'AnimeImage': 'https://img.dandanplay.net/anime/18386_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18389, 'AnimeTitle': '太一剑仙传', 'AnimeImage': 'https://img.dandanplay.net/anime/18389_medium.jpg', 'AnimeRating': '1.2'},
    ],
    airDay6: [
        {'animeId': 16537, 'AnimeTitle': '治愈魔法的错误使用方法', 'AnimeImage': 'https://img.dandanplay.net/anime/16537_medium.jpg', 'AnimeRating': '6.8'},
        {'animeId': 17586, 'AnimeTitle': '不死不运', 'AnimeImage': 'https://img.dandanplay.net/anime/17586_medium.jpg', 'AnimeRating': '7.3'},
        {'animeId': 17826, 'AnimeTitle': '婚戒物语', 'AnimeImage': 'https://img.dandanplay.net/anime/17826_medium.jpg', 'AnimeRating': '5.3'},
        {'animeId': 18040, 'AnimeTitle': 'BUCCHIGIRI?!', 'AnimeImage': 'https://img.dandanplay.net/anime/18040_medium.jpg', 'AnimeRating': '6.3'},
        {'animeId': 18043, 'AnimeTitle': '碰之道', 'AnimeImage': 'https://img.dandanplay.net/anime/18043_medium.jpg', 'AnimeRating': '5.3'},
        {'animeId': 18060, 'AnimeTitle': 'Basue小酒馆', 'AnimeImage': 'https://img.dandanplay.net/anime/18060_medium.jpg', 'AnimeRating': '4.6'},
        {'animeId': 18088, 'AnimeTitle': '物理魔法使马修 第二季', 'AnimeImage': 'https://img.dandanplay.net/anime/18088_medium.jpg', 'AnimeRating': '6.2'},
        {'animeId': 18101, 'AnimeTitle': '指尖相触，恋恋不舍', 'AnimeImage': 'https://img.dandanplay.net/anime/18101_medium.jpg', 'AnimeRating': '6.8'},
        {'animeId': 18119, 'AnimeTitle': '百千家的妖怪王子', 'AnimeImage': 'https://img.dandanplay.net/anime/18119_medium.jpg', 'AnimeRating': '5.2'},
        {'animeId': 18192, 'AnimeTitle': '四处贴上吧！小狗', 'AnimeImage': 'https://img.dandanplay.net/anime/18192_medium.jpg', 'AnimeRating': '0.0'},
        {'animeId': 18248, 'AnimeTitle': '卡片战斗先导者 DivineZ', 'AnimeImage': 'https://img.dandanplay.net/anime/18248_medium.jpg', 'AnimeRating': '4.0'},
        {'animeId': 18391, 'AnimeTitle': 'Spare Me, Great Lord! 2nd Season', 'AnimeImage': 'https://img.dandanplay.net/anime/18391_medium.jpg', 'AnimeRating': '9.1'},
        {'animeId': 18409, 'AnimeTitle': '王者荣耀：荣耀之章', 'AnimeImage': 'https://img.dandanplay.net/anime/18409_medium.jpg', 'AnimeRating': '0.0'},
    ],

});
let risetime = ref('更新时间：2024-01-30');
</script>

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

