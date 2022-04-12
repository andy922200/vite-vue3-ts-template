import {
    GetterTree, ActionTree, MutationTree
} from 'vuex'

import {
    RootState
} from '../index'

const demoState = {
    user: {
        name: {
            fullName: 'MyFullName',
            nickname: 'MyNickName'
        },
        email: 'test@example.com',
        id: 1
    }
}

export const demoStateInterface = () => (demoState)
export type DemoState = ReturnType<typeof demoStateInterface>

const getters: GetterTree<DemoState, RootState> = {
    user: (state: DemoState) => state.user
}

const mutations: MutationTree<DemoState> = {
    setUser(state: DemoState, payload: DemoState['user']) {
        state.user = payload
    }
}

const actions: ActionTree<DemoState, RootState> = {

}

const demoModule = {
    namespaced: true,
    state: demoState,
    getters,
    actions,
    mutations
}

export default demoModule