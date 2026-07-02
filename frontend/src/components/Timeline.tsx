import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Timeline.scss';
gsap.registerPlugin(ScrollTrigger);
interface TimelineItem {
  year: string;
  project: string;
  liveLink: string;
  problemStatement: string;
  solutions: string[];
  optimizations: string[];
}
const timelineData: TimelineItem[] = [
 {
  year: '2026',
  project: 'BookSwap',
  liveLink: 'https://book-swap0.vercel.app/',
  problemStatement:
    'Students and readers often have unused books while others struggle to find affordable copies. Existing marketplaces focus on buying and selling rather than enabling simple local book exchanges between users.',

  solutions: [
    'Built a full-stack book exchange platform using React, Node.js, Express, and MongoDB.',
    'Implemented secure JWT authentication with protected routes and user-specific dashboards.',
    'Developed book listing management with image uploads, categories, conditions, and availability status.',
    'Created advanced search and filtering to quickly discover books by title, author, or category.',
    'Integrated responsive UI optimized for desktop and mobile devices.'
  ],

  optimizations: [
    'Designed a scalable REST API architecture supporting efficient CRUD operations and authentication.',
    'Reduced unnecessary database requests through optimized queries and structured API endpoints.',
    'Implemented reusable React components for improved maintainability and faster feature development.',
    'Built with deployment-ready architecture using Vercel (Frontend) and Render (Backend).'
  ]
},
 
 {
  year: '2026',
  project: 'Jarvis AI',
  liveLink: 'https://your-jarvis-ai.vercel.app',
  problemStatement: 'Users often switch between multiple websites and applications for everyday tasks such as searching the web, opening websites, checking the weather, and interacting with AI assistants, leading to a fragmented browsing experience.',

  solutions: [
    'Developed a browser-based AI assistant using JavaScript with voice recognition and speech synthesis capabilities.',
    'Implemented natural language command processing to perform web searches, open websites, answer general queries, and execute browser-based actions.',
    'Integrated real-time APIs to provide information such as weather, time, news, and other contextual responses.',
    'Designed an interactive conversational interface with continuous voice interaction for a hands-free user experience.'
  ],

  optimizations: [
    'Optimized command processing to deliver fast responses with minimal interaction latency.',
    'Built a modular architecture enabling seamless integration of additional AI capabilities and external APIs.',
    'Implemented responsive design ensuring consistent performance across desktop and mobile browsers.'
  ]
},
  {
    year: '2022',
    project: 'Workruit Landing Page',
    liveLink: 'https://workruit.com',
    problemStatement: 'The legacy marketing landing page was heavy, causing high bounce rates on mobile networks and rendering static layouts that failed to explain product benefits dynamically.',
    solutions: [
      'Rebuilt visual assets using vector-based inline SVGs and modular CSS layouts to optimize speed.',
      'Integrated smooth inertial scrolling alongside GSAP reveal animations that trigger as users scroll.',
      'Designed responsive navigation structures adapting key content cards cleanly to any device.'
    ],
    optimizations: [
      'Reduced initial page payload by 68%, pushing load times to under 1.2s.',
      'Lifted conversion click-throughs to App Store downloads by 28%.',
      'Achieved a near-perfect mobile responsive design rendering flawlessly on 320px to 4k resolutions.'
    ]
  },
  {
    year: '2021',
    project: 'Workruit Jobs Portal Mobile',
    liveLink: 'https://m.workruit.com',
    problemStatement: 'Recruiters and jobseekers using the mobile interface experienced slow reaction times, poor swipe gestures, and confusing navigation, rendering the app hard to use on the go.',
    solutions: [
      'Designed a gesture-friendly swipe interface matching card-based profile swiping.',
      'Programmed a lightweight mobile-first dashboard letting recruiters accept/reject candidates instantly.',
      'Created custom responsive layouts utilizing SCSS mixins for ultra-fluid viewport shifts.'
    ],
    optimizations: [
      'Expanded mobile daily active usage (DAU) across recruitment teams by 40%.',
      'Shortened the candidate-to-recruiter connection cycle to a average of 3 hours.',
      'Re-engineered rendering logic to run transitions at a stable 60 FPS on mid-range devices.'
    ]
  },

 
];
export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<TimelineItem | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate timeline rows with fromTo to ensure they clear props and stay visible
      const rows = rowsRef.current?.querySelectorAll('.table-body-row');
      if (rows) {
        gsap.fromTo(rows, 
          { opacity: 0, x: -40 },
          {
            opacity: 1, 
            x: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all', // Clears inline styles after animation so items stay visible
            scrollTrigger: {
              trigger: rowsRef.current,
              start: 'top 88%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
      // Parallax effect on header spinning badge
      gsap.to('.timeline-badge', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -60,
        ease: 'none',
      });
    }, sectionRef);
    // Bulletproof trigger updates after brief timeouts
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);
    const handleWindowLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleWindowLoad);
    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);
  // Update ScrollTrigger when modal changes to avoid scroll shifts
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [activeCaseStudy]);
  return (
    <section ref={sectionRef} id="timeline" className="timeline-section container">
      <div className="timeline-header">
        <h2 className="timeline-title">Timeline</h2>
        
        {/* Spinning badge in timeline header */}
        <div className="timeline-badge">
          <svg className="badge-svg" viewBox="0 0 100 100">
            <path
              id="timelineCirclePath"
              d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
              fill="none"
            />
            <text>
              <textPath href="#timelineCirclePath">
                WORK * HISTORY * PROJECTS * 
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="timeline-table">
        {/* Table Header Row */}
        <div className="table-header-row">
          <span>Year</span>
          <span>Projects</span>
          <span style={{ textAlign: 'right' }}>Actions</span>
        </div>
        {/* Table Body Rows */}
        <div ref={rowsRef}>
          {timelineData.map((item, index) => (
            <div key={index} className="table-body-row">
              <div className="row-year">{item.year}</div>
              <div className="row-project">{item.project}</div>
              <div className="row-action">
                <button
                  type="button"
                  className="btn-timeline btn-case-study"
                  onClick={() => setActiveCaseStudy(item)}
                >
                  Case Study
                </button>
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-timeline btn-web-live"
                >
                  Live Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Case Study Modal Popup */}
      <div 
        className={`modal-overlay ${activeCaseStudy ? 'active' : ''}`}
        onClick={() => setActiveCaseStudy(null)}
      >
        {activeCaseStudy && (
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn"
              onClick={() => setActiveCaseStudy(null)}
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-header">
              <span className="modal-year">{activeCaseStudy.year}</span>
              <h3 className="modal-title">{activeCaseStudy.project}</h3>
            </div>
            <div className="modal-body">
              {/* Problem Section */}
              <div className="modal-section">
                <h4 className="section-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" style={{ marginRight: '6px' }}>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  The Problem
                </h4>
                <p className="section-content">{activeCaseStudy.problemStatement}</p>
              </div>
              {/* Solution Section */}
              <div className="modal-section">
                <h4 className="section-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" style={{ marginRight: '6px' }}>
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                  What We Did
                </h4>
                <ul className="optimize-list">
                  {activeCaseStudy.solutions.map((sol, i) => (
                    <li key={i}>
                      <span className="bullet-icon">✦</span>
                      <span className="section-content">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Optimization Metrics Section */}
              <div className="modal-section">
                <h4 className="section-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" style={{ marginRight: '6px' }}>
                    <path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>
                  </svg>
                  Key Optimizations
                </h4>
                <ul className="optimize-list">
                  {activeCaseStudy.optimizations.map((opt, i) => (
                    <li key={i}>
                      <span className="bullet-icon" style={{ color: '#2b8a3e' }}>✓</span>
                      <span className="section-content" style={{ fontWeight: 600 }}>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Timeline;