import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.scss';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the Bio text details on scroll
      gsap.from('.bio-text', {
        scrollTrigger: {
          trigger: '.bio-text',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate skills pills sequentially
      const pills = tagContainerRef.current?.querySelectorAll('.skill-pill');
      if (pills) {
        gsap.from(pills, {
          scrollTrigger: {
            trigger: tagContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          scale: 0.8,
          opacity: 0,
          y: 30,
          stagger: {
            each: 0.05,
            from: 'start',
          },
          duration: 0.8,
          ease: 'back.out(1.5)',
        });
      }

      // Parallax effect on the spinning scroll badge
      gsap.to('.about-section .spinning-badge-container', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -100,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section container">
      {/* Background/Floating Scroll Badge for About section */}
      <div 
        className="spinning-badge-container"
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          left: 'auto',
          width: '80px',
          height: '80px',
        }}
      >
        <svg className="spinning-svg" viewBox="0 0 100 100">
          <path
            id="aboutCirclePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
          <text>
            <textPath href="#aboutCirclePath">
              DESIGN * INTERACTION * BRAND *
            </textPath>
          </text>
        </svg>
        <div className="badge-center-dot" style={{ backgroundColor: 'var(--accent-purple)' }}></div>
      </div>

      <div className="about-bio-container">
        <p className="bio-text">
          Hi, I am 
          {/* USER IMAGE PLACEHOLDER FOR AVATAR */}
          {/* Note: The user can add their image as a background in src/styles/About.scss under `.inline-avatar` or replace the inline style below */}
          <span 
            className="inline-avatar"
            style={{
              // Once you have the image in assets folder:
              // backgroundImage: `url('/src/assets/avatar.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          Ram 
          <span className="inline-icon-wrapper" style={{ border: '2px solid var(--text-color)' }}>
            {/* Peace Sign emoji or SVG */}
            <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>✌️</span>
          </span>
          , practicing design since 
          <span className="inline-years">2020</span> 
          focused on designing 
          <span className="inline-icon-wrapper">
            {/* Cursor icon */}
            <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
              <path d="m13 13 6 6"/>
            </svg>
          </span>
          and building digital product 
          <span className="inline-icon-wrapper">
            {/* Globe icon */}
            <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
          </span>
          , brands 
          <span className="inline-icon-wrapper">
            {/* At-sign icon */}
            <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4"/>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
            </svg>
          </span>
          and experiences 
          <span className="inline-icon-wrapper">
            {/* Sparkles icon */}
            <svg className="inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            </svg>
          </span>
          .
        </p>
      </div>

      <div>
        <h3 className="skills-header-title">with my skills in:</h3>
        
        <div ref={tagContainerRef} className="skills-tags-cloud">
          {/* Slanted or rotated custom styled tag pills */}
          <span className="skill-pill" style={{ transform: 'rotate(-4deg)' }}>Empathy</span>
          <span className="skill-pill filled" style={{ transform: 'rotate(2deg)' }}>User Research</span>
          <span className="skill-pill" style={{ transform: 'rotate(-1.5deg)' }}>Wireframing</span>
          <span className="skill-pill" style={{ transform: 'rotate(3deg)' }}>Prototyping</span>
          <span className="skill-pill" style={{ transform: 'rotate(-2deg)' }}>User Flow</span>
          <span className="skill-pill" style={{ transform: 'rotate(5deg)' }}>Collaboration</span>
          <span className="skill-pill ampersand">&</span>
          <span className="skill-pill" style={{ transform: 'rotate(-3deg)', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'serif' }}>Visual & UI</span>
          <span className="skill-pill" style={{ transform: 'rotate(1deg)' }}>Information Design</span>
          <span className="skill-pill filled" style={{ transform: 'rotate(-2.5deg)' }}>Critical Thinking</span>
          <span className="skill-pill" style={{ transform: 'rotate(3.5deg)' }}>Communication</span>
        </div>
      </div>
    </section>
  );
};

export default About;
