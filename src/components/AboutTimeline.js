import React, { useState, useMemo, useEffect } from 'react';
import '../stylesheets/AboutTimeline.css';
import VerticalNav from './VerticalNav';
import { useParallax } from '../hooks/useParallax';
import { GenerativeArtScene } from './three/GenerativeArtScene';

const STEPS = [
  { id: 'business', year: '2014', category: 'Business', gradient: ['#5f5a63', '#c9b7c4'], caption: "Started by learning how to sell, build trust, and get close to users — the foundation for everything that came next." },
  { id: 'tech', year: '2020', category: 'Tech', gradient: ['#1a2a6c', '#3f5efb'], caption: "Moved from business into engineering, learning to design, build, and ship systems that actually scale." },
  { id: 'product', year: '2023', category: 'Product', gradient: ['#e83124', '#ff8a3d'], caption: "Combined strategy, technology, and execution — leading products from concept to measurable impact." },
];

export default function AboutTimeline() {
  const [active, setActive] = useState('product');
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const activeStep = useMemo(() => STEPS.find((s) => s.id === active) ?? STEPS[0], [active]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effects for TRACK section - increased speeds for more noticeable effect
  const trackWordParallax = useParallax(0.5, 'up');
  const animationParallax = useParallax(0.6, 'down');

  return (
    <section id="about" className="about-who-section">
      <VerticalNav />
      <div className="who-wrapper" style={{ '--who-start': activeStep.gradient[0], '--who-end': activeStep.gradient[1] }}>
        <div className="who-stage" ref={animationParallax.ref} style={{ transform: animationParallax.transform }}>
          <GenerativeArtScene className="who-animation" color={activeStep.gradient[1]} />
        </div>
        <div className="who-word" ref={trackWordParallax.ref} style={{ transform: trackWordParallax.transform }} aria-hidden>
          <span>T</span><span>R</span><span>A</span><span>C</span><span>K</span>
        </div>
        <p className={`who-caption ${isHovering || isMobile ? 'visible' : 'hidden'}`}>{activeStep.caption}</p>
      </div>

      <div className="timeline-wrap">
        <div className={`timeline-hint ${isHovering ? 'fade-out' : 'fade-in'}`}>HOVER THE STEPS</div>
        <div className="timeline-track show-ticks">
          <div className="tick" style={{ left: '0%' }}><span className="tick-year">2014</span></div>
          <div className="tick" style={{ left: '33.333%' }}><span className="tick-year">2020</span></div>
          <div className="tick" style={{ left: '66.666%' }}><span className="tick-year">2023</span></div>

          <button type="button" className={`segment s1 ${active === 'business' ? 'is-active' : ''}`} onMouseEnter={() => { setActive('business'); setIsHovering(true); }} onMouseLeave={() => setIsHovering(false)} onFocus={() => setActive('business')} onClick={() => setActive('business')}><span>BUSINESS</span></button>
          <button type="button" className={`segment s2 ${active === 'tech' ? 'is-active' : ''}`} onMouseEnter={() => { setActive('tech'); setIsHovering(true); }} onMouseLeave={() => setIsHovering(false)} onFocus={() => setActive('tech')} onClick={() => setActive('tech')}><span>TECH</span></button>
          <button type="button" className={`segment s3 ${active === 'product' ? 'is-active' : ''}`} onMouseEnter={() => { setActive('product'); setIsHovering(true); }} onMouseLeave={() => setIsHovering(false)} onFocus={() => setActive('product')} onClick={() => setActive('product')}><span>PRODUCT</span></button>
        </div>
      </div>
    </section>
  );
}
