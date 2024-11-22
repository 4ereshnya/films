import React from 'react';
import { useParams } from 'react-router-dom';
import { Play, Star, Clock, Heart } from 'lucide-react';

const MovieDetails = () => {
  const { id } = useParams();

  // Example data - in production, this would come from an API
  const movie = {
    title: 'Dune: Part Two',
    year: 2024,
    rating: 8.8,
    duration: '166 min',
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    director: 'Denis Villeneuve',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80',
    backdrop: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80'
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F29] via-[#1C1F29]/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
              {/* Poster */}
              <div className="hidden md:block">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-xl shadow-lg aspect-[2/3] object-cover"
                />
              </div>
              
              {/* Info */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  {movie.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-300">{movie.year}</span>
                  <span className="text-gray-300">{movie.duration}</span>
                  <div className="flex items-center text-[#FFF700]">
                    <Star className="w-4 h-4 mr-1" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 rounded-full bg-[#2A2D3A] text-sm text-gray-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {movie.description}
                </p>
                <div className="flex items-center space-x-4">
                  <button className="inline-flex items-center px-6 py-3 rounded-full bg-[#4DBA87] hover:bg-[#4DBA87]/90 text-white font-semibold transition-colors">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Now
                  </button>
                  <button className="p-3 rounded-full bg-[#2A2D3A] hover:bg-[#7F64E3] transition-colors">
                    <Heart className="w-6 h-6 text-white" />
                  </button>
                  <button className="p-3 rounded-full bg-[#2A2D3A] hover:bg-[#4DBA87] transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
          {/* Mobile Poster */}
          <div className="md:hidden">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-xl shadow-lg aspect-[2/3] object-cover"
            />
          </div>

          {/* Additional Info */}
          <div className="hidden md:block">
            <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gray-400">Director</dt>
                <dd className="text-white mt-1">{movie.director}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Release Year</dt>
                <dd className="text-white mt-1">{movie.year}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Duration</dt>
                <dd className="text-white mt-1">{movie.duration}</dd>
              </div>
            </dl>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Synopsis</h2>
              <p className="text-gray-300">{movie.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Cast</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Add cast members here */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;