import { useCallback, useEffect, useState } from 'react';

interface CarouselSection {
  id: string;
  title: string;
  element: HTMLElement | null;
}

export const useCarouselNavigation = () => {
  const [carouselSections, setCarouselSections] = useState<CarouselSection[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Initialize carousel sections
  useEffect(() => {
    const updateSections = () => {
      const sections: CarouselSection[] = [];
      
      // Add video header as first section
      const videoHeader = document.querySelector('.video-header-section');
      if (videoHeader) {
        sections.push({
          id: 'video-header',
          title: 'Featured',
          element: videoHeader as HTMLElement
        });
      }

      // Find all carousel sections
      const carouselElements = document.querySelectorAll('[data-carousel-section]');
      carouselElements.forEach((element) => {
        const id = element.getAttribute('data-carousel-section');
        const titleElement = element.querySelector('h2');
        const title = titleElement?.textContent || 'Unknown Section';
        
        if (id) {
          sections.push({
            id,
            title,
            element: element as HTMLElement
          });
        }
      });

      setCarouselSections(sections);
    };

    // Initial setup
    updateSections();

    // Update when DOM changes (e.g., My List appears/disappears)
    const observer = new MutationObserver(updateSections);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-carousel-section']
    });

    return () => observer.disconnect();
  }, []);

  // Track current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = carouselSections.length - 1; i >= 0; i--) {
        const section = carouselSections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setCurrentSectionIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [carouselSections, isScrolling]);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= carouselSections.length) return;

    const section = carouselSections[index];
    if (!section.element) return;

    setIsScrolling(true);
    setCurrentSectionIndex(index);

    const headerHeight = 80; // Account for fixed header
    const targetPosition = section.element.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Reset scrolling flag after animation
    setTimeout(() => setIsScrolling(false), 1000);
  }, [carouselSections]);

  const scrollToNext = useCallback(() => {
    const nextIndex = Math.min(currentSectionIndex + 1, carouselSections.length - 1);
    scrollToSection(nextIndex);
  }, [currentSectionIndex, carouselSections.length, scrollToSection]);

  const scrollToPrevious = useCallback(() => {
    const prevIndex = Math.max(currentSectionIndex - 1, 0);
    scrollToSection(prevIndex);
  }, [currentSectionIndex, scrollToSection]);

  const scrollToTop = useCallback(() => {
    setIsScrolling(true);
    setCurrentSectionIndex(0);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => setIsScrolling(false), 1000);
  }, []);

  return {
    carouselSections,
    currentSectionIndex,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    scrollToTop,
    isScrolling,
    hasNext: currentSectionIndex < carouselSections.length - 1,
    hasPrevious: currentSectionIndex > 0
  };
};