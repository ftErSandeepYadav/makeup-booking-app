import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                ✨ GlamBook
              </h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Your trusted platform for booking elite makeup artists. We connect you with certified professionals 
                who bring your beauty vision to life.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-pink-600/20 rounded-full hover:bg-pink-600/40 transition-colors group">
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-colors group">
                <FaFacebook className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-blue-400/20 rounded-full hover:bg-blue-400/40 transition-colors group">
                <FaTwitter className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-red-600/20 rounded-full hover:bg-red-600/40 transition-colors group">
                <FaYoutube className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-300">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/artists/traditional-bridal" className="text-gray-300 hover:text-pink-300 transition-colors">Bridal Makeup</Link></li>
              <li><Link href="/artists/cocktail-party" className="text-gray-300 hover:text-pink-300 transition-colors">Party Makeup</Link></li>
              <li><Link href="/artists/photoshoot" className="text-gray-300 hover:text-pink-300 transition-colors">Photoshoot Makeup</Link></li>
              <li><Link href="/artists/airbrush" className="text-gray-300 hover:text-pink-300 transition-colors">Airbrush Makeup</Link></li>
              <li><Link href="/artists/destination-wedding" className="text-gray-300 hover:text-pink-300 transition-colors">Destination Wedding</Link></li>
              <li><Link href="/consultation" className="text-gray-300 hover:text-pink-300 transition-colors">Beauty Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-purple-300 transition-colors">How It Works</Link></li>
              <li><Link href="/join-as-artist" className="text-gray-300 hover:text-purple-300 transition-colors">Join as Artist</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-purple-300 transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-300 hover:text-purple-300 transition-colors">Press & Media</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-purple-300 transition-colors">Beauty Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-indigo-300">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-300">hello@glambook.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-red-400 mt-1" />
                <span className="text-gray-300">Available across Mumbai, Delhi, Bangalore, Chennai, Kolkata & more</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-pink-300">Beauty Tips & Updates</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-pink-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-r-full hover:from-pink-600 hover:to-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>500+ Verified Artists</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-yellow-400">★</span>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-pink-400">💄</span>
              <span>10,000+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-purple-400">🏆</span>
              <span>Award Winning Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 GlamBook. All rights reserved. Made with <FaHeart className="inline text-pink-400 mx-1" /> for beauty enthusiasts.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-pink-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-pink-300 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-pink-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;