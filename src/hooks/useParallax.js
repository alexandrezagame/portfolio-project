import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for parallax effect based on scroll position
 * Calculates parallax based on scroll position and viewport calculations
 * @param {number} speed - Parallax speed multiplier (0.1 to 0.5 recommended)
 * @param {string} direction - 'up' or 'down' for parallax direction
 * @returns {Object} - { ref, transform }
 */
export const useParallax = (speed = 0.2, direction = 'up') => {
  const elementRef = useRef(null);
  const [transform, setTransform] = useState('translateY(0)');
  const rafIdRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Disable parallax on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return;
    }

    const updateParallax = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Get element's position in the document
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      
      // Calculate viewport center in document coordinates
      const viewportCenter = scrollY + windowHeight / 2;
      
      // Distance from viewport center (positive = below center, negative = above center)
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Normalize based on viewport height for smoother effect
      const normalizedDistance = distanceFromCenter / (windowHeight / 2);
      
      // Clamp to reasonable range
      const clampedDistance = Math.max(-2, Math.min(2, normalizedDistance));
      
      // Calculate parallax offset - increased multiplier for more noticeable effect
      const offset = clampedDistance * speed * 120;
      
      // Apply direction
      const finalOffset = direction === 'down' ? -offset : offset;
      
      setTransform(`translateY(${finalOffset}px)`);
      
      // Continue animation loop
      rafIdRef.current = requestAnimationFrame(updateParallax);
    };

    // Start animation loop
    rafIdRef.current = requestAnimationFrame(updateParallax);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [speed, direction]);

  return { ref: elementRef, transform };
};

