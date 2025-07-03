import React from 'react';
import { ChevronUp, ChevronDown, Home, List, TrendingUp } from 'lucide-react';
import { useCarouselNavigation } from '../hooks/useCarouselNavigation';

interface CarouselNavigatorProps {
  className?: string;
}

export const CarouselNavigator: React.FC<CarouselNavigatorProps> = ({ 
  className = '' 
}) => {
  const {
    carouselSections,
    currentSectionIndex,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    scrollToTop,
    hasNext,
    hasPrevious
  } = useCarouselNavigation();

  const getIconForSection = (sectionId: string) => {
    switch (sectionId) {
      case 'video-header':
        return <Home size={16} />;
      case 'mylist':
        return <List size={16} />;
      case 'most-liked':
        return <TrendingUp size={16} />;
      default:
        return <div className="w-2 h-2 rounded-full bg-current" />;
    }
  };

  if (carouselSections.length === 0) return null;

  return (
    <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 ${className}`}>
      <div className="bg-[#081932]/90 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
        {/* Previous button */}
        <button
          onClick={scrollToPrevious}
          disabled={!hasPrevious}
          className={`block w-12 h-12 rounded-t-full transition-all duration-200 ${
            hasPrevious
              ? 'text-white hover:bg-[#ddb870] hover:text-[#081932] cursor-pointer'
              : 'text-white/30 cursor-not-allowed'
          }`}
          title="Previous section"
        >
          <ChevronUp size={20} className="mx-auto" />
        </button>

        {/* Section indicators */}
        <div className="px-2 py-1">
          {carouselSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`block w-8 h-8 rounded-full mb-1 last:mb-0 transition-all duration-200 flex items-center justify-center ${
                index === currentSectionIndex
                  ? 'bg-[#ddb870] text-[#081932] scale-110'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              title={section.title}
            >
              {getIconForSection(section.id)}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={scrollToNext}
          disabled={!hasNext}
          className={`block w-12 h-12 rounded-b-full transition-all duration-200 ${
            hasNext
              ? 'text-white hover:bg-[#ddb870] hover:text-[#081932] cursor-pointer'
              : 'text-white/30 cursor-not-allowed'
          }`}
          title="Next section"
        >
          <ChevronDown size={20} className="mx-auto" />
        </button>
      </div>

      {/* Quick actions */}
      <div className="mt-4 space-y-2">
        <button
          onClick={scrollToTop}
          className="block w-12 h-12 bg-[#081932]/90 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-[#ddb870] hover:text-[#081932] transition-all duration-200 shadow-xl"
          title="Back to top"
        >
          <Home size={20} className="mx-auto" />
        </button>
      </div>
    </div>
  );
};