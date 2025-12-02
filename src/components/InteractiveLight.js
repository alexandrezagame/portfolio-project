import React, { useEffect, useRef, useState } from 'react';

const InteractiveLight = ({
  shineColor = '#e83124',
  lampHeight = '50vh',
  lampWidth = '4vh',
  enableTilt = false,
  transitionDuration = 500,
  onPositionChange,
}) => {
  const lampRef = useRef(null);
  const containerRef = useRef(null);
  const [tiltEnabled, setTiltEnabled] = useState(enableTilt);
  const [lampDirection, setLampDirection] = useState('center');
  const [ready, setReady] = useState(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // Generate lighter shades of shine color
  const lightenColor = (color, percent) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const newR = Math.min(255, Math.floor(r + ((255 - r) * percent) / 100));
    const newG = Math.min(255, Math.floor(g + ((255 - g) * percent) / 100));
    const newB = Math.min(255, Math.floor(b + ((255 - b) * percent) / 100));

    return `rgb(${newR}, ${newG}, ${newB})`;
  };

  const getLampBoxShadow = (direction) => {
    const light20 = lightenColor(shineColor, 20);
    const light10 = lightenColor(shineColor, 10);
    const light5 = lightenColor(shineColor, 5);

    switch (direction) {
      case 'left':
        return `
          0 0 1vh 0.5vh ${light20},
          -1vh 0 2vh 1vh ${light20},
          -4vh 0 5vh 1vh ${light10},
          -10vh 0 10vh 1vh ${light5},
          -13vh 0 15vh 1vh ${shineColor},
          -15vh 0 20vh 1vh ${shineColor},
          -25vh 0 25vh 0 ${shineColor},
          -50vh 0 50vh 0 ${shineColor}
        `;
      case 'right':
        return `
          0 0 1vh 0.5vh ${light20},
          1vh 0 2vh 1vh ${light20},
          4vh 0 5vh 1vh ${light10},
          10vh 0 10vh 1vh ${light5},
          13vh 0 15vh 1vh ${shineColor},
          15vh 0 20vh 1vh ${shineColor},
          25vh 0 25vh 0 ${shineColor},
          50vh 0 50vh 0 ${shineColor}
        `;
      case 'top':
        return `
          0 0 1vh 0.5vh ${light20},
          0 -1vh 2vh 1vh ${light20},
          0 -4vh 5vh 1vh ${light10},
          0 -10vh 10vh 1vh ${light5},
          0 -13vh 15vh 1vh ${shineColor},
          0 -15vh 20vh 1vh ${shineColor},
          0 -25vh 25vh 0 ${shineColor},
          0 -50vh 50vh 0 ${shineColor}
        `;
      case 'bottom':
        return `
          0 0 1vh 0.5vh ${light20},
          0 1vh 2vh 1vh ${light20},
          0 4vh 5vh 1vh ${light10},
          0 10vh 10vh 1vh ${light5},
          0 13vh 15vh 1vh ${shineColor},
          0 15vh 20vh 1vh ${shineColor},
          0 25vh 25vh 0 ${shineColor},
          0 50vh 50vh 0 ${shineColor}
        `;
      default: // "center"
        return `
          0 0 1vh 0.5vh ${light20},
          0 0 2vh 1vh ${light20},
          0 0 5vh 1vh ${light10},
          0 0 10vh 1vh ${light5},
          0 0 15vh 1vh ${shineColor},
          0 0 20vh 1vh ${shineColor},
          0 0 25vh 1vh ${shineColor},
          0 0 50vh 1vh ${shineColor}
        `;
    }
  };

  const handleMouseMove = (e) => {
    if (!ready || !lampRef.current || !containerRef.current) return;

    const xPos = e.clientX;
    const yPos = e.clientY;
    const lastX = lastXRef.current;
    let offset = 0;

    if (tiltEnabled) {
      if (lastX < xPos - 1) {
        setLampDirection('right');
        offset = 200;
      } else if (lastX > xPos + 1) {
        setLampDirection('left');
        offset = -200;
      } else if (lastX > yPos + 1) {
        setLampDirection('top');
        offset = 200;
      } else if (lastX > yPos + 1) {
        setLampDirection('bottom');
        offset = -200;
      } else {
        setLampDirection('center');
      }
    }

    // Use requestAnimationFrame to prevent glitches when pausing
    requestAnimationFrame(() => {
      if (!lampRef.current || !containerRef.current) return;
      
      // Round values to prevent sub-pixel rendering issues
      const lampWidth = lampRef.current.offsetWidth;
      const lampHeight = lampRef.current.offsetHeight;
      
      const lampX = Math.round(xPos - lampWidth / 2);
      const lampY = Math.round(yPos - lampHeight / 2);
      
      // Use translate3d for hardware acceleration and smoother rendering
      lampRef.current.style.transition = `transform ${transitionDuration}ms ease-out, box-shadow ${transitionDuration}ms ease-out`;
      
      lampRef.current.style.transform = `translate3d(${lampX}px, ${lampY}px, 0)`;

      // Notify parent of position change
      if (onPositionChange) {
        onPositionChange({ x: xPos, y: yPos });
      }
    });

    lastXRef.current = xPos;
    lastYRef.current = yPos;
  };

  const runIntroAnimation = () => {
    if (!lampRef.current || !containerRef.current) return;

    const xPos = window.innerWidth / 2;
    const yPos = window.innerHeight / 2;
    lastXRef.current = xPos;
    lastYRef.current = yPos;

    lampRef.current.style.transform = `translate3d(${Math.round(xPos)}px, ${Math.round(yPos)}px, 0)`;

    setTimeout(() => {
      if (lampRef.current && containerRef.current) {
        const lampX = Math.round(xPos * 1.8 - lampRef.current.offsetWidth / 2);
        const lampY = Math.round(yPos * 1.5 - lampRef.current.offsetHeight / 2);
        lampRef.current.style.transform = `translate3d(${lampX}px, ${lampY}px, 0)`;
      }
    }, 100);

    setTimeout(() => {
      if (lampRef.current && containerRef.current) {
        const finalX = Math.round(xPos * 0.5 - lampRef.current.offsetWidth / 2);
        const finalY = Math.round(yPos * 0.3 - lampRef.current.offsetHeight / 2);
        lampRef.current.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
        if (onPositionChange) {
          onPositionChange({ x: xPos * 0.5, y: yPos * 0.3 });
        }
      }
    }, 1000);

    setTimeout(() => {
      setReady(true);
    }, 2000);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    runIntroAnimation();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ready, tiltEnabled]);

  return (
    <div ref={containerRef} className="interactive-light-container">
      <div
        ref={lampRef}
        className="interactive-light-lamp"
        style={{
          height: lampHeight,
          width: lampWidth,
          backgroundColor: '#fff',
          borderRadius: `calc(${lampWidth} / 2)`,
          boxShadow: getLampBoxShadow(lampDirection),
          transition: `transform ${transitionDuration}ms ease-out, box-shadow ${transitionDuration}ms ease-out`,
        }}
      />
    </div>
  );
};

export default InteractiveLight;

