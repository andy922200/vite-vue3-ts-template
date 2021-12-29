<script lang="ts">
import {
    computed, defineComponent
} from 'vue'
import {
    useRoute
} from 'vue-router'

export default defineComponent({
    name: 'DevPage',
    setup(){
        const route = useRoute()
        const path = computed(()=>route.path)

        return {
            path
        }
    }
})
</script>

<template>
    <h1>Dev Page</h1>
    <h2>Path: {{path}}</h2>
</template>