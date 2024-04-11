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
    <div class="container mx-auto">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PHPaperItem
          v-for="paper in papers"
          :key="paper.id"
          :paper-id="paper.id"
          :name="paper.name"
          :description="paper.content"
        />
      </div>
      <!-- </div> -->
      <PHPagination v-model="page.pageNumber" :total-pages="page.totalPages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PHInputField from '../components/PHInputField.vue'
import PHPaperItem from '../components/PHPaperItem.vue'
import PHPagination from '../components/PHPagination.vue'
import { Paper } from '../types/paper'
import { usePage } from '../composables'

const { page } = usePage<Paper>('api/test/paper/info', 12)

const papers = computed(() => page.value.content)
</script>
