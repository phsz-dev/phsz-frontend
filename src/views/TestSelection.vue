<template>
  <div>
    <!-- Search and Filters -->
    <div class="container mx-auto my-4">
      <!-- <input
      type="text"
      placeholder="搜索试卷..."
      class="w-full border p-2 shadow-sm"
    /> -->
      <PHInputField type="search" placeholder="搜索试卷..." class="max-w-xl" />
    </div>

    <!-- Exam Papers List -->
    <div class="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="paper in papers"
        :key="paper.id"
        class="rounded-lg border p-4 shadow hover:shadow-md"
      >
        <h2 class="text-lg font-bold">{{ paper.name }}</h2>
        <p>{{ paper.description }}</p>
        <div class="mt-2">
          <button
            class="rounded-lg bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
          >
            选择
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PHInputField from '../components/PHInputField.vue'

const papers = [
  { id: 1, name: '试卷一', description: '关于病种A的考试' },
  { id: 2, name: '试卷二', description: '关于病种B的考试' }
  // 更多试卷...
]
</script>
