import {
    GetterTree, ActionTree, MutationTree
} from 'vuex'

import {
    RootState
} from '../declarations/index'

import {
    DemoModule
} from '../declarations/demo'

const state: DemoModule.State = {
    user: undefined
}

const getters: GetterTree<DemoModule.State, RootState> = {
    user: (state: DemoModule.State) => state.user
}

const mutations: MutationTree<DemoModule.State> = {
    setUser(state: DemoModule.State, payload: DemoModule.User) {
        state.user = payload
    }
}

const actions: ActionTree<DemoModule.State, RootState> = {

}

const data = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default data