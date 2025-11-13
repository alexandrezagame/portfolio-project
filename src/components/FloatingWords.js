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

export default function FloatingWords({ lightPosition }) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [wordStates, setWordStates] = useState({});

  // Initialize positions evenly distributed across the top section (excluding bottom black banner)
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const padding = 100;
    
    // Container is already constrained to top 70vh (excluding bottom black banner)
    const availableWidth = rect.width - padding * 2;
    const availableHeight = rect.height - padding;
    
    // Use a grid layout: 2 rows x 5 columns for 10 sentences
    const rows = 2;
    const cols = 5;
    const cellWidth = availableWidth / cols;
    const cellHeight = availableHeight / rows;
    
    // Shuffle sentences for variety
    const shuffledSentences = [...SENTENCES].sort(() => Math.random() - 0.5);
    
    const newPositions = shuffledSentences.map((text, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      // Position in the center of each grid cell with some randomization
      // Y position is relative to top of container, not including bottom banner
      const cellCenterX = padding + (col + 0.5) * cellWidth;
      const cellCenterY = padding + (row + 0.5) * cellHeight;
      
      // Add some random offset within the cell (30% of cell size) to avoid perfect grid alignment
      const randomOffsetX = (Math.random() - 0.5) * cellWidth * 0.3;
      const randomOffsetY = (Math.random() - 0.5) * cellHeight * 0.3;
      
      return {
        id: index,
        text: text,
        x: cellCenterX + randomOffsetX,
        y: cellCenterY + randomOffsetY,
      };
    });

    setPositions(newPositions);
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

