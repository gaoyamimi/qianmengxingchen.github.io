<template>
    <div class="bg-all">
        <img id="bg" :src="backgroundImageLink" alt="Background">
        <!-- 下方为背景灰色蒙版 -->
        <div class="overlay"></div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue';
import { backgroundImageLink, onComponentMounted } from '@/assets/ts/backgroundSet';

// 组件挂载时调用
onMounted(() => {
    onComponentMounted();
});
</script>
  

<style scoped>
/* 背景 */

.bg-all {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.bg-all img {
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
}

/* 背景END */
</style>