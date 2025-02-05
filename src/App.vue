<template>
  <div
    class="app-container"
    @mousedown="handleOnTouch"
    @touchstart="handleOnTouch"
    @mouseup="handleOnLeave"
    @touchend="handleOnLeave">
    <div class="circle-container">
      <h2 v-if="!timer.isTimerRunning()">Touch to start</h2>
      <CountDown v-if="timer.isTimerRunning()" :number="timer.getTime()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CountDown from './components/CountDown.vue'
import Timer from './classes/timer.ts'

const timer = ref(new Timer(4))

function handleOnTouch () {
  timer.value.start()
}

function handleOnLeave () {
  timer.value.reset()
  timer.value.stop()
}
</script>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}

.circle-container {
  z-index: -1;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease-in-out;
}
</style>
