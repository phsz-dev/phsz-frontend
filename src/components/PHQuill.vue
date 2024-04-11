<template>
    <div v-if="content">
        <QuillEditor v-model:content="content" toolbar="full" :theme="dark?'bubble':'snow'" contentType="html" />
    </div>
    
</template>

<script setup lang="ts"> 
import { QuillEditor } from '@vueup/vue-quill'
import { useDark } from '@vueuse/core';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
const dark = useDark()
const content = defineModel<string>()
console.log(1,content.value)

</script>