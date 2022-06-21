import {
    defineStore 
} from 'pinia'

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

export const IDemoState = () => (demoState)
export type DemoState = ReturnType<typeof IDemoState>

export const useDemoStore = defineStore('demo', {
    state: () => (demoState),
    actions: {
        setUser(payload: DemoState['user']) {
            this.user = payload
        }
    }
})
