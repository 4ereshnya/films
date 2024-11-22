import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, Film } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { title: 'Movies', path: '/movies' },
    { title: 'TV Series', path: '/series' },
    { title: 'Anime', path: '/anime' },
    { title: 'Cartoons', path: '/cartoons' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1C1F29]/95 backdrop-blur-sm border-b border-[#7F64E3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-[#FFF700]" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#FFF700] to-[#4DBA87] text-transparent bg-clip-text">
              StreamFlix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-[#FFF700] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#2A2D3A] text-white pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7F64E3] w-64"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 rounded-full hover:bg-[#2A2D3A] transition-colors">
              <User className="w-6 h-6 text-[#4DBA87]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-[#2A2D3A]"
            >
              <Search className="w-6 h-6 text-gray-400" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-[#2A2D3A]"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#FFF700]" />
              ) : (
                <Menu className="w-6 h-6 text-[#FFF700]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#2A2D3A] text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7F64E3]"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-[#FFF700] transition-colors px-4 py-2 rounded-lg hover:bg-[#2A2D3A]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;