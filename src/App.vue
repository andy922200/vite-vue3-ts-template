<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import { LayoutLanguages, Locales } from './plugins/i18n/config/locales'
import { useMainStore } from './store/modules/main'

const route = useRoute()
const mainStore = useMainStore()
const { locale } = useI18n()
const routeName = computed(() => route.name?.valueOf().toString())
const selectedLanguageModel = computed({
  get() {
    return mainStore.selectedLanguage
  },
  set(value: Locales) {
    locale.value = value
    mainStore.setLanguage(value)
  },
})
</script>

<template>
  <div class="flex justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>

  <div class="flex items-center justify-center">
    <router-link :to="{ name: 'index' }" class="mx-2">To Home</router-link>
    <router-link :to="{ name: 'test' }" class="mx-2">To Test</router-link>
    <select v-model="selectedLanguageModel">
      <option v-for="list in LayoutLanguages" :key="list.param" :value="list.param">
        {{ list.title }}
      </option>
    </select>
  </div>

  <div class="my-2 w-full">
    <p v-if="routeName" class="w-full text-center">{{ $t(`${routeName}.title`) }}</p>
  </div>

  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>

  <!-- render route here -->
  <router-view></router-view>
</template>
