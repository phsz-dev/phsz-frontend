<template>
  <header class="sticky top-0 h-16 w-full">
    <div class="max-w-screen-2xl mx-auto p-4 flex justify-between">
      <RouterLink to="/" class="text-2xl font-bold">PHSZ</RouterLink>
      <nav>
        <ul class="flex space-x-8">
          <li v-for="link in links" :key="link.text">
            <RouterLink :to="link.path" class="text-gray-500 hover:text-gray-900">{{
              link.text
            }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { path: "/", text: "主页" },
  { path: "/roleplay", text: "角色扮演" },
  { path: "/cases", text: "病例" },
  { path: "/me", text: "我的" },
  { path: "/admin", text: "管理" },
];
</script>
