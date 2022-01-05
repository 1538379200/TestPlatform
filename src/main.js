import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register';
import store from './store/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
