import React, { useRef, useEffect, useState } from 'react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
  videoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  movie, 
  onPlay, 
  onAddToList, 
  onMoreInfo, 
  myList,
  videoUrl = "/assets/header.mp4"
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Triple Check #1: Intersection Observer for visibility-based autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);
          
          if (videoRef.current && videoLoaded && !hasError) {
            if (isIntersecting) {
              // TRIPLE CHECK: Force play when visible
              videoRef.current.play().catch((error) => {
                console.warn('Video autoplay failed:', error);
                // Try again after a short delay
                setTimeout(() => {
                  if (videoRef.current && isIntersecting) {
                    videoRef.current.play().catch(() => {
                      console.error('Video autoplay failed after retry');
                    });
                  }
                }, 100);
              });
            } else {
              // Pause when not visible
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '50px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoLoaded, hasError]);

  // Triple Check #2: Handle video load and immediate autoplay
  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    setHasError(false);
    
    // TRIPLE CHECK: Immediately try to play when loaded and visible
    if (videoRef.current && isVisible) {
      videoRef.current.play().catch((error) => {
        console.warn('Initial video play failed:', error);
        // Retry after short delay
        setTimeout(() => {
          if (videoRef.current && isVisible) {
            videoRef.current.play().catch(() => {
              console.error('Video play retry failed');
            });
          }
        }, 200);
      });
    }
  };

  // Triple Check #3: Handle tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current && videoLoaded && !hasError) {
        if (document.hidden) {
          videoRef.current.pause();
        } else if (isVisible) {
          // TRIPLE CHECK: Resume play when tab becomes visible
          videoRef.current.play().catch((error) => {
            console.warn('Video resume failed:', error);
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isVisible, videoLoaded, hasError]);

  // Handle video errors
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    setHasError(true);
    setVideoLoaded(false);
  };

  // Force play on user interaction (fallback)
  const handleVideoClick = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.play().catch((error) => {
        console.warn('Manual video play failed:', error);
      });
    }
  };

  return (
    <div ref={heroRef} className="relative h-80 md:h-96 flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {!hasError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={movie.backdrop}
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            onError={handleVideoError}
            onClick={handleVideoClick}
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback background image if video fails
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${movie.backdrop})` }}
          />
        )}
        
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081932]/80 via-[#081932]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081932]/60 via-transparent to-transparent" />
      </div>

      {/* Content - Only Title and Description */}
      <div className="relative z-10 px-4 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          AI Hackathon News
        </h1>
        
        <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
          Stay updated with the latest developments in artificial intelligence, hackathons, and cutting-edge technology innovations.
        </p>
      </div>
    </div>
  );
};