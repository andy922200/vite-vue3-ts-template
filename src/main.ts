import {
    createApp 
} from 'vue'
import App from './App.vue'
import router from './router'
import {
    store, key 
} from './store'
import VueI18n from './plugins/i18n/entry'

const app = createApp(App)
app.use(VueI18n)
app.use(store, key)
app.use(router)
app.mount('#app')