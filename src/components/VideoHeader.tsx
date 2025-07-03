import React, { useRef, useEffect, useState } from 'react';

interface VideoHeaderProps {
  videoSrc: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const VideoHeader: React.FC<VideoHeaderProps> = ({
  videoSrc,
  className = '',
  overlay = true,
  overlayOpacity = 0.6
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    // Intersection Observer for viewport detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          setIsInViewport(isVisible);
          
          if (isVisible && video.paused && !hasError && isLoaded) {
            video.play().catch((error) => {
              console.warn('Video autoplay failed:', error);
            });
          } else if (!isVisible && !video.paused) {
            video.pause();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the video is visible
        rootMargin: '50px' // Start loading slightly before entering viewport
      }
    );

    observer.observe(container);

    // Video event handlers
    const handleLoadedData = () => {
      setIsLoaded(true);
      setHasError(false);
    };

    const handleError = () => {
      setHasError(true);
      setIsLoaded(false);
      console.error('Failed to load video:', videoSrc);
    };

    const handleCanPlay = () => {
      if (isInViewport && video.paused) {
        video.play().catch((error) => {
          console.warn('Video autoplay failed:', error);
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Cleanup
    return () => {
      observer.disconnect();
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoSrc, isInViewport, hasError, isLoaded]);

  // Handle visibility change (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else if (isInViewport && !hasError && isLoaded) {
        video.play().catch((error) => {
          console.warn('Video autoplay failed:', error);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isInViewport, hasError, isLoaded]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {!hasError ? (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setHasError(true)}
            onLoadedData={() => {
              setIsLoaded(true);
              setHasError(false);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {overlay && (
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#081932]/40 via-[#081932]/60 to-[#081932]/80"
              style={{ 
                background: `linear-gradient(to bottom, 
                  rgba(8, 25, 50, ${overlayOpacity * 0.4}), 
                  rgba(8, 25, 50, ${overlayOpacity * 0.6}), 
                  rgba(8, 25, 50, ${overlayOpacity * 0.8}))` 
              }}
            />
          )}
        </>
      ) : (
        // Fallback background when video fails to load
        <div className="w-full h-full bg-gradient-to-br from-[#081932] via-[#0f2f5f] to-[#081932] flex items-center justify-center">
          <div className="text-center text-white/60">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Video content unavailable</p>
          </div>
        </div>
      )}
      
      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#081932] flex items-center justify-center">
          <div className="flex items-center space-x-2 text-white/60">
            <div className="w-4 h-4 border-2 border-[#ddb870] border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Loading video...</span>
          </div>
        </div>
      )}
    </div>
  );
};