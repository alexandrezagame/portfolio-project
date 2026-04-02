import React, { useEffect, useRef, useState } from "react";
import "../stylesheets/Footer.css";

const LEFT_LINKS = [
  { href: "https://www.linkedin.com/in/alexandrezagame/", label: "LinkedIn" },
  { href: "https://github.com/alexandrezagame", label: "GitHub" },
];

const RIGHT_LINKS = [
  {
    href: "https://medium.com/@alexbacelo/from-sales-to-web-development-a-journey-of-learning-4ee2c826df46?source=friends_link&sk=e7aa09d4694d10caf6a3e90a79ccf4cd",
    label: "Medium",
  },
];

const Footer = ({ barCount = 23 }) => {
  const waveRefs = useRef([]);
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      let offset = 0;
      waveRefs.current.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
          element.style.transform = `translateY(${index + offset}px)`;
        }
      });

      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="footer-wave">
      <div className="footer-wave-content">
        <div>
          <ul className="footer-wave-links">
            {LEFT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-wave-copy">© 2026 Alex Zagame</p>
        </div>

        <div className="footer-wave-right">
          <ul className="footer-wave-links">
            {RIGHT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="footer-wave-top" onClick={scrollToTop}>
            Back to top
          </button>
        </div>
      </div>

      <div className="footer-wave-bars" aria-hidden="true">
        {Array.from({ length: barCount }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              waveRefs.current[index] = el;
            }}
            className="wave-segment"
            style={{
              height: `${index + 1}px`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
