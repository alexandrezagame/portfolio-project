import React, { useState, useEffect } from 'react';
import '../stylesheets/Timeline.css';
import VerticalNav from './VerticalNav';
import { useParallax } from '../hooks/useParallax';

const experiences = [
  {
    id: 'exp-00',
    title: 'Founder & Technical Product Lead',
    company: 'NowWhat Technologies AB',
    period: '2025 – Present',
    summary: 'Founder of NowWhat, a go-to-market platform helping early-stage founders turn their MVPs into real businesses. The platform simplifies growth strategy, pricing, and analytics — using AI to guide founders from zero users to revenue.',
    highlights: [
      'Identified a critical gap for builders lacking go-to-market structure and data-driven direction',
      'Designed NowWhat as an AI-first platform offering personalized guidance, execution tools, and insights',
      'Built and validated early traction through pilot founders and an engaged waitlist community',
      'Participated in the Antler Stockholm cohort (2025) to refine product and investment readiness',
      'Built Signalshift, winner of the Antler × Google AI Hackathon, as part of the NowWhat Labs portfolio'
    ],
    tags: ['AI Product Leadership', 'Founder', 'SaaS', 'Martech'],
    logo: ['/Antler.svg', '/nowwhat.png']
  },
  {
    id: 'exp-0',
    title: 'Chief Product Officer',
    company: 'Valkiv AB (Insurtech company)',
    period: '2025 – Present',
    summary: 'Leading Valkiv, an AI-driven insurance technology company redefining how people understand and protect what they own. The platform combines instant asset valuation with transparent coverage to make insurance intuitive, fair, and data-backed.',
    highlights: [
      'Spearheading Valkiv\'s product vision and go-to-market launch strategy across B2C and B2B lines',
      'Redesigned the full product experience and website to align with Valkiv\'s new positioning',
      'Driving product execution from valuation accuracy to user trust and conversion performance',
      'Overseeing the rollout of Valkiv\'s AI-powered valuation engine and multi-channel product launch'
    ],
    tags: ['Product Leadership', 'Insurtech', 'AI'],
    logo: '/valkiv.png'
  },
  {
    id: 'exp-1',
    title: 'Head of Product',
    company: 'Legitify Limited (Legaltech startup)',
    period: '2025',
    summary: 'Led product for a remote notarization platform powering cross-border legal workflows.',
    highlights: [
      'Defined and executed product strategy across AI, notarization, and compliance',
      'Launched new revenue streams, and AI onboarding',
      'Reduced cancellation-related revenue loss by implementing support automation',
      'Boosted verified user growth and improved platform reliability',
      'Shipped analytics stack and internal tools to scale operations'
    ],
    tags: ['Product Leadership', 'Legaltech', 'AI'],
    logo: '/legitify.webp'
  },
  {
    id: 'exp-2',
    title: 'FE Engineer → PM',
    company: 'Tink (Acquired by Visa)',
    period: '2021-2025',
    summary: 'Started as a front-end engineer before transitioning into product management at Europe\'s leading open banking platform.',
    highlights: [
      'Built core components for financial data and payments APIs',
      'Improved developer experience across SDKs and internal tooling',
      'Promoted to PM, leading roadmap execution for key B2B features',
      'Collaborated cross-functionally with tech, design, data, sales, and legal',
      'Delivered scalable fintech solutions used across multiple markets'
    ],
    tags: ['Product Management', 'Engineering', 'Fintech'],
    logo: '/tink.png'
  },
  {
    id: 'exp-3',
    title: 'Web Development',
    company: 'Salt & Le Wagon',
    period: '2020',
    summary: 'Intensive coding bootcamps learning full-stack web development, from JavaScript and React to Ruby on Rails.',
    highlights: [
      'Selected as one of 1500 applicants for Salt\'s Full Stack Web Development Bootcamp',
      'Learned JavaScript, HTML5, CSS3, React & Redux, Node, Express, Git, REST, Docker, MongoDB, PostgreSQL',
      '9-week intensive bootcamp at Le Wagon learning Ruby on Rails',
      'Designed, implemented and shipped to production a clone of AirBnB and a Rails prototype'
    ],
    tags: ['Web Development', 'Full Stack', 'Bootcamp'],
    logo: ['/salt.png', '/lewagon.png'] // Multiple logos for bootcamps
  },
  {
    id: 'exp-4',
    title: 'Business Development',
    company: 'Teamtailor',
    period: '2019',
    summary: 'As a Business Developer for the French speaking markets, prospected relentlessly to build pipeline and strong client relationships.',
    highlights: [
      'Managed and closed high-level business in a fast-moving sales environment',
      'Built strong relationships with clients across French-speaking markets',
      'Teamtailor was 13th on Deloitte\'s Technology fast50 Sweden (2019)'
    ],
    tags: ['Business Development', 'Sales', 'SaaS'],
    logo: '/teamtailor.png'
  },
  {
    id: 'exp-5',
    title: 'Account Management',
    company: 'Potentialpark',
    period: '2017-2018',
    summary: 'As a Key Account Manager, built an expansive network and maintained relationships with Fortune 500 companies across the US, UK, and Switzerland.',
    highlights: [
      'Developed and maintained relationships with Fortune 500 companies',
      'Hunted for new business within territories to increase sales pipeline',
      'Co-organized and spoke at the 2018 & 2019 US conferences with high-profile Fortune 500 employer brand attendees'
    ],
    tags: ['Account Management', 'Enterprise Sales', 'Market Research'],
    logo: '/potentialpark.webp'
  },
  {
    id: 'exp-6',
    title: 'Project Management',
    company: 'EGG Events',
    period: '2014-2016',
    summary: 'Directed events from concept through execution with up to €2M budgets for pharmaceutical and FMCG clients.',
    highlights: [
      'Managed on-site teams during events',
      'Handled sales process from initial client pitch through all phases of negotiation to final closing',
      'Delivered contract execution for high-value events'
    ],
    tags: ['Project Management', 'Events', 'Client Relations'],
    logo: '/eggevents.png'
  }
];

