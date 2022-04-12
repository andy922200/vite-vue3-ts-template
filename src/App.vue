<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <router-link :to="{name:'home'}">To Home</router-link>
    <br>
    <router-link :to="{name:'test'}">To Test</router-link>
    <!-- render route here -->
    <router-view></router-view>
</template>

<style lang="scss" src="./styles/App.scss"></style>
