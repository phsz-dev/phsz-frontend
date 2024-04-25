import { ref, Ref } from 'vue';
import { useMessageStore } from '../stores/message'
import Message from '../types/message'

const msgStore = useMessageStore()

// 定义模态框配置的接口
interface ModalConfig {
  show: boolean;
  title: string;
  cancel: () => void;
  confirm: () => Promise<void>;
}

// 创建一个工厂函数来生成模态框配置
function createModalConfig(title: string, submitAction: () => Promise<void>): Ref<ModalConfig> {
  const modal = ref<ModalConfig>({
    show: false,
    title,
    cancel: () => {
      modal.value.show = false;
    },
    confirm: async () => {
        try {
          await submitAction();
          modal.value.show = false;
          msgStore.addMessage(Message.topSuccess('添加成功'));
        } catch (error) {
          console.error('Error during submission:', error);
          // 根据需要处理错误，如显示错误消息等
        }
    }
  });
  return modal;
}

export { createModalConfig };    
export type { ModalConfig };

