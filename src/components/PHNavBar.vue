<template>
  <header class="sticky top-0 h-16 w-full z-50">
    <div class="max-w-screen-2xl mx-auto p-4 flex justify-between">
      <RouterLink to="/" class="text-2xl font-bold dark:text-gray-100"
        >PHSZ</RouterLink
      >
      <nav class="flex shrink-0">
        <ul class="flex space-x-8 items-center">
          <li v-for="link in links" :key="link.text" class="h-fit">
            <RouterLink
              :to="link.path"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              active-class="text-gray-900 dark:text-gray-100"
              exact
            >
              {{ link.text }}</RouterLink
            >
          </li>
          <PHSwitchAppearance />
          <PHSocialLink
            href="https://github.com/phsz-dev/"
            class="dark:text-gray-100"
          >
            <span class="phi-social-github"></span>
          </PHSocialLink>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import PHSwitchAppearance from './PHSwitchAppearance.vue'
import PHSocialLink from './PHSocialLink.vue'

const links = [
  { path: '/home', text: '主页' },
  { path: '/role', text: '角色扮演' },
  { path: '/cases', text: '病例' },
  { path: '/me', text: '我的' },
  { path: '/admin', text: '管理' }
]
</script>
