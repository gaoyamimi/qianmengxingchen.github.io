import { createRouter, createWebHistory } from "vue-router";
// 页面
import home from '@/components/top/home.vue'
import article from '@/components/top/article.vue'
import games from '@/components/top/games.vue'
import anime from '@/components/top/anime.vue'
import about from '@/components/top/about.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [ //路由规则
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/article',
            component: article
        },
        {
            path: '/games',
            component: games
        },
        {
            path: '/anime',
            component: anime
        },
        {
            path: '/about',
            component: about
        },
    ]
})

export default router