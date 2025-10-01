import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/60 via-pink-800/50 to-rose-600/60 z-10"></div>
      
      {/* Fallback gradient background if video doesn't load */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 z-0"></div>
      
      <video autoPlay loop muted className="absolute z-5 w-auto min-w-full min-h-full max-w-none object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 p-4 animate-fadeInUp">
        {/* Enhanced heading with better typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight">
          <span className="block text-white">Elegance in</span>
          <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Every Brushstroke
          </span>
        </h1>
        
        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto drop-shadow-lg font-light leading-relaxed">
          Discover and book <span className="font-semibold text-pink-200">elite makeup artists</span> for any occasion. 
          <br className="hidden md:block" />
          Your perfect look awaits.
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="#categories" className="btn-elegant transform hover:scale-110 shadow-2xl">
            ✨ Explore Services
          </Link>
          <Link href="/booking" className="glass-effect px-8 py-4 rounded-full font-semibold text-lg text-white border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105">
            📅 Book Now
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span>500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pink-300">💄</span>
            <span>50+ Expert Artists</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-300">🎉</span>
            <span>1000+ Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;