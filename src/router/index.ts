//创建一个路由并暴露出去
import { createRouter, createWebHistory } from 'vue-router';
import music from "@/views/music.vue";
//创建路由
const router = createRouter({
    //路由模式
    history: createWebHistory(),
    //路由配置
    routes: [
        {
            path: '/music',
            name: 'music',
            component: music
        },
    ]
})

export default router
