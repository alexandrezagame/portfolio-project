import React from 'react';
import '../stylesheets/About.css';
import author from '../Alex.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-5 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="profile pic" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p className="about-text">
            I’m a French-Uruguayan citizen living in Stockholm with a passion
            for coding and business. Hands-on experience engaging in all stages
            of a project development, including requirements definition, design,
            execution and support.
            <br />
            <br />
            I'm a creative and detail oriented web application developer who
            enjoys the challenge of learning new technologies, solving design
            challenges, and building high-quality software. I have international
            work experience in Sweden, Switzerland, France, Spain and Brazil.
            Moreover I am passionate about photography and voice acting.
          </p>
        </div>
      </div>
      <div className="row cards-row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Languages, Tools & Methods</h5>
            <p className="card-text">
              Ruby on Rails <br />
              JavaScript <br />
              Git <br />
              Agile work methods
              <br />
              Mob programming <br />
              TDD
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Front End</h5>
            <p className="card-text">
              ReactJS <br />
              Redux <br />
              React Router <br />
              HTML5 <br />
              CSS3/SASS <br />
              Bootstrap/MaterialUI
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Back End & Databases</h5>
            <p className="card-text">
              Node.js <br />
              ExpressJS <br />
              HTTP/JSON <br />
              MongoDB / PostgreSQL <br />
              Firebase / Heroku <br />
              REST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
