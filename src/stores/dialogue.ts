import Dialogue from "../types/Dialogue"
import { defineStore } from 'pinia'
import { ref } from 'vue'
// export default interface Dialogue {
//     title: string
//     content: string
//     hasCancel: boolean
//     clickMaskClose: boolean
// }
export const useDialogueStore = defineStore('dialogue', () => {

    const dialogue = ref<Dialogue>()


    const showDialogue = (dl:Dialogue) => {
        dialogue.value = dl
    }

    const closeDialogue = () => {
        dialogue.value = undefined
    }

    return {
        dialogue,
        showDialogue,
        closeDialogue
    }
})