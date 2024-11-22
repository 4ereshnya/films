import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  rating: number;
  poster: string;
  description: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  year,
  rating,
  poster,
  description,
}) => {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/movie/${id}`}>
        <div className="relative aspect-[2/3]">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 p-4 space-y-2">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-300">{year}</span>
                <div className="flex items-center text-[#FFF700]">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 rounded-full bg-[#2A2D3A]/80 hover:bg-[#7F64E3] transition-colors">
          <Heart className="w-5 h-5 text-white" />
        </button>
        <button className="p-2 rounded-full bg-[#2A2D3A]/80 hover:bg-[#4DBA87] transition-colors">
          <Clock className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;