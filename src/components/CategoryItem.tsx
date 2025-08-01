import { Link } from 'react-router-dom'

interface CategoryItemProps {
    href: string
    name: string
    imageUrl: string
}

const CategoryItem = ({ href, name, imageUrl }: CategoryItemProps) => {
    return (
        <Link
            to={href}
            className="block group"
            aria-label={`View ${name} category`}
        >
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 font-josefin">
                {/* Optional: Add img tag if imageUrl exists */}
                <div className="h-32 bg-gray-200 rounded-lg mb-2">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    )}
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">{name}</h3>
            </div>
        </Link>
    )
}

export default CategoryItem