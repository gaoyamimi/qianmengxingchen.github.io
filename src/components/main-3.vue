<template>
    <!-- 第三屏 -->
    <div class="main-3">
        <!-- 时间 -->
        <div class="timeshow" id="time">
            <span class="time-text">{{ currentTime }}</span>
            <div class="time-info">
                <span>{{ currentDate }}&nbsp;年&nbsp;{{ currentMonth }}&nbsp;月&nbsp;{{ currentDay }}&nbsp;日&nbsp;</span>
                <span class="weekday">{{ currentWeekday }}</span>
            </div>
        </div>
        <!-- 音乐播放器 -->
        <div class="music-bfq">
            <div>
                <router-link to="/music">
                    <img id="album-art" :src="imageUrl" alt="album-art"></router-link>
            </div>
            <div class="music-content">
                <div class="music-info">
                    <h1 class="player-info">{{ currentPlayArtist }} - {{ currentPlaySong }}</h1>
                </div>
                <div class="music-button">
                    <i class="fas fa-step-backward fa-xs" @click="handlePrevButtonClick()"></i>
                    <i class="fas fa-play fa-xs" @click="handlePlayButtonClick()"></i>
                    <i class="fas fa-pause fa-xs" @click="handlePauseButtonClick()"></i>
                    <i class="fas fa-step-forward fa-xs" @click="handleNextButtonClick()"></i>
                </div>
                <div class="music-progress">
                    <div class="g-progress" :style="`--progress: ${progressPercentage}%`"></div>
                </div>
            </div>
        </div>
        <!-- 歌词 -->
        <div class="lyric">
            <div class="color-text">
                <span id="lyric_text">{{ lyricText }}</span>
            </div>
        </div>
        <!-- 天气 -->
        <div class="weather">
            <div class="weather-icon">
                <img :src="weatherIcon" alt="weather" />
            </div>
            <div class="weather-content">
                <span>{{ city }}</span>&nbsp;
                <span>{{ weather }}</span>&nbsp;
                <span>{{ temperature }}</span>&nbsp;
                <span>{{ windDirection }}</span>&nbsp;
                <span>{{ windPower }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="main-3">
import { ref, onMounted, onUnmounted } from "vue";
import axios from 'axios';



onMounted(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'myhk';
    script.src = 'https://myhkw.cn/api/player/168460845260';
    script.setAttribute('key', '168460845260');
    script.setAttribute('m', '1');
    document.documentElement.appendChild(script);
});
const hideElements = () => {
    const myhkplayerDiv = document.getElementById('myhkplayer');
    const myhkLrcDiv = document.getElementById('myhkLrc');
    const myhkTipsDiv = document.getElementById('myhkTips');

    if (myhkplayerDiv) {
        myhkplayerDiv.style.visibility = 'hidden';
    }
    if (myhkLrcDiv) {
        myhkLrcDiv.style.display = 'none';
    }
    if (myhkTipsDiv) {
        myhkTipsDiv.style.display = 'none';
    }
};

let observer: MutationObserver | null = null;

onMounted(() => {
    observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                hideElements();
            }
        });
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});

hideElements();
//--------------------------------------------------------------------------

//歌曲信息DOM

const imageUrl = ref<string>('https://via.placeholder.com/150?text=%20'); // 封面
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
    setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (interval) clearInterval(interval);
});
//--------------------------------------------------------------------------
//歌词

const lyricText = ref('加载中...');
let lyric_text: MutationObserver | null = null;
let checkInterval: number | null = null;

const startObserving = () => {
    const target = document.querySelector('#myhkLrc');
    if (target) {
        lyric_text = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    const myhkLrcElement = target;
                    const myhknowElement = myhkLrcElement.querySelector('.myhknow');
                    if (myhknowElement) {
                        lyricText.value = myhknowElement.textContent || '加载中...';
                        break;
                    }
                }
            }
        });
        lyric_text.observe(target, { childList: true, subtree: true });
        if (checkInterval) {
            clearInterval(checkInterval);
        }
    }
};

