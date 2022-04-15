<script lang="ts">
import {
    ref, defineComponent
} from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup(){
        const count = ref(0)

        return {
            count
        }
    }
})
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>T<span>EST</span></h2>
    <div class="example">
        DIV-EXAMPLE
    </div>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style lang="scss" scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

h2 {
    span {
        color: blue;
        font-weight: 800;
    }
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}

.example {
    display: grid;
    transition: all 0.5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}
</style>
