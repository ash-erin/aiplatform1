import React from 'react';
import { ArrowLeft, Play, Plus, Info, X, Heart } from 'lucide-react';
import { Movie } from '../../types';

interface MyListPageProps {
  onBack: () => void;
  myListMovies: Movie[];
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
}

export const MyListPage: React.FC<MyListPageProps> = ({
  onBack,
  myListMovies,
  onPlay,
  onAddToList,
  onMoreInfo,
  myList,
}) => {
  return (
    <div className="min-h-screen bg-[#081932] pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">My List</h1>
            <p className="text-white/60 mt-1">
              {myListMovies.length > 0 
                ? `${myListMovies.length} ${myListMovies.length === 1 ? 'item' : 'items'} in your list`
                : 'Your personal collection'
              }
            </p>
          </div>
        </div>

        {/* Content */}
        {myListMovies.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-[#0f2f5f] rounded-full flex items-center justify-center mb-6">
              <Heart size={48} className="text-white/40" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">No Content Listed</h2>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              You haven't added any content to your list yet. Browse through our collection and add your favorites to watch later.
            </p>
            <button
              onClick={onBack}
              className="bg-[#ddb870] text-[#081932] px-8 py-3 rounded-lg font-semibold hover:bg-[#ddb870]/90 transition-colors"
            >
              Browse Content
            </button>
          </div>
        ) : (
          /* Content Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
            {myListMovies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer"
                onClick={() => onMoreInfo(movie)}
              >
                <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full h-48 md:h-64 lg:h-72 object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081932]/90 via-[#081932]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-semibold text-sm mb-3 line-clamp-2 drop-shadow-lg">
                      {movie.title}
                    </h3>
                    
                    {movie.likes && (
                      <div className="flex items-center space-x-1 mb-3">
                        <Heart size={12} className="text-[#ddb870]" fill="currentColor" />
                        <span className="text-white/70 text-xs">{movie.likes}</span>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlay(movie);
                        }}
                        className="bg-white text-[#081932] p-2 rounded-full hover:bg-white/90 transition-colors shadow-lg"
                        title="Play"
                      >
                        <Play size={16} fill="currentColor" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToList(movie);
                        }}
                        className="bg-[#ddb870] text-[#081932] p-2 rounded-full hover:bg-[#ddb870]/90 transition-colors shadow-lg"
                        title="Remove from My List"
                      >
                        <X size={16} />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMoreInfo(movie);
                        }}
                        className="bg-[#0f2f5f]/80 text-white p-2 rounded-full hover:bg-[#0f2f5f] transition-colors shadow-lg"
                        title="More Info"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Title and Info Below Image */}
                <div className="mt-3 px-1">
                  <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{movie.year}</span>
                    {movie.likes && (
                      <div className="flex items-center space-x-1">
                        <Heart size={10} className="text-[#ddb870]" fill="currentColor" />
                        <span>{movie.likes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};