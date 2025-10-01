'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BookingForm from '../components/BookingForm';

function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mx-auto"></div>
                <p className="mt-4 text-gray-600 text-lg">Loading your beauty journey...</p>
            </div>
        </div>
    );
}

function BookingContent() {
    const searchParams = useSearchParams();
    const artist = searchParams.get('artist') || 'Unknown Artist';
    const category = searchParams.get('category') || 'Unspecified Category';

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 p-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}>
                </div>
            </div>
            
            {/* Hero Section */}
            <div className="relative z-10 text-center py-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    Book Your <span className="gradient-text">Perfect Look</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    You're just a few steps away from looking absolutely stunning. Let's make your beauty dreams come true! ✨
                </p>
                
                {/* Selected Artist Info */}
                <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                    <div className="text-2xl">💄</div>
                    <div className="text-left">
                        <div className="font-semibold text-gray-800">{artist}</div>
                        <div className="text-sm text-gray-600">{category}</div>
                    </div>
                </div>
            </div>
            
            {/* Form Container */}
            <div className="relative z-10 flex justify-center">
                <BookingForm artist={artist} category={category} />
            </div>
        </div>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <BookingContent />
        </Suspense>
    );
}