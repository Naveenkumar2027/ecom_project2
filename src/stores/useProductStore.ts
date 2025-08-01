import { create } from 'zustand'

interface Product {
    id: number
    name: string
    description: string
}

interface ProductStore {
    products: Product[]
    isLoading: boolean
    fetchFeaturedProducts: () => Promise<void>
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    isLoading: false,
    fetchFeaturedProducts: async () => {
        set({ isLoading: true })
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            set({
                products: [
                    { id: 1, name: 'Product 1', description: 'Description for product 1' },
                    { id: 2, name: 'Product 2', description: 'Description for product 2' },
                    { id: 3, name: 'Product 3', description: 'Description for product 3' },
                    { id: 4, name: 'Product 4', description: 'Description for product 4' },
                ],
                isLoading: false
            })
        } catch (error) {
            set({ isLoading: false })
            console.error('Error fetching products:', error)
        }
    }
}))