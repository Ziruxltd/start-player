<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ number: number }>()

const count = ref(0)
</script>

<template>
  <div class="circle">
    {{number}}
  </div>
</template>

<style scoped>
.circle {
  transition: transform 0.3s ease-in-out;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #42b883;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
}
</style>
