import React from "react";
import "../stylesheets/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faTasks, faCode } from "@fortawesome/free-solid-svg-icons";

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
                Provide wireframing and designing brand visuals aligned with the
                customer’s needs, product(s), and the business goals with an
                appreciation of the user journey as it applies to marketing—from
                problem-solving through to detailed visual design solutions.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>
                Help you design, upgrade and implement internal and external
                initiatives with an analytical and problem-solving approach.
                Provide recommendations for designs, solutions, and/or
                improvements and develop compelling and usable deliveries.
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
                Provide direction regarding company initiatives, priorities and
                changes (i.e. structure and processes, new technology,
                benchmark, policies, etc.) ensuring all project activities are
                in alignment with organization strategic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
