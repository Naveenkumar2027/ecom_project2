import { Product } from '../stores/useProductStore'

interface Props {
    featuredProducts: Product[]
}

const FeaturedProducts = ({ featuredProducts }: Props) => {
    return (
        <section className="py-8 px-4 font-josefin">
            <h3 className="text-xl font-bold mb-4">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                        <div className="h-40 bg-gray-200 rounded-lg mb-2"></div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProducts