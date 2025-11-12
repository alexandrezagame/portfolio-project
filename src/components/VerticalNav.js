import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../stylesheets/VerticalNav.css';

const VerticalNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOnTrackPage, setIsOnTrackPage] = useState(false);

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
      
      // Check if we're on the track page (about section)
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if about section is in viewport
        setIsOnTrackPage(rect.top <= viewportHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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
      <nav className="vertical-nav">
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

