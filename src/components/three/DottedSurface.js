import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DottedSurface({ className = '' }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Wait a tick to ensure container is properly sized
    const initTimeout = setTimeout(() => {
      if (!containerRef.current) return;

      const SEPARATION = 150;
      const AMOUNTX = 40;
      const AMOUNTY = 60;

      // Scene setup
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 2000, 10000);

      const updateSize = () => {
        if (!containerRef.current) return { width: 0, height: 0 };
        const rect = containerRef.current.getBoundingClientRect();
        return {
          width: rect.width || window.innerWidth,
          height: rect.height || window.innerHeight
        };
      };

      const { width, height } = updateSize();

      const camera = new THREE.PerspectiveCamera(
        60,
        width / height,
        1,
        10000,
      );
      camera.position.set(0, 355, 1220);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);

      containerRef.current.appendChild(renderer.domElement);

      // Create particles
      const particles = [];
      const positions = [];
      const colors = [];

      // Create geometry for all particles
      const geometry = new THREE.BufferGeometry();

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const y = 0; // Will be animated
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          positions.push(x, y, z);
          // White/gray particles for dark background
          colors.push(200, 200, 200);
        }
      }

      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      // Create material
      const material = new THREE.PointsMaterial({
        size: 8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      // Create points object
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let count = 0;
      let animationId;

      // Animation function
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        const positionAttribute = geometry.attributes.position;
        const positions = positionAttribute.array;

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            const index = i * 3;

            // Animate Y position with sine waves
            positions[index + 1] =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;

            i++;
          }
        }

        positionAttribute.needsUpdate = true;

        renderer.render(scene, camera);
        count += 0.1;
      };

      // Handle resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const { width, height } = updateSize();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Start animation
      animate();

      // Store references
      sceneRef.current = {
        scene,
        camera,
        renderer,
        particles: [points],
        animationId,
        count,
      };

      // Cleanup function
      const cleanup = () => {
        window.removeEventListener('resize', handleResize);

        if (sceneRef.current) {
          cancelAnimationFrame(sceneRef.current.animationId);

          // Clean up Three.js objects
          sceneRef.current.scene.traverse((object) => {
            if (object instanceof THREE.Points) {
              object.geometry.dispose();
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          });

          sceneRef.current.renderer.dispose();

          if (containerRef.current && sceneRef.current.renderer.domElement) {
            try {
              containerRef.current.removeChild(
                sceneRef.current.renderer.domElement,
              );
            } catch (e) {
              // Element might already be removed
            }
          }
        }
      };

      return cleanup;
    }, 0);

    return () => {
      clearTimeout(initTimeout);
      if (sceneRef.current && sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    />
  );
}

