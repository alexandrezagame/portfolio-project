import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import InteractiveLight from './InteractiveLight';
import VerticalNav from './VerticalNav';
import FloatingWords from './FloatingWords';
import '../stylesheets/Header.css';

const Header = () => {
  const [lampPosition, setLampPosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, 
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 
  });
  const dinoContainerRef = useRef(null);
  const dinoImageRef = useRef(null);

  useEffect(() => {
    const updateMask = () => {
      if (!dinoContainerRef.current || !dinoImageRef.current) return;

      const dinoInner = dinoContainerRef.current.querySelector('.hero-subject-inner');
      if (!dinoInner) return;
      
      const dinoInnerRect = dinoInner.getBoundingClientRect();
      
      // Calculate position relative to the Dino inner container
      const relativeX = lampPosition.x - dinoInnerRect.left;
      const relativeY = lampPosition.y - dinoInnerRect.top;

      // Use a larger radius for better visibility - make it more forgiving
      const radius = 400;
      // Make the mask softer so Dino is more visible - show more area
      const maskValue = `radial-gradient(circle ${radius}px at ${relativeX}px ${relativeY}px, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0) 85%)`;
      
      dinoImageRef.current.style.maskImage = maskValue;
      dinoImageRef.current.style.WebkitMaskImage = maskValue;
      dinoImageRef.current.style.opacity = '1';
    };

    // Initial update
    const timeout = setTimeout(updateMask, 100);
    
    // Update on position change
    updateMask();
    const interval = setInterval(updateMask, 16); // ~60fps

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [lampPosition]);

  return (
    <section id="home" className="hero-section">
      {/* Radial glow background */}
      <div className="hero-gradient-overlay" />

      {/* Interactive light */}
      <InteractiveLight
        shineColor="#e83124"
        lampHeight="10vh"
        lampWidth="10vh"
        transitionDuration={500}
        onPositionChange={(pos) => {
          setLampPosition(pos);
        }}
      />

      {/* Dino animation - only visible when light is on it */}
      <div className="hero-subject" ref={dinoContainerRef}>
        {/* Floating words that react to flashlight */}
        <FloatingWords lightPosition={lampPosition} />
        
        <div className="hero-subject-inner">
          <img
            ref={dinoImageRef}
            src="/dino.gif"
            alt="Dino animation"
            className="hero-dino-image"
            onLoad={() => console.log('Dino GIF loaded successfully')}
            onError={(e) => console.error('Dino GIF failed to load:', e)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
        {/* Subtle reflection under Dino */}
        <div className="hero-subject-reflection" />
      </div>

      {/* Name lockup */}
      <div className="hero-name-lockup">
        <div className="hero-name-container">
          <div className="hero-name-title">Product Expert</div>
          <div className="hero-name-main">ALEX ZAGAME</div>
        </div>
      </div>

      {/* Left rail nav */}
      <VerticalNav />
    </section>
  );
};

export default Header;
