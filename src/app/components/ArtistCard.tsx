import Link from 'next/link';
import { Artist } from '@/types';
import Image from 'next/image';
import { FaStar, FaHeart, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

interface ArtistCardProps {
  artist: Artist;
  categoryName: string;
}

const ArtistCard = ({ artist, categoryName }: ArtistCardProps) => {
  const bookingUrl = `/booking?artist=${encodeURIComponent(artist.name)}&category=${encodeURIComponent(categoryName)}`;

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 animate-scaleIn">
      {/* Image Section with Overlay */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={artist.imageUrl} 
          alt={artist.name} 
          layout="fill" 
          objectFit="cover" 
          className="group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 rounded-full text-pink-500 hover:text-red-500 hover:scale-110 transition-all">
            <FaHeart />
          </button>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="font-bold text-gray-800 text-sm">{artist.rating.toFixed(1)}</span>
        </div>

        {/* Verified Badge */}
        <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaCheckCircle />
          <span>Verified</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Artist Name & Location */}
        <div className="mb-4">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
            {artist.name}
          </h3>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <FaMapMarkerAlt className="mr-1" />
            <span>Available in Mumbai, Delhi</span>
          </div>
          <div className="text-sm text-gray-600">
            {categoryName} Specialist • 5+ years exp
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">₹{artist.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Starting from</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">150+</div>
            <div className="text-xs text-gray-500">Happy clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">24h</div>
            <div className="text-xs text-gray-500">Response</div>
          </div>
        </div>

        {/* Service Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">Bridal Makeup</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">HD Makeup</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">Airbrush</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            href={bookingUrl} 
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl text-center hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            💄 Book Now
          </Link>
          <button className="px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-all duration-300">
            👁️ View
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
      <div className="absolute -bottom-1 -left-1 w-16 h-16 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
    </div>
  );
};

export default ArtistCard;