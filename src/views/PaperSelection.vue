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
    <!-- <div class="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <PHTestItem
        v-for="paper in papers"
        :key="paper.id"
        :name="paper.name"
        :description="paper.description"
      />
    </div> -->
    <div class="container mx-auto">
      <div v-for="(category, categoryName) in categories" :key="categoryName">
        <h1 class="my-4 text-2xl font-bold dark:text-gray-100">
          {{ categoryName }}
        </h1>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <PHPaperItem
            v-for="paper in category"
            :key="paper.id"
            :paper-id="paper.id"
            :name="paper.name"
            :description="paper.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PHInputField from '../components/PHInputField.vue'
import PHPaperItem from '../components/PHPaperItem.vue'

const categories = {
  大类1: [
    { id: 1, name: '试卷一', description: '关于病种A的考试' },
    { id: 2, name: '试卷二', description: '关于病种B的考试' }
  ],
  大类2: [
    { id: 3, name: '试卷三', description: '关于病种C的考试' },
    { id: 4, name: '试卷四', description: '关于病种D的考试' }
  ]
}
</script>
