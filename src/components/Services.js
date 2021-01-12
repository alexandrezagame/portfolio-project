import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faTasks, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFigma} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultrices sed ex a efficitur. Nam non tristique tellus.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultrices sed ex a efficitur. Nam non tristique tellus.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faTasks} size="2x" />
              </div>
              <h3>Project Management</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultrices sed ex a efficitur. Nam non tristique tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
