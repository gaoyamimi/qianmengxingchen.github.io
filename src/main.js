import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import './assets/css/theme.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')