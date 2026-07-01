import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Hero.scss';

// Import icons/images if needed (user can place their files in src/assets/ and import them here)
// For example:
// import heroDetailImg from '../assets/hero-detail.png';
// import designerInlineImg from '../assets/designer-inline.png';
// import deetLogo from '../assets/deet-logo.svg';

export const Hero: React.FC = () => {
  const [toggleActive, setToggleActive] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const creativeRef = useRef<HTMLHeadingElement>(null);
  const designerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP load animation
    const ctx = gsap.context(() => {
      gsap.from('.line-creative', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.from('.line-product', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4,
      });

      gsap.from('.line-designer', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.6,
      });

      gsap.from('.hero-card-widget', {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from('.spinning-badge-container', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1.0,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleToggleClick = () => {
    setToggleActive((prev) => !prev);
  };

  return (
    <section ref={heroRef} id="hero" className="hero-section container">
      {/* Spinning Scroll Badge */}
      <div className="spinning-badge-container">
        <svg className="spinning-svg" viewBox="0 0 100 100">
          <path
            id="circlePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
          <text>
            <textPath href="#circlePath">
              Scroll * Scroll * Scroll * Scroll *
            </textPath>
          </text>
        </svg>
        <div className="badge-center-dot"></div>
      </div>

      <div className="hero-text-container">
        {/* Line 1: Creative */}
        <h1 className="line-creative" ref={creativeRef}>
          creative
        </h1>

        {/* Line 2: PRODUCT with Toggle Switch as O */}
        <h1 className="line-product">
          PR
          <button 
            type="button" 
            className={`o-toggle-switch ${toggleActive ? 'active' : ''}`}
            onClick={handleToggleClick}
            aria-label="Toggle visual switch"
          >
            <span className="switch-knob"></span>
          </button>
          DUCT
        </h1>

        {/* Line 3: DESIGNER with Inline hands image and finder-like icon */}
        <h1 className="line-designer" ref={designerRef}>
          DESIGNER
          
          {/* USER IMAGE PLACEHOLDER FOR THE LETTER 'I' OVERLAY / FLOATING ELEMENT */}
          {/* Note: The user can add their image as a background in src/styles/Hero.scss under `.line-designer` or replace the inline style below */}
          <span 
            className="asset-placeholder"
            style={{
              display: 'inline-block',
              width: '60px',
              height: '80px',
              borderRadius: '30px',
              verticalAlign: 'middle',
              margin: '0 10px',
              backgroundColor: '#ffd6b3',
              border: '2px solid var(--text-color)',
              // Once you have the image in assets folder:
              // backgroundImage: `url('/src/assets/designer-i-inset.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Floating Mac Finder-like icon */}
          <div className="mac-finder-icon">
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              {/* Custom Finder Icon */}
              <rect x="4" y="4" width="56" height="56" rx="14" fill="#69adfc" stroke="var(--text-color)" strokeWidth="3" />
              <path d="M 32 4 C 32 4, 32 28, 12 36" fill="none" stroke="var(--text-color)" strokeWidth="3" strokeLinecap="round" />
              <path d="M 32 4 C 32 4, 32 28, 52 36" fill="none" stroke="var(--text-color)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="20" cy="22" r="5" fill="var(--text-color)" />
              <circle cx="44" cy="22" r="5" fill="var(--text-color)" />
              <path d="M 18 46 Q 32 54 46 46" fill="none" stroke="var(--text-color)" strokeWidth="3.5" strokeLinecap="round" />
              {/* Little star decoration */}
              <path d="M 52 10 L 54 15 L 59 17 L 54 19 L 52 24 L 50 19 L 45 17 L 50 15 Z" fill="#ff9f1c" />
            </svg>
            <svg height="2500" preserveAspectRatio="xMidYMid" width="2032" xmlns="http://www.w3.org/2000/svg" viewBox="-14.558 0 270.558 315.162"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262"/></svg>
          </div>
        </h1>

        {/* Subtitle details */}
        <div className="hero-sub-caption">
          <p className="hindi-title">
            भारतीय <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>PRODUCT DESIGNER</span>, डिज़ाइन के माध्यम से <br />
            से बेहतर मानव अनुभव बनाने में शामिल॥
          </p>
          <p className="partner-title">
            Partnering as a <strong>Lead UX Strategist</strong> with teams at
          </p>
        </div>
      </div>

      {/* Floating Design visual card at top-right */}
      <div className="hero-card-widget">
        {/* USER IMAGE PLACEHOLDER FOR HERO WIDGET */}
        {/* Replace the style/background-image once you add an image in your assets folder */}
        <div 
          className="widget-img"
          style={{
            backgroundColor: '#ffd6b3',
            // backgroundImage: `url('/src/assets/hero-widget-art.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="widget-caption">
          भारतीय PRODUCT DESIGNER, डिज़ाइन के माध्यम से से बेहतर मानव अनुभव
        </div>
      </div>

      {/* Brand Logos Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          <div className="marquee-list">
            <div className="brand-logo">
              <span style={{ fontSize: '0.95rem', opacity: 0.5, marginRight: '4px' }}>/DEET</span> 
              <span style={{ fontSize: '0.68rem', opacity: 0.4, textTransform: 'none', lineHeight: 1.1 }}>Digital Employment<br/>Exchange of Telangana</span>
            </div>
            <div className="brand-logo" style={{ fontWeight: 800 }}>▲ CAMB.AI</div>
            <div className="brand-logo" style={{ fontFamily: 'monospace', letterSpacing: '-1px' }}>Routed AI</div>
            <div className="brand-logo" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>☕ barista</div>
            <div className="brand-logo" style={{ letterSpacing: '2px' }}>prezen.</div>
          </div>
          {/* Duplicate list for seamless infinite loop */}
          <div className="marquee-list">
            <div className="brand-logo">
              <span style={{ fontSize: '0.95rem', opacity: 0.5, marginRight: '4px' }}>/DEET</span> 
              <span style={{ fontSize: '0.68rem', opacity: 0.4, textTransform: 'none', lineHeight: 1.1 }}>Digital Employment<br/>Exchange of Telangana</span>
            </div>
            <div className="brand-logo" style={{ fontWeight: 800 }}>▲ CAMB.AI</div>
            <div className="brand-logo" style={{ fontFamily: 'monospace', letterSpacing: '-1px' }}>Routed AI</div>
            <div className="brand-logo" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>☕ barista</div>
            <div className="brand-logo" style={{ letterSpacing: '2px' }}>prezen.</div>
          </div>
          <div className="marquee-list">
            <div className="brand-logo">
              <span style={{ fontSize: '0.95rem', opacity: 0.5, marginRight: '4px' }}>/DEET</span> 
              <span style={{ fontSize: '0.68rem', opacity: 0.4, textTransform: 'none', lineHeight: 1.1 }}>Digital Employment<br/>Exchange of Telangana</span>
            </div>
            <div className="brand-logo" style={{ fontWeight: 800 }}>▲ CAMB.AI</div>
            <div className="brand-logo" style={{ fontFamily: 'monospace', letterSpacing: '-1px' }}>Routed AI</div>
            <div className="brand-logo" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>☕ barista</div>
            <div className="brand-logo" style={{ letterSpacing: '2px' }}>prezen.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
