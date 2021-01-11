import React from "react";
import author from "../Alex.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="profile pic" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            I’m an French-Uruguayan living in Stockholm with a passion for
            coding, business & sustainability. Hands-on experience engaging in
            all stages of a project development, including requirements
            definition, design, execution and support. Strengths include project
            management activities, business process improvement and application
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
