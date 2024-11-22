import React from 'react';
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Example with a single slide - in production, implement proper carousel */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Dune: Part Two
              </h1>
              <p className="text-lg text-gray-300">
                Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  to="/movie/dune-2"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#4DBA87] hover:bg-[#4DBA87]/90 text-white font-semibold transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now
                </Link>
                <button className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-sm transition-colors">
                  <Info className="w-5 h-5 mr-2" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-8 space-x-4">
          <button className="p-2 rounded-full bg-black/50 hover:bg-[#7F64E3] transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 rounded-full bg-black/50 hover:bg-[#7F64E3] transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;