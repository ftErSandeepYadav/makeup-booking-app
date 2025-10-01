'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '../data/categories';
import { FaChevronDown, FaChevronUp, FaStar, FaHeart } from 'react-icons/fa';

const Categories = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0].slug);

  const toggleCategory = (slug: string) => {
    setOpenCategory(openCategory === slug ? null : slug);
  };

  const categoryIcons: { [key: string]: string } = {
    'bridal': '👰',
    'party': '🎉', 
    'special-occasions': '✨',
    'professional': '💼'
  };

  return (
    <section id="categories" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 gradient-text">
            Our Exquisite Services
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Find the perfect artist for your special event. Each service is crafted with precision and passion.
          </p>
          <div className="flex justify-center items-center gap-2 text-pink-500">
            <FaHeart className="animate-pulse" />
            <span className="text-gray-500">Trusted by thousands of beautiful souls</span>
            <FaHeart className="animate-pulse" />
          </div>
        </div>

        {/* Enhanced Categories */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div 
              key={category.slug} 
              className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex justify-between items-center p-8 text-left bg-gradient-to-r from-white/50 to-pink-50/50 hover:from-pink-50/70 hover:to-purple-50/70 focus:outline-none transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{categoryIcons[category.slug] || '💄'}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {category.subcategories.length} specialized services
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  {openCategory === category.slug ? 
                    <FaChevronUp className="text-purple-500 text-xl transition-transform group-hover:scale-110"/> : 
                    <FaChevronDown className="text-gray-400 text-xl transition-transform group-hover:scale-110" />
                  }
                </div>
              </button>
              
              {openCategory === category.slug && (
                <div className="p-8 bg-gradient-to-br from-white to-pink-50/30 animate-fadeInUp">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.subcategories.map((sub, subIndex) => (
                      <Link
                        key={sub.slug}
                        href={`/artists/${sub.slug}`}
                        className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-pink-200 transition-all duration-300 transform hover:-translate-y-1"
                        style={{ animationDelay: `${subIndex * 0.05}s` }}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">💄</div>
                          <h4 className="font-semibold text-gray-800 group-hover:text-purple-700 mb-2 transition-colors">
                            {sub.name}
                          </h4>
                          <div className="text-sm text-gray-500 group-hover:text-gray-600">
                            Professional artists available
                          </div>
                          <div className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm text-purple-700 group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
                            View Artists →
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white/50 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Not sure which service is right for you?
          </h3>
          <p className="text-gray-600 mb-6">
            Our beauty consultants are here to help you choose the perfect look for your special day.
          </p>
          <Link href="/consultation" className="btn-elegant inline-block">
            💬 Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;