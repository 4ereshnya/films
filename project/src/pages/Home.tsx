import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import MovieCard from '../components/MovieCard';

// Example data - in production, this would come from an API
const movies = [
  {
    id: '1',
    title: 'Dune: Part Two',
    year: 2024,
    rating: 8.8,
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
  },
  {
    id: '2',
    title: 'Oppenheimer',
    year: 2023,
    rating: 8.9,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
  },
  // Add more movies as needed
];

const Home = () => {
  return (
    <div>
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12">
        <CategorySection />

        {/* Popular Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Popular Now</h2>
            <button className="text-[#4DBA87] hover:text-[#4DBA87]/80 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Trending</h2>
            <button className="text-[#4DBA87] hover:text-[#4DBA87]/80 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;