import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContentRow } from './components/ContentRow';
import { VideoPlayer } from './components/VideoPlayer';
import { MovieModal } from './components/MovieModal';
import { SearchResults } from './components/SearchResults';
import { UserSidebar } from './components/user-space/UserSidebar';
import { PreferencesPage } from './components/user-space/PreferencesPage';
import { ProfilePage } from './components/user-space/ProfilePage';
import { SettingsPage } from './components/user-space/SettingsPage';
import { MyListPage } from './components/user-space/MyListPage';
import { featuredMovie, contentRows, movies, getMostLikedMovies } from './data/movies';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Movie } from './types';

function App() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [myList, setMyList] = useLocalStorage<string[]>('project-mylist', []);
  const [searchSuggestions, setSearchSuggestions] = useState<Movie[]>([]);
  const [movieLikes, setMovieLikes] = useLocalStorage<Record<string, number>>('project-likes', {});
  const [userLikes, setUserLikes] = useLocalStorage<string[]>('project-user-likes', []);
  
  // User space state
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);
  const [currentUserPage, setCurrentUserPage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>('project-logged-in', false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for My List navigation event
  useEffect(() => {
    const handleMyListNavigation = () => {
      setCurrentUserPage('mylist');
    };

    window.addEventListener('navigate-to-mylist', handleMyListNavigation);
    return () => window.removeEventListener('navigate-to-mylist', handleMyListNavigation);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = allCarouselMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setSearchSuggestions(results);
    } else {
      setSearchResults([]);
      setSearchSuggestions([]);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handlePlay = (movie: Movie) => {
    setCurrentMovie(movie);
  };

  const handleAddToList = (movie: Movie) => {
    setMyList(prev => 
      prev.includes(movie.id) 
        ? prev.filter(id => id !== movie.id)
        : [...prev, movie.id]
    );
  };

  const handleMoreInfo = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleLike = (movie: Movie) => {
    if (userLikes.includes(movie.id)) {
      // Remove like
      setUserLikes(prev => prev.filter(id => id !== movie.id));
      setMovieLikes(prev => ({
        ...prev,
        [movie.id]: Math.max(0, (prev[movie.id] || movie.likes || 0) - 1)
      }));
    } else {
      // Add like
      setUserLikes(prev => [...prev, movie.id]);
      setMovieLikes(prev => ({
        ...prev,
        [movie.id]: (prev[movie.id] || movie.likes || 0) + 1
      }));
    }
  };

  // User space handlers
  const handleUserSidebarToggle = () => {
    setIsUserSidebarOpen(!isUserSidebarOpen);
  };

  const handleUserNavigation = (page: string) => {
    if (page === 'logout') {
      setIsLoggedIn(false);
      setCurrentUserPage(null);
    } else {
      setCurrentUserPage(page);
    }
  };

  const handleBackToMain = () => {
    setCurrentUserPage(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Update movies with current like counts
  const moviesWithUpdatedLikes = movies.map(movie => ({
    ...movie,
    likes: movieLikes[movie.id] || movie.likes || 0
  }));

  // Update content rows with current like counts
  const updatedContentRows = contentRows.map(row => {
    return {
      ...row,
      movies: (Array.isArray(row.movies) ? row.movies : []).map(movie => 
        moviesWithUpdatedLikes.find(m => m.id === movie.id) || movie
      )
    };
  });

  // Get all unique movies from all carousels (excluding Most Liked carousel itself)
  const allMoviesFromCarousels: Movie[] = [];
  const seenMovieIds = new Set<string>();
  
  updatedContentRows.forEach(row => {
    if (row.id !== 'most-liked' && Array.isArray(row.movies)) {
      row.movies.forEach(movie => {
        if (!seenMovieIds.has(movie.id)) {
          seenMovieIds.add(movie.id);
          allMoviesFromCarousels.push(movie);
        }
      });
    }
  });

  // Sort all movies by likes and take top 8 for Most Liked carousel
  const mostLikedMovies = allMoviesFromCarousels
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 8);

  // Update the Most Liked carousel
  const finalUpdatedContentRows = updatedContentRows.map(row => {
    if (row.id === 'most-liked') {
      return { ...row, movies: mostLikedMovies };
    }
    return row;
  });

  // Also include custom movies from content rows that are in myList
  const myListMovies = movies.filter(movie => myList.includes(movie.id));
  
  // Also include custom movies from content rows that are in myList
  const customMoviesInMyList: Movie[] = [];
  
  finalUpdatedContentRows.forEach(row => {
    (Array.isArray(row.movies) ? row.movies : []).forEach(movie => {
      if (myList.includes(movie.id) && 
          !movies.find(m => m.id === movie.id) && 
          !customMoviesInMyList.find(m => m.id === movie.id)) {
        customMoviesInMyList.push(movie);
      }
    });
  });
  
  const allMyListMovies = [...myListMovies, ...customMoviesInMyList];
  
  const finalContentRows = allMyListMovies.length > 0 
    ? [{ id: 'mylist', title: 'My List', movies: allMyListMovies }, ...finalUpdatedContentRows]
    : finalUpdatedContentRows;

  // Get all movies currently displayed in carousels for search
  const allCarouselMovies: Movie[] = [];
  const seenIds = new Set<string>();
  
  finalContentRows.forEach(row => {
    if (Array.isArray(row.movies)) {
      row.movies.forEach(movie => {
        if (!seenIds.has(movie.id)) {
          seenIds.add(movie.id);
          allCarouselMovies.push(movie);
        }
      });
    }
  });

  // Create a featured movie for the Hero component
  const heroMovie = {
    ...featuredMovie,
    title: 'AI Hackathon News',
    description: 'Stay updated with the latest developments in artificial intelligence, hackathons, and cutting-edge technology innovations.'
  };

  // Render user space pages
  if (currentUserPage === 'mylist') {
    return (
      <MyListPage
        onBack={handleBackToMain}
        myListMovies={allMyListMovies}
        onPlay={handlePlay}
        onAddToList={handleAddToList}
        onMoreInfo={handleMoreInfo}
        myList={myList}
      />
    );
  }

  if (currentUserPage === 'preferences') {
    return <PreferencesPage onBack={handleBackToMain} />;
  }

  if (currentUserPage === 'profile') {
    return (
      <ProfilePage
        onBack={handleBackToMain}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
      />
    );
  }

  if (currentUserPage === 'settings') {
    return <SettingsPage onBack={handleBackToMain} />;
  }

  return (
    <div className="bg-[#081932] min-h-screen">
      {/* User Sidebar */}
      <UserSidebar
        isOpen={isUserSidebarOpen}
        onClose={() => setIsUserSidebarOpen(false)}
        onNavigate={handleUserNavigation}
        isLoggedIn={isLoggedIn}
      />

      {/* Navigation Header */}
      <Header
        onSearch={handleSearch}
        onLogoClick={handleLogoClick}
        isScrolled={isScrolled}
        searchSuggestions={searchSuggestions}
        onMovieSelect={handleMovieSelect}
        onUserSidebarToggle={handleUserSidebarToggle}
      />

      {searchQuery ? (
        <SearchResults
          query={searchQuery}
          results={searchResults}
          onPlay={handlePlay}
          onAddToList={handleAddToList}
          onMoreInfo={handleMoreInfo}
          myList={myList}
        />
      ) : (
        <>
          {/* Hero Section with Video Background */}
          <Hero
            movie={heroMovie}
            onPlay={handlePlay}
            onAddToList={handleAddToList}
            onMoreInfo={handleMoreInfo}
            myList={myList}
            videoUrl="/videos/header.mp4"
          />

          {/* Content Rows Section */}
          <div className="relative z-20 bg-[#081932] min-h-screen">
            {finalContentRows.map((row) => (
              <div
                key={row.id}
                id={
                  row.id === 'mylist' ? 'mylist-section' : 
                  row.id === 'most-liked' ? 'most-liked-section' : 
                  undefined
                }
                className={row.id === 'mylist' ? 'pt-8' : 'pt-4'}
              >
                <ContentRow
                  title={row.title}
                  movies={row.movies}
                  onPlay={handlePlay}
                  onAddToList={handleAddToList}
                  onMoreInfo={handleMoreInfo}
                  isMyListRow={row.id === 'mylist'}
                  myList={myList}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {currentMovie && (
        <VideoPlayer
          movie={currentMovie}
          onClose={() => setCurrentMovie(null)}
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onPlay={handlePlay}
          onAddToList={handleAddToList}
          onLike={handleLike}
          currentLikes={movieLikes[selectedMovie.id] || selectedMovie.likes || 0}
          isLiked={userLikes.includes(selectedMovie.id)}
          myList={myList}
        />
      )}
    </div>
  );
}

export default App;