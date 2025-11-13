import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import '../stylesheets/VerticalNav.css';

// Map sections to nav items
const sectionToNavMap = {
  'home': 0,
  'about': 1,
  'timeline': 2,
  'contact': 3
};

const VerticalNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOnTrackPage, setIsOnTrackPage] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollDirection, setScrollDirection] = useState('down');
  const navRef = useRef(null);
  const dinoRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > viewportHeight);
      
      // Track scroll direction
      if (scrollPosition > lastScrollY.current) {
        setScrollDirection('down');
      } else if (scrollPosition < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = scrollPosition;
      
      // Check if we're on the track page (about section)
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if about section is in viewport
        setIsOnTrackPage(rect.top <= viewportHeight && rect.bottom >= 0);
      }

      // Determine which section is currently in view
      const sections = ['home', 'about', 'timeline', 'contact'];
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is in view if its top is above the middle of viewport
          if (rect.top <= viewportHeight * 0.5) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Update dino position continuously based on scroll progress
  useEffect(() => {
    if (!navRef.current || !dinoRef.current || isMobile) return;

    const updateDinoPosition = () => {
      const navLinks = navRef.current.querySelectorAll('.vertical-nav-link');
      if (navLinks.length === 0 || !dinoRef.current) return;

      const navRect = navRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // Get all section positions
      const sections = ['home', 'about', 'timeline', 'contact'];
      const sectionData = sections.map((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (!section) return null;
        const rect = section.getBoundingClientRect();
        const absoluteTop = rect.top + scrollY;
        const absoluteBottom = rect.bottom + scrollY;
        return {
          id: sectionId,
          index,
          top: absoluteTop,
          bottom: absoluteBottom,
          center: absoluteTop + (absoluteBottom - absoluteTop) / 2
        };
      }).filter(Boolean);

      if (sectionData.length === 0) return;

      // Get nav link positions
      const navLinkPositions = Array.from(navLinks).map(link => {
        const linkRect = link.getBoundingClientRect();
        return linkRect.top + linkRect.height / 2 - navRect.top;
      });

      // Use viewport center as reference point
      const viewportCenter = scrollY + viewportHeight * 0.5;
      
      let targetNavPosition = navLinkPositions[0]; // Default to first nav item
      
      // Find which section we're in or between
      for (let i = 0; i < sectionData.length; i++) {
        const section = sectionData[i];
        const nextSection = sectionData[i + 1];
        
        // If we're within this section
        if (viewportCenter >= section.top && viewportCenter <= section.bottom) {
          // Dino should be exactly on the corresponding nav item
          targetNavPosition = navLinkPositions[section.index];
          break;
        }
        
        // If we're between this section and the next
        if (nextSection && viewportCenter > section.bottom && viewportCenter < nextSection.top) {
          // Interpolate smoothly between nav items
          const sectionGap = nextSection.top - section.bottom;
          const progressInGap = (viewportCenter - section.bottom) / sectionGap;
          
          // Smooth interpolation with easing
          const easedProgress = progressInGap < 0.5 
            ? 2 * progressInGap * progressInGap 
            : 1 - Math.pow(-2 * progressInGap + 2, 2) / 2;
          
          const navGap = navLinkPositions[nextSection.index] - navLinkPositions[section.index];
          targetNavPosition = navLinkPositions[section.index] + (easedProgress * navGap);
          break;
        }
        
        // If we're before the first section
        if (i === 0 && viewportCenter < section.top) {
          targetNavPosition = navLinkPositions[0];
          break;
        }
        
        // If we're after the last section
        if (i === sectionData.length - 1 && viewportCenter > section.bottom) {
          targetNavPosition = navLinkPositions[section.index];
          break;
        }
      }

      // Clamp to nav bounds
      const clampedPosition = Math.max(0, Math.min(navRect.height, targetNavPosition));

      dinoRef.current.style.top = `${clampedPosition}px`;
    };

    // Update on scroll
    const handleScrollUpdate = () => {
      requestAnimationFrame(updateDinoPosition);
    };

    // Initial position
    const timeoutId = setTimeout(() => {
      updateDinoPosition();
    }, 100);

    // Update on scroll and resize
    window.addEventListener('scroll', handleScrollUpdate, { passive: true });
    window.addEventListener('resize', updateDinoPosition);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', updateDinoPosition);
    };
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger button - visible on mobile after scrolling OR on track page */}
      {isMobile && (isScrolled || isOnTrackPage) && (
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Mobile menu overlay */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={(e) => {
          // Close menu when clicking overlay background, not the nav itself
          if (e.target === e.currentTarget) {
            handleLinkClick();
          }
        }}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <Link 
              smooth={true} 
              to="home" 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              HOME
            </Link>
            <Link 
              smooth={true} 
              to="about" 
              offset={-50} 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              ABOUT
            </Link>
            <Link 
              smooth={true} 
              to="timeline" 
              offset={-60} 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              WORK
            </Link>
            <Link 
              smooth={true} 
              to="contact" 
              offset={-40} 
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}

      {/* Desktop vertical nav - hidden on mobile */}
      <nav className="vertical-nav" ref={navRef}>
        {/* Dino indicator */}
        {!isMobile && (
          <div 
            className={`vertical-nav-dino ${scrollDirection === 'up' ? 'facing-up' : 'facing-down'}`} 
            ref={dinoRef}
          >
            <img 
              src="/dino.gif" 
              alt="Dino navigation indicator" 
              className="vertical-nav-dino-image"
            />
          </div>
        )}
        <Link smooth={true} to="home" className="vertical-nav-link">
          HOME
        </Link>
        <Link smooth={true} to="about" offset={-50} className="vertical-nav-link">
          ABOUT
        </Link>
        <Link smooth={true} to="timeline" offset={-60} className="vertical-nav-link">
          WORK
        </Link>
        <Link smooth={true} to="contact" offset={-40} className="vertical-nav-link">
          CONTACT
        </Link>
      </nav>
    </>
  );
};

export default VerticalNav;

