import { defineStore } from 'pinia'
import ApiService from '../http'

const apiService = new ApiService('')

export const useSearchStore = defineStore('search', () => {
    const dealWithSearchText = async (searchText: string,table: any) => {
        // 切割 "in:" 前后的部分
        const parts = searchText.split(' in:');
        const key = parts[0].trim(); // 获取关键词，即 "贵宾犬"
        let head;
        let tmp = ""
        if(parts.length>1){
            head = parts[1].trim().split(',')
            
            for(let i=0;i<head.length;i++){
                head[i] = head[i].trim()
                // table数组的text字段中查找是否为head[i]的值，是的话就把table数组的value字段的值加入tmp
                for(let j=0;j<table.length;j++){
                    if(table[j].text == head[i]){
                        tmp += table[j].value
                        break;
                    }
                }
                if(i!=head.length-1){
                    tmp += ","
                }
            }
        }
        head = tmp;
        let obj = {
            key,
            head
        }
        return obj
    }

    return {
        dealWithSearchText
    }
})