onMounted(() => {
    checkInterval = setInterval(startObserving, 500); // 每500ms检查一次
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    if (checkInterval) {
        clearInterval(checkInterval);
    }
});
//--------------------------------------------------------------------------
// 播放器按钮
//播放
//vue3尽量避免这样直接操作DOM,我这里图方便
const handlePlayButtonClick = () => {
    const playButton = document.querySelector('.myhkicon-playCircle') as HTMLElement;
    playButton?.click();

    const playIcon = document.querySelector('.fa-play') as HTMLElement;
    if (playIcon) {
        playIcon.style.display = 'none';
    }

    const pauseIcon = document.querySelector('.fa-pause') as HTMLElement;
    if (pauseIcon) {
        pauseIcon.style.display = 'inline-block';
    }
};

//暂停
//vue3尽量避免这样直接操作DOM,我这里图方便
const handlePauseButtonClick = () => {
    const iconElement = document.querySelector('.myhkicon-pauseCircle');

    if (iconElement) {

        iconElement.dispatchEvent(new Event('click'));

        const playIcon = document.querySelector('.fa-play') as HTMLElement;
        const pauseIcon = document.querySelector('.fa-pause') as HTMLElement;

        if (playIcon) {
            playIcon.style.display = 'inline-block';
        }
        if (pauseIcon) {
            pauseIcon.style.display = 'none';
        }
    }
};

//上一首
//vue3尽量避免这样直接操作DOM,我这里图方便
const handlePrevButtonClick = () => {
    const prevButton = document.querySelector('.myhkprev') as HTMLElement | null;
    if (prevButton) {
        prevButton.click();


        const playButton = document.querySelector('.fa-play') as HTMLElement | null;
        const pauseButton = document.querySelector('.fa-pause') as HTMLElement | null;
        if (playButton) playButton.style.display = 'none';
        if (pauseButton) pauseButton.style.display = 'inline-block';
    }
};


//下一首
//vue3尽量避免这样直接操作DOM,我这里图方便
const handleNextButtonClick = () => {
    const nextButton = document.querySelector('.myhknext');

    if (nextButton) {
        (nextButton as HTMLElement).click();

        const playButton = document.querySelector('.fa-play');
        const pauseButton = document.querySelector('.fa-pause');

        if (playButton) {
            (playButton as HTMLElement).style.display = 'none';
        }
        if (pauseButton) {
            (pauseButton as HTMLElement).style.display = 'inline-block';
        }
    }
};
//--------------------------------------------------------------------------
// 日期时间
const currentTime = ref('');
const currentDate = ref('');
const currentMonth = ref('');
const currentDay = ref('');
const currentWeekday = ref('');

const updateDateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString('zh-CN');
    currentDate.value = now.getFullYear().toString();
    currentMonth.value = (now.getMonth() + 1).toString().padStart(2, '0');
    currentDay.value = now.getDate().toString().padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    currentWeekday.value = weekdays[now.getDay()];
};

let intervalId: number | undefined;

onMounted(() => {
    updateDateTime();
    intervalId = setInterval(updateDateTime, 1000);
});

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId);
});



//---------------------------------------------------------------------------------------------------------

//天气
const apiKeyAmap = '0ea4f86a43f78a2972955f0973f05fb0';
const city = ref('加载中');
const weather = ref('加载中');
const temperature = ref('');
const windDirection = ref('失败');
const windPower = ref('');
const weatherIcon = ref('https://weather.cma.cn/static/img/w/icon/w0.png');

type WeatherIconMap = {
    晴: string;
    多云: string;
    阴: string;
    小雨: string;
};

const weatherIconMap: WeatherIconMap = {
    晴: "w0.png",
    多云: "w1.png",
    阴: "w2.png",
    小雨: "w7.png"
};

const fetchWeatherData = async () => {
    try {
        const ipResponse = await axios.get(`https://restapi.amap.com/v3/ip?key=${apiKeyAmap}`);
        const adcode = ipResponse.data.adcode;

        const weatherResponse = await axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=${apiKeyAmap}`);
        const weatherInfo = weatherResponse.data.lives[0];

        city.value = weatherInfo.city.replace("市", "");
        weather.value = weatherInfo.weather;
        temperature.value = weatherInfo.temperature + '℃';
        windDirection.value = weatherInfo.winddirection + '风';
        windPower.value = weatherInfo.windpower + '级';
        const iconKey = weatherInfo.weather as keyof WeatherIconMap;
        weatherIcon.value = `https://weather.cma.cn/static/img/w/icon/${weatherIconMap[iconKey] || 'w0.png'}`;
    } catch (error) {
        console.error('获取天气信息失败:', error);
    }
};

onMounted(() => {
    fetchWeatherData();
});
</script>


