import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import VueI18n from './plugins/i18n/entry'
import router from './router'

const app = createApp(App)
app.use(VueI18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
