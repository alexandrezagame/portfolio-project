import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/Header.css';

const SENTENCES = [
  'Move with intent',
  'Think in systems',
  'Design for clarity',
  'Ship with speed',
  'Own the outcome',
  'Cut the noise',
  'Solve what hurts',
  'Quality compounds',
  'Lead with focus',
  'Make it matter',
];

const LIGHT_RADIUS = 200; // pixels - how close the light needs to be
const CHARGE_DURATION = 1000; // ms - how long to stay at full intensity
const FADE_DURATION = 2000; // ms - how long to fade back to zero
const MIN_DISTANCE = 120; // minimum distance between sentence centers to avoid overlap

export default function FloatingWords({ lightPosition }) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [wordStates, setWordStates] = useState({});

  // Initialize positions evenly distributed across the top section (excluding bottom black banner)
  useEffect(() => {
    if (!containerRef.current) return;

    const calculatePositions = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Responsive padding: smaller on mobile
      const isMobile = window.innerWidth <= 768;
      const padding = isMobile ? 40 : 100;
      
      // Ensure we don't exceed container bounds
      const maxWidth = rect.width - padding * 2;
      const maxHeight = rect.height - padding * 2;
      
      const availableWidth = Math.max(0, maxWidth);
      const availableHeight = Math.max(0, maxHeight);
      
      // Use a grid layout: 2 rows x 5 columns for 10 sentences
      const rows = 2;
      const cols = 5;
      const cellWidth = availableWidth / cols;
      const cellHeight = availableHeight / rows;
      
      // Helper function to check if a position overlaps with existing positions
      const checkOverlap = (x, y, existingPositions) => {
        for (const pos of existingPositions) {
          const distance = Math.hypot(x - pos.x, y - pos.y);
          if (distance < MIN_DISTANCE) {
            return true; // Overlaps
          }
        }
        return false; // No overlap
      };

      // Shuffle sentences for variety
      const shuffledSentences = [...SENTENCES].sort(() => Math.random() - 0.5);
      
      const newPositions = [];
      const MAX_ATTEMPTS = 50; // max attempts to find a non-overlapping position per sentence
      
      shuffledSentences.forEach((text, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        
        // Start with grid cell center
        const cellCenterX = padding + (col + 0.5) * cellWidth;
        const cellCenterY = padding + (row + 0.5) * cellHeight;
        
        // Try to find a non-overlapping position
        let attempts = 0;
        let x, y;
        let hasOverlap = true;
        
        // Reduce offset factor to prevent overlaps
        const offsetFactor = isMobile ? 0.15 : 0.2;
        
        while (hasOverlap && attempts < MAX_ATTEMPTS) {
          // Add random offset within the cell
          const randomOffsetX = (Math.random() - 0.5) * cellWidth * offsetFactor;
          const randomOffsetY = (Math.random() - 0.5) * cellHeight * offsetFactor;
          
          x = cellCenterX + randomOffsetX;
          y = cellCenterY + randomOffsetY;
          
          // Ensure positions stay within bounds
          x = Math.max(padding, Math.min(rect.width - padding, x));
          y = Math.max(padding, Math.min(rect.height - padding, y));
          
          // Check for overlap with existing positions
          hasOverlap = checkOverlap(x, y, newPositions);
          attempts++;
        }
        
        // If we couldn't find a perfect spot, use the grid center (guaranteed to be spaced)
        if (hasOverlap) {
          x = cellCenterX;
          y = cellCenterY;
        }
        
        newPositions.push({
          id: index,
          text: text,
          x: x,
          y: y,
        });
      });

      setPositions(newPositions);
    };

    calculatePositions();

    // Recalculate on window resize
    const handleResize = () => {
      calculatePositions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check which words are hit by the flashlight
  useEffect(() => {
    if (!containerRef.current || positions.length === 0) return;

    const checkLightHit = () => {
      const rect = containerRef.current.getBoundingClientRect();
      // Convert light position to container-relative coordinates
      const lightX = lightPosition.x - rect.left;
      const lightY = lightPosition.y - rect.top;

      setWordStates((prevStates) => {
        const newStates = { ...prevStates };
        const now = Date.now();

        positions.forEach((pos) => {
          const dx = lightX - pos.x;
          const dy = lightY - pos.y;
          const distance = Math.hypot(dx, dy);
          const isHit = distance < LIGHT_RADIUS;

          if (isHit) {
            // Word is being hit by light
            if (!newStates[pos.id] || newStates[pos.id].state === 'hidden') {
              // Start charging
              newStates[pos.id] = {
                state: 'charging',
                startTime: now,
                lastHitTime: now,
              };
            } else if (newStates[pos.id].state === 'charging') {
              // Update last hit time
              const elapsed = now - newStates[pos.id].startTime;
              if (elapsed >= CHARGE_DURATION) {
                // Switch to pulsing if light stays on
                newStates[pos.id] = {
                  state: 'pulsing',
                  startTime: now,
                  lastHitTime: now,
                };
              } else {
                newStates[pos.id].lastHitTime = now;
              }
            } else if (newStates[pos.id].state === 'pulsing') {
              // Keep pulsing, update last hit time
              newStates[pos.id].lastHitTime = now;
            } else if (newStates[pos.id].state === 'fading') {
              // Light came back while fading - restart charge
              newStates[pos.id] = {
                state: 'charging',
                startTime: now,
                lastHitTime: now,
              };
            }
          } else {
            // Word is not being hit
            if (newStates[pos.id]) {
              if (newStates[pos.id].state === 'charging') {
                const elapsed = now - newStates[pos.id].startTime;
                // Calculate current opacity before fading
                const currentOpacity = Math.min(1, elapsed / CHARGE_DURATION);
                // Start fading from current opacity
                newStates[pos.id] = {
                  state: 'fading',
                  startTime: now,
                  fadeStartTime: now,
                  fadeStartOpacity: currentOpacity,
                };
              } else if (newStates[pos.id].state === 'pulsing') {
                // Light moved away from pulsing word - fade from current opacity
                // Calculate current pulsing opacity
                const pulseTime = (now - newStates[pos.id].startTime) % 2000;
                const currentOpacity = 0.7 + 0.3 * (0.5 + 0.5 * Math.sin((pulseTime / 2000) * Math.PI * 2));
                newStates[pos.id] = {
                  state: 'fading',
                  startTime: now,
                  fadeStartTime: now,
                  fadeStartOpacity: currentOpacity,
                };
              } else if (newStates[pos.id].state === 'fading') {
                // Continue fading
                const fadeElapsed = now - newStates[pos.id].fadeStartTime;
                if (fadeElapsed >= FADE_DURATION) {
                  // Fade complete - hide
                  newStates[pos.id] = {
                    state: 'hidden',
                    startTime: now,
                  };
                }
              }
            }
          }
        });

        return newStates;
      });
    };

    const interval = setInterval(checkLightHit, 16); // ~60fps
    return () => clearInterval(interval);
  }, [lightPosition, positions]);

  const getOpacity = (wordId) => {
    const state = wordStates[wordId];
    if (!state || state.state === 'hidden') return 0;

    const now = Date.now();

    if (state.state === 'charging') {
      const elapsed = now - state.startTime;
      // Smoothly increase from 0 to 1 over CHARGE_DURATION
      return Math.min(1, elapsed / CHARGE_DURATION);
    }

    if (state.state === 'pulsing') {
      // Pulse between 0.7 and 1.0
      const pulseTime = (now - state.startTime) % 2000; // 2 second pulse cycle
      return 0.7 + 0.3 * (0.5 + 0.5 * Math.sin((pulseTime / 2000) * Math.PI * 2));
    }

    if (state.state === 'fading') {
      const fadeElapsed = now - state.fadeStartTime;
      // Smoothly decrease from fadeStartOpacity (or 1 if not set) to 0 over FADE_DURATION
      const startOpacity = state.fadeStartOpacity !== undefined ? state.fadeStartOpacity : 1;
      return Math.max(0, startOpacity - (fadeElapsed / FADE_DURATION) * startOpacity);
    }

    return 0;
  };

  const getGlowIntensity = (wordId) => {
    const state = wordStates[wordId];
    if (!state || state.state === 'hidden') return 0;

    const opacity = getOpacity(wordId);
    // Glow intensity matches opacity but can be adjusted
    return opacity;
  };

  return (
    <div ref={containerRef} className="floating-words-container">
      {positions.map((pos) => {
        const opacity = getOpacity(pos.id);
        const glowIntensity = getGlowIntensity(pos.id);
        const isPulsing = wordStates[pos.id]?.state === 'pulsing';

        // Calculate glow shadow values based on intensity
        const glow1 = glowIntensity * 0.8;
        const glow2 = glowIntensity * 0.6;
        const glow3 = glowIntensity * 0.4;
        const glow4 = glowIntensity * 0.3;
        const dropShadow = glowIntensity * 0.5;

        return (
          <div
            key={pos.id}
            className={`floating-word ${isPulsing ? 'pulsing' : ''}`}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              opacity,
              textShadow: `
                0 0 10px rgba(232, 49, 36, ${glow1}),
                0 0 20px rgba(232, 49, 36, ${glow2}),
                0 0 30px rgba(232, 49, 36, ${glow3}),
                0 0 40px rgba(232, 49, 36, ${glow4})
              `,
              filter: `drop-shadow(0 0 8px rgba(232, 49, 36, ${dropShadow}))`,
            }}
          >
            {pos.text}
          </div>
        );
      })}
    </div>
  );
}

