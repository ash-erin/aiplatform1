import { useEffect } from 'react';
import { useCarouselNavigation } from '../hooks/useCarouselNavigation';

export const KeyboardNavigation: React.FC = () => {
  const {
    scrollToNext,
    scrollToPrevious,
    scrollToTop,
    hasNext,
    hasPrevious
  } = useCarouselNavigation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle navigation if no input is focused
      const activeElement = document.activeElement;
      const isInputFocused = activeElement?.tagName === 'INPUT' || 
                            activeElement?.tagName === 'TEXTAREA' ||
                            activeElement?.contentEditable === 'true';

      if (isInputFocused) return;

      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
          event.preventDefault();
          if (hasNext) scrollToNext();
          break;
        
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          if (hasPrevious) scrollToPrevious();
          break;
        
        case 'Home':
          event.preventDefault();
          scrollToTop();
          break;
        
        case 'j': // Vim-style navigation
          event.preventDefault();
          if (hasNext) scrollToNext();
          break;
        
        case 'k': // Vim-style navigation
          event.preventDefault();
          if (hasPrevious) scrollToPrevious();
          break;
        
        case 'g':
          // Handle 'gg' for going to top (vim-style)
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            scrollToTop();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToNext, scrollToPrevious, scrollToTop, hasNext, hasPrevious]);

  return null; // This component doesn't render anything
};