// backgroundManager.ts

import { ref } from 'vue';

// 包含所有背景链接的数组
const BackgroundList = [
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VabnhPZXVLMkJKRW5EQkpGdC1Xd0lnQkU5cmZ0Mnhpd2NMNUpaRTQxQnk3OGc_ZT1KZ2lnWW8.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VVcVptdUVQeWVWRmxTaVVWWG9hZ000QlN5Z0l2T1hpZ09yWkRpN3IweWkwTUE.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VlTW1EWW9fREpSRGdfOGdDWEZ4NG1vQjhRRkFxMWRhOWF4TjRwazh2RnUxdGc.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VRcXRKNGpLS0lWQ2h6NHFwZEZSQmFVQmllVHpzZDk4Qmc0R0tra3dJMEo4U1E_ZT1mU3ZhV0Y.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VZclIyYTVhR1ZKQnYwQTBldU01bHNJQkh3VkdWQkRZUmlINmNtME1FMjYwSHc.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VZX1VSVmx6Z081S25WbEg3enhNcENJQkhual9lM3M3bWhXMWtJcW90WTE0Q3c_ZT1hMGZmMjk.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VYUjRQcVRnQnM5R250R2VQRWVndDRjQk5qa21IeUx3d3EyWE1yMm9OQzh3MVE_ZT01d213dFg.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VmNGhMYXNNdU1WT2dxVWhWTVdZSTVRQkE5dnhrOHFmZjFLN2VRNUJJVFdxemc.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VVOUMwbllCSGR0RnJfT1dmMnRJTjNvQlpOZ0xsakNzZnRQWjVJMTJvY3dubFE.webp",
    "https://dlink.host/sharepoint/aHR0cHM6Ly9tZW5taWFvY3ktbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwveGlhb3F2YW5fMzY1X21lbmdhY2dfY29tL0VZM2NGNU1wVUNSSm9qTkZYWGhJMkN3Ql9JUEowVDIwbDhudHZ4X2xtcG02aGc.webp"
];

// 用于存储随机选择的背景图片链接
const backgroundImageLink = ref('');

// 当组件挂载时调用的函数
async function onComponentMounted(): Promise<void> {
    const cachedImageLink = await getCachedImageLink();

    if (cachedImageLink) {
        backgroundImageLink.value = cachedImageLink;
    } else {
        const randomIndex = Math.floor(Math.random() * BackgroundList.length);
        const selectedBackgroundLink = BackgroundList[randomIndex];

        await preloadImage(selectedBackgroundLink);
        backgroundImageLink.value = selectedBackgroundLink;
    }
}

// 预加载图片，确保图片被浏览器缓存
async function preloadImage(imageUrl: string): Promise<void> {
    return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => resolve();
    });
}

// 从浏览器缓存中获取背景图片链接
async function getCachedImageLink(): Promise<string | null> {
    return new Promise<string | null>((resolve) => {
        if (!backgroundImageLink.value) {
            resolve(null);
            return;
        }

        const img = new Image();
        img.src = backgroundImageLink.value;
        img.onload = () => resolve(backgroundImageLink.value);
        img.onerror = () => resolve(null);
    });
}

export { backgroundImageLink, onComponentMounted };
