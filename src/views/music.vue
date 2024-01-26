<template>
    <div class="full-music">
        <background />

        <!-- 分开歌词和播放器 -->
        <div class="mian-music">
            <div class="box-music">
                <div class="music">
                    <div class="img-music">
                        <img :src="imageUrl" alt="封面">
                    </div>
                    <h1>{{ currentPlayArtist }}</h1>
                    <div>
                        <p>歌手:<span>{{ currentPlaySong }}</span></p>
                    </div>
                    <div>
                        <p>专辑:<span>{{ albumTitle }}</span></p>
                    </div>
                </div>
            </div>
            <div class="lyric-lyric">
                <ul class="lyric-list">
                    <li v-for="(item, index) in displayTexts" :key="index" :class="{ active: index === 5 }">{{ item }}</li>
                </ul>
                <div class="g-progress" :style="`--progress: ${progressPercentage}%`"></div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts" name="music">
import { ref, onMounted, onUnmounted, } from 'vue';
import background from "@/components/background.vue";


// 歌词DOM部
const displayTexts = ref(Array(11).fill(''));

const updateDisplayTexts = (targetElement: Element, newIndex: number) => {
    const liElements = targetElement.querySelectorAll('li');
    for (let i = 0; i < 11; i++) {
        const liIndex = newIndex - 5 + i;
        displayTexts.value[i] = liIndex >= 0 && liIndex < liElements.length ? liElements[liIndex].textContent || '' : '';
    }
};

let observer: MutationObserver | null = null;
let intervalId: number | null = null;

const startObserving = () => {
    const target = document.querySelector('#myhkLrc');
    if (target) {
        observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    const newIndex = Array.from(target.querySelectorAll('li')).findIndex(el => el.classList.contains('myhknow'));
                    if (newIndex !== -1) {
                        updateDisplayTexts(target, newIndex);
                    }
                }
            });
        });

        observer.observe(target, { childList: true, subtree: true });
        const initialIndex = Array.from(target.querySelectorAll('li')).findIndex(el => el.classList.contains('myhknow'));
        if (initialIndex !== -1) {
            updateDisplayTexts(target, initialIndex);
        }
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
};

onMounted(() => {
    intervalId = setInterval(startObserving, 100);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
//--------------------------------------------------------------------------

//歌曲信息DOM

const imageUrl = ref<string>(''); // 封面
const albumTitle = ref<string>(''); // 专辑名
const currentPlayArtist = ref<string>(''); // 歌手名
const currentPlaySong = ref<string>(''); // 歌曲名
const progressPercentage = ref<number>(0); // 进度百分比


let interval: number | undefined = undefined;

const fetchPlayerInfo = () => {
    const playerElement = document.querySelector('#myhkplayer');
    if (playerElement) {
        const imgSrc = playerElement.querySelector('.myhkblur-img img')?.getAttribute('src');
        const albumText = playerElement.querySelector('.myhkalbum span')?.textContent;
        const currentPlayLi = playerElement.querySelector('.mCSB_container li.myhknow');

        if (imgSrc) imageUrl.value = imgSrc;
        if (albumText) albumTitle.value = albumText;
        // if (widthStyle) {
        //     const match = widthStyle.match(/width:\s*(\d+)%/);
        //     if (match) progressPercentage.value = match[1];
        // }
        if (currentPlayLi) {
            const text = currentPlayLi.textContent?.replace('当前播放', '').trim();
            if (text) {
                const parts = text.split(' - ');
                if (parts.length >= 2) {
                    currentPlayArtist.value = parts[0].split('>')[1].trim(); // 从“>”分割并取第二部分
                    currentPlaySong.value = parts[1];
                }
            }
        }
    }
};




const updateTime = () => {
    const timeText = document.querySelector('.myhktime')?.textContent;
    if (timeText) {
        const [currentTimeStr, totalTimeStr] = timeText.split(' / ');
        if (currentTimeStr && totalTimeStr) {
            const currentTime = convertTimeToSeconds(currentTimeStr);
            const totalTime = convertTimeToSeconds(totalTimeStr);
            if (totalTime > 0) {
                progressPercentage.value = (currentTime / totalTime) * 100;
                updateProgressBar(progressPercentage.value);
            }
        }
    }
};

const convertTimeToSeconds = (timeStr: string): number => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
};

const updateProgressBar = (percentage: number) => {
    const progressBar = document.querySelector('.g-progress') as HTMLElement;
    if (progressBar) {
        progressBar.style.setProperty('--progress', `${percentage}%`);
    }
};

onMounted(() => {
    interval = setInterval(fetchPlayerInfo, 1000);
    setInterval(updateTime, 1000); // 每秒更新一次进度// 1000ms = 1秒
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
});
</script>
  
<style scoped>
.full-music {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 1);
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.background img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.167);
    z-index: 10;
}

.mian-music {
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.music {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 250px 0 0 300px;
}

.img-music img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 40px rgb(0, 0, 0);
    /* 添加边缘阴影 */
}

.box-music p {
    font-size: 20px;
    margin: 0 0;
}

.box-music h1 {
    font-size: 40px;
}

.lyric-lyric {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 135px 450px 0 0;
}

.lyric-list {
    display: flex;
    font-size: 25px;
    list-style-type: none;
    flex-direction: column;
    align-items: center;
    color: #ff8686;
}

.lyric-list li {
    margin: 5px 0;
}

.active {
    font-size: 35px;
    color: #ff3636;
    margin: 10px 0 !important;
}

.g-progress {
    margin: auto;
    width: 350px;
    height: 7px;
    border-radius: 25px;
    background: linear-gradient(90deg, #0f0, #0ff var(--progress), #bbbbbb 0);
    border: 1px solid #eee;
    transition: .3s --progress;
    margin: 20px 0 0 0;
}
</style>
