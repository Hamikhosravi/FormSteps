// import './assets/main.css'
import './assets/tailwindStyle.css'
import './assets/general.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router);

app.mount('#app');
