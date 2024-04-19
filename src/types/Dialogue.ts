export default interface Dialogue {
    title: string
    content: string
    showCancel: boolean
    clickMaskClose: boolean
    confirm: () => void
    cancel?: () => void
}