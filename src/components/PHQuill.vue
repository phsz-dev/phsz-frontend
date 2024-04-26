<template>
  <div v-if="content">
    <QuillEditor
      id = "editor"
      v-model:content="content"
      :theme="dark ? 'bubble' : 'snow'"
      :options="editorOption"
      contentType="html"
      placeholder="请输入内容..."
    />
    <input id="image" type="file" accept="image/*" style="display: none" @change="imageHandler" />
    <input id="video" type="file" accept="video/*" style="display: none" @change="videoHandler" />
  </div>
</template>

<script setup lang="ts">
import {  Quill, QuillEditor } from '@vueup/vue-quill'
import { useDark } from '@vueuse/core'
import { useFileUploadStore} from '../stores/fileUpload'
import { useMessageStore } from '../stores/message'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import Message from '../types/message'
const dark = useDark()
const store = useFileUploadStore()
const messageStore = useMessageStore()
const content = defineModel<string>()
// console.log(1, content.value)

const editorOption = {
  modules: {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video']
      ],
      handlers: {
        'image' : function (value) {
          // 触发选择图片的事件
          document.getElementById('image')?.click()
        
        },
       'video' : function (value) {
          // 触发选择视频的事件
          document.getElementById('video')?.click()
        }
      }
    }
  },
  placeholder: '请输入内容...'
}

const imageHandler = (image:any) => {
  image = image.target.files[0]
  store.uploadImage(image).then((res) => {
    console.log(res)
    insertImg(res,'image')
    messageStore.addMessage(Message.partialMessage('图片上传成功', 'success', 'top'))
  }).catch((err) => {
    console.log(err)
    messageStore.addMessage(Message.partialMessage('图片上传失败', 'error', 'top'))
  })
}

const videoHandler = (video: any) => {
  video = video.target.files[0]
  store.uploadVideo(video).then((res) => {
    console.log(res)
    insertImg(res,'video')
    messageStore.addMessage(Message.partialMessage('视频上传成功', 'success', 'top'))
  }).catch((err) => {
    console.log(err)
    messageStore.addMessage(Message.partialMessage('视频上传失败', 'error', 'top'))
  })
}

const insertImg = (url,type) => {         

  var container = document.querySelector("#editor");
  let rage = Quill.find(container).getSelection();
  console.log(rage)
  var quill = new Quill(container);
  let length = rage.index;
  //let length = quill.getSelection().index;
  if(type == 'image'){
    quill.insertEmbed(length,'image',url);
  }else{
    quill.insertEmbed(length,'video',url);
  }
  quill.setSelection(length+1);
}

</script>
