'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const artist = searchParams.get('artist');
    const category = searchParams.get('category');
    const date = searchParams.get('date');
    const time = searchParams.get('time');

    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) : 'N/A';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-2xl text-center">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6"/>
                <h1 className="text-4xl font-serif font-bold text-dark mb-4">Booking Confirmed!</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Thank you, <span className="font-bold text-primary">{name}</span>. Your appointment is set.
                </p>
                <div className="text-left bg-light p-6 rounded-lg border border-gray-200 space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Artist:</span>
                        <span className="text-dark font-bold">{artist}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Service:</span>
                        <span className="text-dark font-bold">{category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Date:</span>
                        <span className="text-dark font-bold">{formattedDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Time:</span>
                        <span className="text-dark font-bold">{time}</span>
                    </div>
                </div>
                <Link href="/" className="inline-block mt-8 bg-dark text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div>Loading confirmation...</div>}>
            <ConfirmationContent />
        </Suspense>
    )
}