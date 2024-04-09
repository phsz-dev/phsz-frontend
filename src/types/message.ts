export default class message{
    content: string
    showTime: number = 1000
    endTime: number = 0
    type: string
    position: string

    constructor(){
        this.content = ''
        this.type = ''
        this.position = ''
    }

    public static partialMessage = (content: string, type: string, position: string) => {
        let msg = new message();
        msg.content = content;
        msg.type = type;
        msg.position = position;
        return msg;
    }

    public static fullMessage = (content: string, showTime: number, type: string, position: string) =>{
        let msg = message.partialMessage(content, type, position);
        msg.showTime = showTime;
        return msg;
    }

}