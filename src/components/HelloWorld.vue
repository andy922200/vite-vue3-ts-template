<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const count = ref(0)
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <h1 class="my-2 w-full text-center">{{ props.msg }}</h1>
    <h2 class="my-2 w-full text-center">T<span>EST</span></h2>
    <div class="example my-2 w-full text-center">DIV-EXAMPLE</div>

    <p class="w-full text-center">See <code>README.md</code> for more information.</p>

    <button type="button" class="my-2 rounded bg-blue-200 p-2" @click="count++">
      count is: {{ count }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
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
