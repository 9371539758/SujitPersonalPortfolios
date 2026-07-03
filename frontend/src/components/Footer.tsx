import React from 'react';
import '../styles/Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="app-footer">
      <div className="container footer-content">
        {/* Footer CTA */}
        <div className="footer-cta">
          <h2>Let's build something exceptional together.</h2>
          <a href="mailto:sujitgore67@example.com" className="email-btn">
            sujitgore67@gmail.com
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Footer Bottom Grid */}
        <div className="footer-bottom-grid">
          {/* Branding Column */}
          <div className="footer-branding">
            <span className="brand-name">WHY SUJIT</span>
            <span className="brand-desc">
              Sleek, human-centered product design and digital experiences built since 2020.
            </span>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <span className="col-title">Navigation</span>
            <a href="#work" className="footer-link">Work</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#timeline" className="footer-link">Timeline / Resume</a>
          </div>

          {/* Social Links Column */}
          <div className="footer-links-col">
            <span className="col-title">Connect</span>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/sujit-gore-16548b411/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com/9371539758" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} WHY SUJIT. All Rights Reserved. Built with Passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
