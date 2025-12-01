import React, { useRef, useEffect, useState } from 'react';
import { MineRunner } from 'mine-runner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

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
  const timeoutRef = useRef(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Detect when user stops scrolling
  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 200); // Reduced from 500ms to 200ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Render when visible (even while scrolling, but pause when scrolled away)
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            // Render after a short delay to avoid rendering during fast scrolls
            timeoutRef.current = setTimeout(() => {
              setShouldRender(true);
            }, isScrollingRef.current ? 300 : 100);
          } else {
            // Unmount when scrolled away
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setShouldRender(false);
            }, 300); // Small delay to avoid flickering
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5], // Multiple thresholds for smoother transitions
        rootMargin: '100px', // Start loading 100px before it comes into view
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
      {shouldRender && <MineRunner />}
      <div className="contact-social-overlay">
        <div className="contact-social-content">
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

