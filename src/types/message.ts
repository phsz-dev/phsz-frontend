export default class Message {
  content: string
  showTime: number = 1000
  endTime: number = 0
  type: string
  position: string

  constructor() {
    this.content = ''
    this.type = ''
    this.position = ''
  }

  public static partialMessage = (
    content: string,
    type: string,
    position: string
  ) => {
    let msg = new Message()
    msg.content = content
    msg.type = type
    msg.position = position
    return msg
  }

  public static fullMessage = (
    content: string,
    showTime: number,
    type: string,
    position: string
  ) => {
    let msg = Message.partialMessage(content, type, position)
    msg.showTime = showTime
    return msg
  }

  public static topSuccess = (content: string) => {
    return Message.partialMessage(content, 'success', 'top')
  }

  public static topError = (content: string) => {
    return Message.partialMessage(content, 'error', 'top')
  }
}
