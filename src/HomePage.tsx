import CategoryItem from "./components/CategoryItem";
import { useEffect } from 'react';
import { useProductStore } from './stores/useProductStore';
import FeaturedProducts from './components/FeaturedProducts';
import VideoCarousel from './components/VideoCarousel';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    const handleExploreClick = () => {
        navigate('/services');
    }

    return (
        <div className='relative min-h-screen bg-beige text-brown overflow-hidden font-josefin'>
            <section className='relative bg-gray-100 py-12 px-4 text-center rounded-lg shadow mb-8'>
                <h1 className='text-5xl font-extrabold mb-2'>Naandi</h1>
                <p className='text-lg mb-4'>Tagline</p>
                <VideoCarousel />
                <button
                    onClick={handleExploreClick}
                    className='mt-6 px-6 py-2 bg-brown text-beige rounded-lg hover:bg-brown/90 transition'
                >
                    Explore
                </button>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Booking Stages</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    {[1, 2, 3, 4, 5].map((stage) => (
                        <div key={stage} className='bg-white p-4 rounded-lg shadow hover:shadow-md transition'>
                            <h4 className='font-bold'>Step {stage}</h4>
                            <p className='text-sm'>Body text for whatever you'd like to say...</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Payment Information</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='h-40 bg-gray-200 rounded-lg'></div>
                    <div className='h-40 bg-gray-200 rounded-lg'></div>
                </div>
            </section>

            <section className='py-8 px-4'>
                <h3 className='text-xl font-bold mb-4'>Mission/Vision</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg shadow hover:shadow-md transition'>
                            <div className='h-24 bg-gray-200 rounded-lg mb-2'></div>
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
                        <div key={review} className='bg-white p-4 rounded-lg shadow hover:shadow-md transition'>
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
                        <div key={member} className='h-40 bg-gray-200 rounded-lg'></div>
                    ))}
                </div>
            </section>

            <footer className='bg-brown text-beige py-6 px-4 text-center rounded-lg'>
                <p className='text-sm'>© 2025 Naandi. All rights reserved.</p>
            </footer>

            <FeaturedProducts featuredProducts={products} />
        </div>
    );
}

export default HomePage;

