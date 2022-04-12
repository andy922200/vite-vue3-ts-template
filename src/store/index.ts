import {
    InjectionKey 
} from 'vue'
import {
    createStore, useStore as baseUseStore, Store 
} from 'vuex'
import demoModule from './modules/demo'

// define your own rootState
import dayjs from 'dayjs'
const rootState = {
    today: dayjs(),
    selectedLanguage: 'zh-tw'
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
    modules
})

export function useStore() {
    return baseUseStore(key)
}