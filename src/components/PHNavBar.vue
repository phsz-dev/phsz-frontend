<template>
  <header class="sticky top-0 z-50 h-16 w-full">
    <div class="mx-auto flex max-w-screen-2xl justify-between p-4">
      <RouterLink to="/" class="text-2xl font-bold dark:text-gray-100"
        >PHSZ</RouterLink
      >
      <nav class="flex shrink-0">
        <ul class="flex items-center space-x-8">
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
import { computed } from 'vue'

import PHSwitchAppearance from './PHSwitchAppearance.vue'
import PHSocialLink from './PHSocialLink.vue'

import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const links = computed(() => {
  const links = [
    { path: '/home', text: '主页' },
    { path: '/role-select', text: '角色扮演' },
    { path: '/case-study', text: '病例' }
  ]

  if (userStore.logged) {
    links.push({ path: '/profile', text: '个人资料' })
  } else {
    links.push({ path: '/login', text: '登录 | 注册' })
  }

  return links
})
</script>
