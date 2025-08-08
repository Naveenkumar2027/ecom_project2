
import CategoryItem from "./components/CategoryItem";
import { useEffect } from 'react';
import { useProductStore } from './stores/useProductStore';
import FeaturedProducts from './components/FeaturedProducts';

const categories = [
    { href: "/weddings", name: "Weddings", imageUrl: "" },
    { href: "/engagements", name: "Engagements", imageUrl: "" },
    { href: "/anniversaries", name: "Anniversaries", imageUrl: "" },
    { href: "/birthday-parties", name: "Birthday parties", imageUrl: "" },
    { href: "/naming-ceremonies", name: "Naming ceremonies", imageUrl: "" },
    { href: "/family-reunions", name: "Family reunions", imageUrl: "" },
    { href: "/retirement-parties", name: "Retirement Parties", imageUrl: "" },
    { href: "/corporate-parties", name: "Corporate Parties", imageUrl: "" },
    { href: "/educational-events", name: "Educational events", imageUrl: "" },
    { href: "/promotional-events", name: "Promotional events", imageUrl: "" },
    { href: "/entertainment-events", name: "Entertainment events", imageUrl: "" },
    { href: "/religious-events", name: "Religious events", imageUrl: "" },
    { href: "/pre-wedding-shoots", name: "Pre-wedding shoots", imageUrl: "" },
]

const HomePage = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore()

    useEffect(() => {
        fetchFeaturedProducts()
    }, [fetchFeaturedProducts])

    return (
        <div className='relative min-h-screen bg-beige text-brown overflow-hidden'>
            <header className='bg-brown text-beige p-4 text-center text-4xl font-bold'>Naandi</header>

            <section className='text-center py-8'>
                <h2 className='text-2xl font-semibold mb-2'>Tagline</h2>
                <button className='mt-2 px-4 py-2 bg-brown text-beige rounded hover:bg-brown/90 transition'>Explore</button>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Shop by Category</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {categories.map((category) => (
                        <CategoryItem key={category.href} {...category} />
                    ))}
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Booking Stages</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {[1, 2, 3, 4, 5].map((stage) => (
                        <div key={stage} className='bg-white p-4 rounded shadow hover:shadow-md transition'>
                            <h4 className='font-bold'>Step {stage}</h4>
                            <p className='text-sm'>Body text for whatever you'd like to say...</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Payment Information</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='h-40 bg-gray-200 rounded'></div>
                    <div className='h-40 bg-gray-200 rounded'></div>
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Mission/Vision</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='bg-white p-4 rounded shadow hover:shadow-md transition'>
                            <div className='h-24 bg-gray-200 rounded mb-2'></div>
                            <h4 className='font-semibold'>Title</h4>
                            <p className='text-sm'>Body text for whatever you'd like to say...</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Latest Reviews</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {[1, 2, 3].map((review) => (
                        <div key={review} className='bg-white p-4 rounded shadow hover:shadow-md transition'>
                            <p className='text-sm'>Review title</p>
                            <p className='text-xs'>Review body</p>
                            <p className='text-xs text-right mt-2'>- Reviewer</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Our Team</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {[1, 2, 3].map((member) => (
                        <div key={member} className='h-40 bg-gray-200 rounded'></div>
                    ))}
                </div>
            </section>

            <footer className='bg-brown text-beige py-6 px-4 text-center'>
                <p className='text-sm'>© 2025 Occasia. All rights reserved.</p>
            </footer>

            {isLoading ? (
                <div className='py-8 px-4 text-center'>Loading featured products...</div>
            ) : (
                <FeaturedProducts featuredProducts={products} />
            )}
        </div>
    )
}

export default HomePage