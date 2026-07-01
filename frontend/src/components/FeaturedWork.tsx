import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/FeaturedWork.scss';

gsap.registerPlugin(ScrollTrigger);

export const FeaturedWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the main title
      gsap.from('.work-section-title', {
        scrollTrigger: {
          trigger: '.work-section-title',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate the angled ticker tape scrolling
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

      // Animate card entries
      gsap.from('.case-study-card', {
        scrollTrigger: {
          trigger: '.case-studies-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 80,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work-section">
      <div className="container">
        <h2 className="work-section-title">Featured Work</h2>
      </div>

      {/* Repeating angled read-time ticker band */}
      {/* <div className="ticker-tape-container">
        <div className="ticker-tape-track">
          <div className="ticker-tape-list">
            {Array.from({ length: 15 }).map((_, idx) => (
              <span key={idx} className="ticker-item">
                8 min Read
              </span>
            ))}
          </div>
          <div className="ticker-tape-list">
            {Array.from({ length: 15 }).map((_, idx) => (
              <span key={idx} className="ticker-item">
                8 min Read
              </span>
            ))}
          </div>
        </div>
      </div> */}

    </section>
  );
};

export default FeaturedWork;
