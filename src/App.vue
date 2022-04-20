<script lang="ts">
import {
    defineComponent, computed
} from 'vue'
import {
    useI18n
} from 'vue-i18n'
import {
    useRoute
} from 'vue-router'
import {
    useStore
} from './store'
import {
    LayoutLanguages
} from '../plugins/i18n/config/locales'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld
    },
    setup (){
        const route = useRoute()
        const store = useStore()
        const { locale } = useI18n()
        const routeName = computed(()=>route.name)

        return {
            selectedLanguageModel: computed({
                get () {
                    return store.state.selectedLanguage
                },
                set (value: string){
                    locale.value = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            LayoutLanguages,
            routeName
        }
    }
})
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <select v-model="selectedLanguageModel">
        <option 
            v-for="list in LayoutLanguages" 
            :value="list.param" 
            :key="list.param"
        >{{list.title}}</option>
    </select>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <router-link :to="{name:'index'}">To Home</router-link>
    <br>
    <router-link :to="{name:'test'}">To Test</router-link>
    <p v-if="routeName">{{$t(`${routeName}.title`)}}</p>
    <!-- render route here -->
    <router-view></router-view>
</template>

<style lang="scss" src="./styles/App.scss"></style>