const ExperienceImage = ({ logo, id }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after 3 seconds (animation plays first)
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!logo) {
    return null;
  }

  // Logos that should show original colors on hover
  const logosWithHover = [
    '/Antler.svg',
    '/nowwhat.png',
    '/valkiv.png',
    '/teamtailor.png',
    '/eggevents.png',
    '/legitify.webp'
  ];

  const shouldHaveHover = (logoPath) => {
    if (Array.isArray(logoPath)) {
      return logoPath.some(path => logosWithHover.includes(path));
    }
    return logosWithHover.includes(logoPath);
  };

  // Check if logo is an array (multiple logos)
  const isMultipleLogos = Array.isArray(logo);

  return (
    <div className="experience-image-container">
      {!showLogo ? (
        <iframe
          src="https://lottie.host/embed/7ff05ae3-e17d-4aef-a3d2-b3659d4cc00e/Wr66WupRvV.lottie"
          className="experience-animation"
          title="Company Animation"
          allowtransparency="true"
          allow="autoplay"
          style={{
            border: 'none',
            background: 'transparent',
            width: '100%',
            height: '100%',
          }}
        />
      ) : isMultipleLogos ? (
        <div className="experience-logos-stacked">
          {logo.map((logoPath, index) => {
            const hasHover = logosWithHover.includes(logoPath);
            return (
              <img
                key={index}
                src={logoPath}
                alt="Company Logo"
                className={`experience-logo experience-logo-white experience-logo-stacked ${hasHover ? 'experience-logo-hover' : ''}`}
              />
            );
          })}
        </div>
      ) : (
        <img
          src={logo}
          alt="Company Logo"
          className={`experience-logo experience-logo-white ${shouldHaveHover(logo) ? 'experience-logo-hover' : ''} ${logo === '/eggevents.png' ? 'experience-logo-small' : ''} ${logo === '/teamtailor.png' ? 'experience-logo-medium' : ''}`}
        />
      )}
    </div>
  );
};

// Experience card component with parallax
const ExperienceCard = ({ exp, index }) => {
  // Staggered parallax for cards - alternating directions, increased speeds
  const cardParallax = useParallax(0.35 + (index % 3) * 0.08, index % 2 === 0 ? 'up' : 'down');
  
  return (
    <div className="experience-card" ref={cardParallax.ref} style={{ transform: cardParallax.transform }}>
      <div className="experience-card-content">
        <div className="experience-card-main">
          <div className="experience-card-tags">
            {exp.tags.map((tag) => (
              <span key={tag} className="experience-tag">{tag}</span>
            ))}
          </div>
          <h3 className="experience-card-title">
            {exp.title}
          </h3>
          <p className="experience-card-summary">
            {exp.summary}
          </p>
          <ul className="experience-card-highlights">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
          <div className="experience-card-meta">
            <span className="experience-company">{exp.company}</span>
            <span className="experience-separator">•</span>
            <span className="experience-period">{exp.period}</span>
          </div>
        </div>
        <div className="experience-card-image">
          <div className="experience-image-wrapper">
            <ExperienceImage logo={exp.logo} id={exp.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  // Parallax for header - increased speed for more noticeable effect
  const headerParallax = useParallax(0.4, 'up');

  return (
    <div id="timeline" className="experience">
      <VerticalNav />
      <div className="experience-container">
        <div className="experience-header" ref={headerParallax.ref} style={{ transform: headerParallax.transform }}>
          <h2 className="experience-heading">Experience</h2>
          <p className="experience-description">
            A journey from business development to product leadership, building skills across sales, engineering, and product management.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
