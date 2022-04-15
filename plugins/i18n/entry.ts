import {
    createI18n
} from 'vue-i18n'

import {
    messages, defaultLocale
} from './config/index'

const i18n = createI18n({
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale
})

export default i18n