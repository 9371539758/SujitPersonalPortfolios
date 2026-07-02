import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedWork.scss';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCard {
  id: string;
  num: string;
  year: string;
  category: string;
  title: string;
  desc: string;
  themeClass: string;
  liveLink: string;
}

const projectsData: ProjectCard[] = [
  {
    id: 'talent-linker',
    num: '01',
    year: '2022 - 2024',
    category: 'Product Design',
    title: 'Talent Linker: Streamlined Recruitment Pipeline',
    desc: 'An automated candidate screening and scheduling interface accelerating hiring pipelines. Seamlessly syncs recruiter availability and evaluates resumes with visual grading cards.',
    themeClass: 'theme-1',
    liveLink: '#'
  },
  {
    id: 'ai-builder',
    num: '02',
    year: '2023',
    category: 'AI & Interactive',
    title: 'ATS-Optimized AI Resume Reviewer',
    desc: 'An interactive grading platform scoring formatting, grammar, and keywords. Provides real-time contextual improvements and lists weak verbs or formatting concerns dynamically.',
    themeClass: 'theme-2',
    liveLink: '#'
  },
  {
    id: 'deet-jobs',
    num: '03',
    year: '2023',
    category: 'Web Accessibility',
    title: 'Telangana DEET Government Portal',
    desc: 'Re-architecting region-scale employment platforms for low-bandwidth cellular devices. Fully WCAG 2.1 accessible, translating jobs for 1M+ monthly active rural applicants.',
    themeClass: 'theme-3',
    liveLink: '#'
  },
  // {
  //   id: 'workruit-web',
  //   num: '04',
  //   year: '2022',
  //   category: 'Interaction Design',
  //   title: 'Workruit High-Performance Landing Hub',
  //   desc: 'Optimizing legacy web performance through lightweight vector illustrations, smooth ScrollTriggers, and reactive animations, decreasing bounce rates by 28%.',
  //   themeClass: 'theme-4',
  //   liveLink: '#'
  // },

];

export const FeaturedWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const ctx = gsap.context(() => {
      // Reveal Title on entry
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate Ticker scrolling
      gsap.to('.ticker-tape-track', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ticker-tape-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Horizontal pinning scroll animation (Desktop & Tablet)
      // Only pin if viewport width is larger than mobile (768px)
      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        // Calculate horizontal scroll displacement
        const trackWidth = track.scrollWidth;
        const scrollDist = trackWidth - window.innerWidth + 80; // 80px extra padding padding

        gsap.to(track, {
          x: -scrollDist,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top 10%',
            end: () => `+=${scrollDist}`,
            invalidateOnRefresh: true,
            // Refresh on resize
          }
        });
      });

      // On mobile viewports (<= 768px), we allow natural vertical scrolling or slide reveal
      mm.add('(max-width: 768px)', () => {
        const cards = track.querySelectorAll('.horizontal-card');
        gsap.from(cards, {
          scrollTrigger: {
            trigger: track,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out'
        });
      });
      // On mobile viewports (<= 768px)
// mm.add('(max-width: 768px)', () => {
//   // Optional: Kill any horizontal animation if it exists
//   ScrollTrigger.getAll().forEach(st => {
//     if (st.vars.trigger === containerRef.current) st.kill();
//   });

//   const cards = track.querySelectorAll('.horizontal-card');
  
//   gsap.from(cards, {
//     scrollTrigger: {
//       trigger: track,
//       start: 'top 85%',
//       toggleActions: 'play none none none'
//     },
//     y: 60,
//     opacity: 0,
//     stagger: 0.2,
//     duration: 0.8,
//     ease: 'power3.out'
//   });
// });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="work-section">
      <div className="pin-container">
        <h2 ref={sectionTitleRef} className="work-section-title">
          Featured Work
        </h2>

        {/* Looping angled read-time ticker band */}
        <div className="ticker-tape-container">
          <div className="ticker-tape-track">
            <div className="ticker-tape-list">
              {Array.from({ length: 15 }).map((_, idx) => (
                <span key={idx} className="ticker-item">
                  Read Project
                </span>
              ))}
            </div>
            <div className="ticker-tape-list">
              {Array.from({ length: 15 }).map((_, idx) => (
                <span key={idx} className="ticker-item">
                  Read Project
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal scroll viewport container */}
        <div className="horizontal-scroll-wrapper">
          <div ref={trackRef} className="horizontal-scroll-track">
            {projectsData.map((project) => (
              <div key={project.id} className={`horizontal-card ${project.themeClass}`}>
                {/* Visual side - user can replace style background-image later */}
                <div 
                  className="card-visual"
                  style={{
                    // Example: backgroundImage: `url('/src/assets/projects/${project.id}-cover.jpg')`
                  }}
                >
                  <span className="card-num">{project.num}</span>
                </div>

                {/* Details side */}
                <div className="card-details">
                  <div>
                    <span className="meta-tags">{project.year} • {project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.desc}</p>
                  </div>

                  <div className="card-action-bar">
                    <button type="button" className="btn-action btn-primary">
                      Case Study
                    </button>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action btn-secondary"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
