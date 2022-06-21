import {
    createApp 
} from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import VueI18n from './plugins/i18n/entry'

const app = createApp(App)
app.use(VueI18n)
app.use(pinia)
app.use(router)
app.mount('#app')