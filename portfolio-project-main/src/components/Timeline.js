import React from 'react';
import '../stylesheets/Timeline.css';

const Timeline = () => {
  return (
    <div id="timeline" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wraper">
      <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2025 – Head of Product</h3>
            <b>Legitify Limited (Legaltech startup)</b>
            <p>
Led product for a remote notarization platform powering cross-border legal workflows.
	<li>Defined and executed product strategy across AI, notarization, and compliance</li>
	<li>Launched DocuSign integration, AI onboarding, and support automation</li>
	<li>Reduced cancellation-related revenue loss by 75%</li>
	<li>Boosted verified user growth by 60% and improved platform reliability</li>
	<li>Shipped analytics stack and internal tools to scale operations</li>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2025 - FE Engineer → PM </h3>
            <b>Tink (Acquired by Visa)</b>
            <p>
            Started as a front-end engineer before transitioning into product management at Europe’s leading open banking platform.
	<li>Built core components for financial data and payments APIs</li>
	<li>Improved developer experience across SDKs and internal tooling</li>
	<li>Promoted to PM, leading roadmap execution for key B2B features</li>
	<li>Collaborated cross-functionally with tech, design, data, sales, and legal</li>
	<li>Delivered scalable fintech solutions used across multiple markets</li>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - Web Development</h3>
            <b>Salt</b>
            <p>
              In September of 2020, I was selected as one out of 1500 applicants
              to join Salt's Full Stack Web Development Bootcamp alongside 30
              other students. Salt stack includes: JavaScript, HTML5, CSS3,
              React & Redux, Node, Express, Git, REST, Docker, MongoDB,
              PostgreSQL, async programming, SPA, UX, Docker, Test Driven
              Development (TDD), REST APIs and agile work methods (SCRUM).
            </p>
            <b>Le Wagon</b>
            <p>
              9-week intensive coding bootcamp learning HTML, CSS, Bootstrap,
              JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.
              Designed, implemented and shipped to production a clone of AirBnB
              and a Rails prototype.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019 - Business Development</h3>
            <b>Teamtailor</b>
            <p>
              As a Business Developer for the French speaking markets I
              prospected relentlessly to build my pipeline and build strong
              relationships with clients. Managed and closed high-level business
              in a fast-moving sales environment.
              <br />
              <br />
              Teamtailor was 13th on Deloitte's Technology fast50 Sweden (2019).
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018 - Account Management</h3>
            <b>Potentialpark</b>
            <p>
              As a Key Account Manager I built an expansive network, developed,
              and maintained relationships with Fortune 500 companies across the
              US, UK, and Switzerland while hunting for new business within my
              territories to increase sales pipeline and drive brand awareness.
              <br />
              <br />
              Co-organising and speaking at the 2018 & 2019 US conferences with
              high-profile Fortune 500 employer brand attendees.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2016 - Project Management</h3>
            <b>EGG Events:</b>
            <p>
              I directed events from concept through execution with up to €2M
              budgets for pharmaceutical and FMCG clients. I also managed
              on-site teams during events, sales process, from initial client
              pitch through all phases of negotiation to final closing and
              contract delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
