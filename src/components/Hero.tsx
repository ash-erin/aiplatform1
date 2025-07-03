import React, { useRef, useEffect, useState } from 'react';
import { Play, Plus, Info, X } from 'lucide-react';
import { Movie } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
  videoUrl?: string; // Optional video URL for background
}

export const Hero: React.FC<HeroProps> = ({ 
  movie, 
  onPlay, 
  onAddToList, 
  onMoreInfo, 
  myList,
  videoUrl = "/assets/header.mp4" // Default to your header video
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isInMyList = myList.includes(movie.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          
          if (videoRef.current) {
            if (entry.isIntersecting && videoLoaded) {
              // Play video when Hero is visible
              videoRef.current.play().catch((error) => {
                console.warn('Video autoplay failed:', error);
              });
            } else {
              // Pause video when Hero is not visible
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the Hero is visible
        rootMargin: '50px' // Start observing 50px before entering viewport
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoLoaded]);

  // Handle video load
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }
  };

  // Handle visibility change (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else if (isVisible && videoLoaded) {
          videoRef.current.play().catch((error) => {
            console.warn('Video autoplay failed:', error);
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isVisible, videoLoaded]);

  return (
    <div ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster={movie.backdrop} // Fallback image while video loads
          onLoadedData={handleVideoLoad}
          onError={() => console.error('Video failed to load')}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081932]/80 via-[#081932]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081932]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {movie.title}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-md">
          {movie.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center justify-center space-x-3 bg-white text-[#081932] px-8 py-4 rounded-md font-semibold hover:bg-white/90 transition-colors"
          >
            <Play size={24} fill="currentColor" />
            <span>Play</span>
          </button>
          
          <button
            onClick={() => onAddToList(movie)}
            className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-md font-semibold transition-colors ${
              isInMyList 
                ? 'bg-[#ddb870] text-[#081932] hover:bg-[#ddb870]/80' 
                : 'bg-[#0f2f5f]/80 text-white hover:bg-[#ddb870] hover:text-[#081932]'
            }`}
          >
            {isInMyList ? (
              <X size={20} />
            ) : (
              <Plus size={20} />
            )}
            <span>My List</span>
          </button>
          
          <button
            onClick={() => onMoreInfo(movie)}
            className="flex items-center justify-center space-x-3 bg-[#0f2f5f]/60 text-white px-8 py-4 rounded-md font-semibold hover:bg-[#0f2f5f]/80 transition-colors"
          >
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>

        {/* Video Status Indicator (for debugging) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 text-white/60 text-sm">
            Video Status: {isVisible ? 'Visible' : 'Hidden'} | 
            Loaded: {videoLoaded ? 'Yes' : 'No'}
          </div>
        )}
      </div>
    </div>
  );
};