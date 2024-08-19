import { createI18n } from 'vue-i18n'

import { defaultLocale, messages } from './config/index'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
})

export default i18n
