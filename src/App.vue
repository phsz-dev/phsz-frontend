<script setup lang="ts">
import PHMessage from './components/PHMessage.vue'
import PHNavBar from './components/PHNavBar.vue'
</script>

<template>
  <div class="flex h-screen w-screen flex-col overflow-x-hidden">
    <PHNavBar />
    <PHMessage />

    <div class="h-0 grow">
      <RouterView v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <!-- <Component :is="Component" :key="route.path" /> -->
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
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
    opacity 0.5s,
    transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-1%);
}
</style>
