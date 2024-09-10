<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useStore from '../store/index'

const route = useRoute()
const path = computed(() => route.path)
const { main, demo } = useStore()
const { selectedLanguage } = storeToRefs(main)
const { user } = storeToRefs(demo)
const userEmail = user.value.email
</script>

<template>
  <div class="dev flex flex-wrap justify-center">
    <h1 class="my-1 w-full text-center">Dev Page</h1>
    <h2 class="my-1 w-full text-center">Path: {{ path }}</h2>
    <h3 class="my-1 w-full text-center">
      This is value 'selectedLanguage: {{ selectedLanguage }}'.
    </h3>
    <h3 class="my-1 w-full text-center">This is value 'userEmail: {{ userEmail }}'.</h3>
  </div>
</template>
