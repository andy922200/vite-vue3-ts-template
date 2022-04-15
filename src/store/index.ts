import {
    InjectionKey 
} from 'vue'
import {
    createStore, useStore as baseUseStore, Store 
} from 'vuex'
import demoModule from './modules/demo'

// vue-i18n start
import {
    Locales
} from '../../plugins/i18n/config/locales'
import {
    defaultLocale
} from '../../plugins/i18n/config'
// vue-i18n end

// define your own rootState
import dayjs from 'dayjs'
const rootState = {
    today: dayjs(),
    selectedLanguage: defaultLocale
}

// get the type of rootState 
export const IRootState = () => (rootState)
export type RootState = ReturnType<typeof IRootState>

// get correct moduleStates and combined with rootState
const modules = {
    demo: demoModule
}
type StoreState<T> = T extends { state: infer S } ? S : T
type ModuleStates<T> = {
    [key in keyof T]: StoreState<T[key]>
}
export type State = ModuleStates<typeof modules & RootState>;
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<RootState>({
    state: rootState,
    getters: {
        today: state => state.today,
        selectedLanguage: state => state.selectedLanguage
    },
    mutations: {
        setToday(state, time: string) {
            state.today = dayjs(time)
        },
        setLanguage(state, payload: Locales) {
            state.selectedLanguage = payload
        }
    },
    actions: {
        selectNewDefaultLanguage({ getters, commit }, lang: Locales) {
            const { selectedLanguage }: { selectedLanguage: Locales } = getters
            if (lang !== selectedLanguage) {
                commit('setLanguage', lang)
            }
        }
    },
    modules
})

export function useStore() {
    return baseUseStore(key)
}