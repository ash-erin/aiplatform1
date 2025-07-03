import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Movie } from '../types';
import logoImage from '../assets/ChatGPT Image 26 giu 2025, 11_48_17.png';

interface HeaderProps {
  onSearch: (query: string) => void;
  onLogoClick: () => void;
  isScrolled: boolean;
  searchSuggestions?: Movie[];
  onMovieSelect?: (movie: Movie) => void;
  onMyListClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onSearch, 
  onLogoClick,
  isScrolled,
  searchSuggestions = [],
  onMovieSelect,
  onMyListClick
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
    setShowSuggestions(false);
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (movie: Movie) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    setShowSuggestions(false);
    onMovieSelect?.(movie);
  };

  const handleMyListClick = () => {
    // Clear search when navigating
    setSearchQuery('');
    onSearch('');
    setIsSearchOpen(false);
    setShowSuggestions(false);
    
    onMyListClick?.();
  };

  const handlePopularClick = () => {
    // Clear search when navigating
    setSearchQuery('');
    onSearch('');
    setIsSearchOpen(false);
    setShowSuggestions(false);
    
    const popularElement = document.getElementById('most-liked-section');
    if (popularElement) {
      // Get the title element within the section
      const titleElement = popularElement.querySelector('h2');
      if (titleElement) {
        // Calculate offset to show the title properly
        const elementTop = titleElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementTop - 100; // 100px offset from top
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback to section scroll
        popularElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleHomeClick = () => {
    // Clear search when navigating to home
    setSearchQuery('');
    onSearch('');
    setIsSearchOpen(false);
    setShowSuggestions(false);
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', onClick: handleHomeClick },
    { name: 'Popular', onClick: handlePopularClick },
    { name: 'My List', onClick: handleMyListClick }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#081932]/95 backdrop-blur-md shadow-lg' : 'bg-[#081932]/80 backdrop-blur-sm'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center space-x-8 md:space-x-12">
          <button
            onClick={onLogoClick}
            className="hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <img 
              src={logoImage}
              alt="Skà Logo" 
              className="h-16 md:h-20 w-auto max-w-none scale-150 md:scale-175"
            />
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={item.onClick}
                className="text-white hover:text-[#ddb870] transition-colors text-2xl font-medium px-6 py-3"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            {isSearchOpen ? (
              <div className="relative">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onBlur={() => {
                      setTimeout(() => {
                        if (!searchQuery) setIsSearchOpen(false);
                        setShowSuggestions(false);
                      }, 200);
                    }}
                    onFocus={() => searchQuery && setShowSuggestions(true)}
                    placeholder="Search titles..."
                    className="bg-[#081932]/80 border border-gray-600 rounded px-3 py-2 text-white text-base w-64 focus:outline-none focus:border-[#ddb870]"
                  />
                </form>
                
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#081932]/95 backdrop-blur-md border border-gray-700 rounded-md shadow-xl max-h-80 overflow-y-auto z-50">
                    {searchSuggestions.slice(0, 6).map((movie) => (
                      <div
                        key={movie.id}
                        onClick={() => handleSuggestionClick(movie)}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-800/50 cursor-pointer transition-colors"
                      >
                        <img
                          src={movie.thumbnail}
                          alt={movie.title}
                          className="w-12 h-8 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white text-sm font-medium truncate">
                            {movie.title}
                          </h4>
                          <p className="text-white/60 text-xs">
                            {movie.year} • {movie.genre.slice(0, 2).join(', ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-[#ddb870] transition-colors p-2"
              >
                <Search size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};