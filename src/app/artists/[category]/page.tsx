import { artists } from '@/app/data/artists';
import { categories } from '@/app/data/categories';
import { Artist } from '@/types';
import ArtistCard from '@/app/components/ArtistCard';
import Link from 'next/link';
import { FaArrowLeft, FaFilter, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

interface PageProps {
  params: { category: string };
}

const getCategoryName = (slug: string) => {
    for (const cat of categories) {
        const subcat = cat.subcategories.find(sub => sub.slug === slug);
        if (subcat) return subcat.name;
    }
    return "Artists";
}

export default function ArtistListingPage({ params }: PageProps) {
  const { category: categorySlug } = params;
  const filteredArtists: Artist[] = artists.filter(
    (artist) => artist.category === categorySlug
  );

  const categoryName = getCategoryName(categorySlug);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <Link href="/#categories" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Categories</span>
                    </Link>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fadeInUp">
                        {categoryName}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Meet our talented and certified makeup artists who specialize in creating your perfect look
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-300" />
                            <span>4.9+ Average Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-pink-300" />
                            <span>Available Across India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-green-300">✓</span>
                            <span>Verified Professionals</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-semibold">
                            {filteredArtists.length} Artists Found
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors">
                            <FaFilter />
                            <span>Filter</span>
                        </button>
                        <select className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Sort by Rating</option>
                            <option>Sort by Price: Low to High</option>
                            <option>Sort by Price: High to Low</option>
                            <option>Sort by Experience</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        {/* Artists Grid */}
        <div className="container mx-auto px-4 py-12">
            {filteredArtists.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredArtists.map((artist, index) => (
                        <div key={artist.id} style={{ animationDelay: `${index * 0.1}s` }}>
                            <ArtistCard artist={artist} categoryName={categoryName} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">💄</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No Artists Found</h3>
                    <p className="text-gray-600 mb-8">We're constantly adding new talented artists to our platform.</p>
                    <Link href="/#categories" className="btn-elegant">
                        Explore Other Categories
                    </Link>
                </div>
            )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let us help you find the perfect makeup artist for your special occasion
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                        💬 Contact Us
                    </Link>
                    <Link href="/request-artist" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                        📝 Request Custom Artist
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}