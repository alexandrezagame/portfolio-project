import React, { useRef, useEffect, useState } from 'react';
import { MineRunner } from 'mine-runner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { useParallax } from '../hooks/useParallax';

const OptimizedMineRunner = () => {
  const socialLinks = [
    {
      icon: faGithubAlt,
      href: 'https://github.com/zagamealexandre',
      label: 'GitHub',
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/alexandrezagame/',
      label: 'LinkedIn',
    },
    {
      icon: faMedium,
      href: 'https://medium.com/@alexbacelo/from-sales-to-web-development-a-journey-of-learning-4ee2c826df46?source=friends_link&sk=e7aa09d4694d10caf6a3e90a79ccf4cd',
      label: 'Medium',
    },
  ];
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  // Parallax effects - overlay moves faster (up) than background (down) for depth
  const backgroundParallax = useParallax(0.15, 'down'); // Slower, moves down
  const overlayParallax = useParallax(0.3, 'up'); // Faster, moves up (opposite direction)


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Render immediately when visible - no delays
          if (entry.isIntersecting) {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            // Render immediately for fastest loading
            setShouldRender(true);
            // Trigger fade-in animation after a tiny delay to ensure DOM is ready
            setTimeout(() => {
              setIsVisible(true);
            }, 10);
          } else {
            // Unmount when scrolled away with a small delay to avoid flickering
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            setIsVisible(false);
            timeoutRef.current = setTimeout(() => {
              setShouldRender(false);
            }, 300);
          }
        });
      },
      {
        threshold: 0, // Trigger as soon as any part is visible
        rootMargin: '400px', // Start loading 400px before it comes into view for preloading
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="mine-runner-section"
      style={{
        minHeight: '600px',
        position: 'relative',
      }}
    >
      {shouldRender && (
        <div 
          className={`mine-runner-wrapper ${isVisible ? 'visible' : ''}`}
          ref={backgroundParallax.ref}
          style={{ transform: backgroundParallax.transform }}
        >
          <MineRunner />
        </div>
      )}
      <div className="contact-social-overlay">
        <div 
          className="contact-social-content"
          ref={overlayParallax.ref}
          style={{ transform: overlayParallax.transform }}
        >
          <h3 className="contact-social-heading">Find me online</h3>
          <p className="contact-subtitle">
            Get in touch to discuss opportunities, collaborations, or just say hello.
          </p>
          <div className="contact-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <FontAwesomeIcon icon={link.icon} className="contact-social-icon" />
                <span className="contact-social-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedMineRunner;

