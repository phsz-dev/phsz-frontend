export default interface MenuLayer {
    id: number
    name: string
    status: boolean
    subMenu: MenuLayer[]
}