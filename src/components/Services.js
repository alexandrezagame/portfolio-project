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
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front box">
                  <h3>📦 Product leadership</h3>
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faFigma} size="2x" />
                  </div>
                  <p>
                  End-to-end product ownership <br />
                  Vision & roadmap definition <br />
                  Rapid prototyping & user testing <br />
                  AI, legaltech, and fintech experience <br />
                  Early-stage team builder & executor <br />
                  Agile, lean, and outcome-driven workflows
                  </p>
                </div>
                <div className="flip-card-back box">
                  <h3>📦 Product leadership</h3>
                  <p><b>How I can help you:</b></p>
                  <ul className="help-list">
                    <li>Define & execute a clear product strategy</li>
                    <li>Prioritize what to build (and what not to)</li>
                    <li>Turn ideas into working prototypes fast</li>
                    <li>Align cross-functional teams around delivery</li>
                    <li>Launch products that solve real user needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front box">
                  <h3>💻 Technical execution</h3>
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                  </div>
                  <p>
                  Full-stack capable: React, Node.js, Ruby on Rails <br />
                  Databases: PostgreSQL, MongoDB <br />
                  API: REST, GraphQL & AI APIs <br />
                  DevOps: Git, CI/CD, servers <br />
                  AI: OpenAI, automation, LLM prompts <br />
                  Integrations: Stripe, PostHog, Supabase
                  </p>
                </div>
                <div className="flip-card-back box">
                  <h3>💻 Technical execution</h3>
                  <p><b>How I can help you:</b></p>
                  <ul className="help-list">
                    <li>Build full-stack features that scale</li>
                    <li>Integrate APIs like Stripe, Supabase, OpenAI</li>
                    <li>Automate workflows to save time & cost</li>
                    <li>Set up analytics for better decision-making</li>
                    <li>Translate business goals into clean, testable code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-12">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front box">
                  <h3>🧠 Business & strategy</h3>
                  <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faTasks} size="2x" />
                  </div>
                  <p>
                  Market expansion (US, France, DACH, Nordics) <br />
                  Sales enablement & partnerships <br />
                  Fundraising support & board material prep <br />
                  GTM strategy & positioning <br />
                  International experience across 2 continents <br />
                  Fluent in English, French, Spanish, Portuguese
                  </p>
                </div>
                <div className="flip-card-back box">
                  <h3>🧠 Business & strategy</h3>
                  <p><b>How I can help you:</b></p>
                  <ul className="help-list">
                    <li>Craft your go-to-market plan</li>
                    <li>Support early sales & partnerships</li>
                    <li>Prep fundraising materials that resonate</li>
                    <li>Expand into new markets with clarity</li>
                    <li>Act as a sparring partner or fractional PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
