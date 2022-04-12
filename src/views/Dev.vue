<script lang="ts">
import {
    computed, defineComponent
} from 'vue'
import {
    useRoute
} from 'vue-router'
import {
    useStore
} from '../store'

export default defineComponent({
    name: 'DevPage',
    setup(){
        const route = useRoute()
        const path = computed(()=>route.path)
        const store = useStore()
        const selectedLanguage = store.state.selectedLanguage
        const userEmail = store.state.demo.user.email

        return {
            path,
            selectedLanguage,
            userEmail
        }
    }
})
</script>

<template>
    <h1>Dev Page</h1>
    <h2>Path: {{path}}</h2>
    <h3>This is value 'selectedLanguage: {{selectedLanguage}}' in vuex-root.</h3>
    <h3>This is value 'userEmail: {{userEmail}}' in vuex-demo-module.</h3>
</template>