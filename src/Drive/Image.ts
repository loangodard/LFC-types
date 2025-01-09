export interface Image {
    id: number,
    url: string,
    fileName?: string
    category: {
        id: number,
        name: string
    }
}