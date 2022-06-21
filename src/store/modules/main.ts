import {
    defineStore 
} from 'pinia'
import dayjs from 'dayjs'

// vue-i18n start
import {
    Locales
} from '../../plugins/i18n/config/locales'
import {
    defaultLocale
} from '../../plugins/i18n/config'
// vue-i18n end

const mainState = {
    today: dayjs(),
    selectedLanguage: defaultLocale
}

// get the type of mainState 
export const IMainState = () => (mainState)
export type RootState = ReturnType<typeof IMainState>

export const useMainStore = defineStore('main', {
    state: () => (mainState),
    actions: {
        setToday(time: string) {
            this.today = dayjs(time)
        },
        setLanguage(payload: Locales) {
            this.selectedLanguage = payload
        }
    }
})