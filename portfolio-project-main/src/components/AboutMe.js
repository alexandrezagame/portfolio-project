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
          I’m a product leader with a strong technical foundation and a deep understanding of user needs. With a background that spans engineering, product, and business development, I bring a hands-on, multidisciplinary approach to building and scaling digital products.
          <br />
          <br />
          I’ve led cross-functional teams, shipped end-to-end features, and driven product strategies in fast-moving startups and high-scale fintech environments. My experience across product, tech, and business enables me to communicate seamlessly with both commercial and engineering teams - aligning vision with execution.
          <br />
          <br />
          I combine UX intuition with modern AI tools to accelerate prototyping and ship user-centric solutions faster. Whether it’s launching platforms, integrating APIs, or automating workflows, I focus on solving real problems - fast.
          <br />
          <br />
          I have international experience across Europe and Latin America, and outside of work, I’m passionate about photography and voice acting.
          </p>
        </div>
      </div>
      {/* <div className="row cards-row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🧠 Business & strategy</h5>
            <p className="card-text">
            Market expansion (US, France, DACH, Nordics) <br />
            Sales enablement & partnerships <br />
            Fundraising support & board material prep <br />
            GTM strategy & positioning <br />
            International experience across 2 continents <br />
            Fluent in English, French, Spanish, Portuguese
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">💻 Technical execution</h5>
            <p className="card-text">
            Full-stack capable: React, Node.js, Ruby on Rails <br />
            Databases: PostgreSQL, MongoDB <br />
            API: REST, GraphQL & AI APIs <br />
            DevOps: Git, CI/CD, servers <br />
            AI: OpenAI, automation, LLM prompts <br />
            Integrations: Stripe, PostHog, Supabase
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">📦 Product leadership</h5>
            <p className="card-text">
            End-to-end product ownership <br />
            Vision & roadmap definition <br />
            Rapid prototyping & user testing <br />
            AI, legaltech, and fintech experience <br />
            Early-stage team builder & executor <br />
            Agile, lean, and outcome-driven workflows
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutMe;
