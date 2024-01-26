import { createApp } from 'vue';

const app = createApp({
  template: `
    <div id="app"></div>
  `,
  mounted() {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("id", "myhk");
    script.setAttribute("src", "https://myhkw.cn/api/player/168460845260");
    script.setAttribute("key", "168460845260");
    script.setAttribute("m", "1");
    document.documentElement.appendChild(script);
  },
});

app.mount('#music');
