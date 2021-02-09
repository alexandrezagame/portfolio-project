import React from 'react';
import { useEffect, useState } from 'react';
import '../stylesheets/Header.css';
import Typed from 'react-typed';

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div id="home" className="header-wraper">
      <img
        src="https://images.unsplash.com/photo-1546931588-d7ae6f398f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
        alt="test"
        className="parallax"
        style={{
          filter: `blur(4px)`,
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      <div className="main-info">
        <h1>Alexandre Zagame</h1>
        <Typed
          className="typed-text"
          strings={['Web Design', 'Web Development', 'Project Management']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        {/* <a href="#" className="btn-main-offer">Contact Me</a> */}
      </div>
    </div>
  );
};

export default Header;
