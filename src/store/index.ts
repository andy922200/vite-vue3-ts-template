import {
    createStore
} from 'vuex'
import dayjs from 'dayjs'

import {
    RootState
} from './declarations/index'

const state: RootState = {
    today: dayjs(),
    selectedLanguage: 'zh-tw'
}

const store = createStore({
    state,
    getters: {
        today: state => state.today,
        selectedLanguage: state => state.selectedLanguage
    },
    mutations: {
        setToday(state, time: string) {
            state.today = dayjs(time)
        },
        setLanguage(state, payload: string) {
            state.selectedLanguage = payload
        }
    },
    actions: {
        selectNewDefaultLanguage({ getters, commit }, lang: string) {
            const { selectedLanguage }: { selectedLanguage: string } = getters
            if (lang !== selectedLanguage) {
                commit('setLanguage', lang)
            }
        }
    },
    modules: {
        // demoModule
    }
})


export default store