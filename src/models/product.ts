export interface Product {
    category: {
        id: number,
        name: string,
        image: string,
        creationAt: Date,
        updatedAt: Date
    }
    creationAt: Date,
    description: string,
    id: number,
    images: string[],
    price: number,
    title: string,
    updatedAt: Date
}
