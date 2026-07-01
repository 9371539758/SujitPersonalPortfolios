import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Timeline.scss';

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  project: string;
  actionText: string;
  actionType: 'case-study' | 'web-live' | 'gallery';
  link: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2022 - 2024',
    project: 'Talent Linker',
    actionText: 'Case Study',
    actionType: 'case-study',
    link: '#',
  },
  {
    year: '2023',
    project: 'DEET Website Revamp',
    actionText: 'Case Study',
    actionType: 'case-study',
    link: '#',
  },
  {
    year: '2023',
    project: 'AI Resume Builder',
    actionText: 'Case Study',
    actionType: 'case-study',
    link: '#',
  },
  {
    year: '2022',
    project: 'Workruit Landing Page',
    actionText: 'Website Live',
    actionType: 'web-live',
    link: '#',
  },
  {
    year: '2021',
    project: 'Workruit Jobs Portal Mobile',
    actionText: 'View Gallery',
    actionType: 'gallery',
    link: '#',
  },
  {
    year: '2021',
    project: 'Campus Portal (Online College Placement)',
    actionText: 'View Gallery',
    actionType: 'gallery',
    link: '#',
  },
  {
    year: '2020',
    project: 'SBI Augmented Payment (Augmented Reality)',
    actionText: 'View Gallery',
    actionType: 'gallery',
    link: '#',
  },
];

export const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animate timeline rows
      const rows = rowsRef.current?.querySelectorAll('.table-body-row');
      if (rows) {
        gsap.from(rows, {
          scrollTrigger: {
            trigger: rowsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          x: -50,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
        });
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

    return () => ctx.revert();
  }, []);

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
          {timelineData.map((item, index) => {
            let btnClass = 'btn-case-study';
            if (item.actionType === 'web-live') btnClass = 'btn-web-live';
            if (item.actionType === 'gallery') btnClass = 'btn-gallery';

            return (
              <div key={index} className="table-body-row">
                <div className="row-year">{item.year}</div>
                <div className="row-project">{item.project}</div>
                <div className="row-action">
                  <a
                    href={item.link}
                    className={`btn-timeline ${btnClass}`}
                  >
                    {item.actionText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
