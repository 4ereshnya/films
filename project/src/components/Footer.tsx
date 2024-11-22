import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1F29] border-t border-[#7F64E3]/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-[#FFF700]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#FFF700] to-[#4DBA87] text-transparent bg-clip-text">
                StreamFlix
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for movies, TV shows, anime, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Movies', 'TV Series', 'Anime', 'Cartoons'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#FFF700] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Help Center', 'Contact Us', 'Terms of Use'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#FFF700] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: '#1877F2' },
                { icon: Twitter, color: '#1DA1F2' },
                { icon: Instagram, color: '#E4405F' },
                { icon: Youtube, color: '#FF0000' },
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full hover:bg-[#2A2D3A] transition-colors"
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#7F64E3]/20">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} StreamFlix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;