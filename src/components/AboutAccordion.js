import React, { useState } from 'react';
import '../stylesheets/Accordion.css';

const items = [
  {
    id: '1',
    title: 'WHO I AM',
    content: 'I build products that solve real problems without drama. My background blends engineering and product strategy which means I move fast, ask hard questions, and keep teams focused on what actually matters. I care about clarity, speed, and results. I like working close to the details because that\'s where the real insights sit. I push for decisions, cut what slows us down, and aim for products that feel obvious to users. Outside work I stay curious and keep learning because it keeps me sharp.',
  },
  {
    id: '2',
    title: 'WHAT INSPIRES ME?',
    content: 'Systems that make sense, teams that ship, and ideas that turn into something real.',
  },
  {
    id: '3',
    title: 'WHAT I ACTUALLY DO?',
    content: 'I diagnose what\'s broken, define the path forward, and build solutions that scale.',
  },
  {
    id: '4',
    title: 'MY TOOLKIT',
    content: 'AI, analytics, pricing, execution, React, Node, Supabase, PostHog, Vercel.',
  },
  {
    id: '5',
    title: 'HOW I THINK',
    content: 'Speed with clarity, focus on what matters, brutal honesty toward the work.',
  },
];

export function AboutAccordion() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="accordion-05">
      <div className="accordion-05-wrapper">
        {items.map((item) => {
          const isOpen = openItem === item.id;
          return (
            <div key={item.id} className="accordion-05-item">
              <button
                type="button"
                className={`accordion-05-trigger ${isOpen ? 'is-open' : ''}`}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
              >
                <div className="accordion-05-trigger-inner">
                  <p className="accordion-05-number">{item.id}</p>
                  <h4 className="accordion-05-title">{item.title}</h4>
                </div>
              </button>

              <div
                className={`accordion-05-content ${isOpen ? 'is-open' : ''}`}
                style={{
                  maxHeight: isOpen ? '1000px' : '0',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
