<script setup lang="ts">
import PHNavBar from './components/PHNavBar.vue'
import PHFooter from './components/PHFooter.vue'
</script>

<template>
  <PHNavBar />
  <RouterView v-slot="{ Component }">
    <Transition name="slide" mode="out-in">
      <Component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
  <PHFooter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
