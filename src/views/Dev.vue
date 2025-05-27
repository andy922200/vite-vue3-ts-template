<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useDemoStore } from '@/store/demo'
import { useMainStore } from '@/store/main'

const route = useRoute()
const path = computed(() => route.path)
const demoStore = useDemoStore()
const mainStore = useMainStore()
const { selectedLanguage } = storeToRefs(mainStore)
const { user } = storeToRefs(demoStore)
const userEmail = user.value.email
</script>

<template>
  <div class="dev flex flex-wrap justify-center">
    <h1 class="my-1 w-full text-center">Dev Page</h1>
    <h2 id="path" class="my-1 w-full text-center">Path: {{ path }}</h2>
    <h3 class="my-1 w-full text-center">
      This is value 'selectedLanguage: {{ selectedLanguage }}'.
    </h3>
    <h3 class="my-1 w-full text-center">This is value 'userEmail: {{ userEmail }}'.</h3>
  </div>
</template>
