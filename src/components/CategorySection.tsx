import React from 'react';

const categories = [
  { id: 'action', name: 'Action', color: '#7F64E3' },
  { id: 'comedy', name: 'Comedy', color: '#4DBA87' },
  { id: 'drama', name: 'Drama', color: '#FFF700' },
  { id: 'horror', name: 'Horror', color: '#7F64E3' },
  { id: 'romance', name: 'Romance', color: '#4DBA87' },
  { id: 'scifi', name: 'Sci-Fi', color: '#FFF700' },
];

const CategorySection = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className="relative group overflow-hidden rounded-xl aspect-video"
              style={{ backgroundColor: category.color }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;