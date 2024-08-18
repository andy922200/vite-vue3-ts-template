import dayjs from 'dayjs'
import { defineStore } from 'pinia'

// vue-i18n start
import { defaultLocale } from '../../plugins/i18n/config'
import { Locales } from '../../plugins/i18n/config/locales'
// vue-i18n end

const mainState = {
  today: dayjs(),
  selectedLanguage: defaultLocale,
}

// get the type of mainState
export const IMainState = () => mainState
export type RootState = ReturnType<typeof IMainState>

export const useMainStore = defineStore('main', {
  state: () => mainState,
  actions: {
    setToday(time: string) {
      this.today = dayjs(time)
    },
    setLanguage(payload: Locales) {
      this.selectedLanguage = payload
    },
  },
})
