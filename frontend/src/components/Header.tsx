import React, { useState, useEffect } from 'react';
import '../styles/Header.scss';

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check local storage or system preference
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Set theme attribute on root element
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll handler to go to sections
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="app-header">
        <a href="#" className="header-logo" onClick={(e) => handleScrollTo(e, 'hero')}>
          <span>WHY SUJIT</span>
        </a>

        <nav className="header-nav">
          <a href="#work" className="nav-link" onClick={(e) => handleScrollTo(e, 'work')}>
            Work
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleScrollTo(e, 'about')}>
            About
          </a>
          <a href="#resume" className="nav-link" onClick={(e) => handleScrollTo(e, 'timeline')}>
            Resume
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleScrollTo(e, 'contact')}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <a 
            href="https://www.linkedin.com/in/sujit-gore-16548b411/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link"
          >
            LINKEDIN
          </a>

          {/* Theme Toggle Button */}
          <button 
            type="button" 
            className={`theme-toggle-btn ${isDark ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="toggle-thumb">
              {isDark ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
                </svg>
              )}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#work" className="mobile-nav-link" onClick={(e) => handleScrollTo(e, 'work')}>
          Work
        </a>
        <a href="#about" className="mobile-nav-link" onClick={(e) => handleScrollTo(e, 'about')}>
          About
        </a>
        <a href="#resume" className="mobile-nav-link" onClick={(e) => handleScrollTo(e, 'timeline')}>
          Resume
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={(e) => handleScrollTo(e, 'contact')}>
          Contact
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-nav-link"
          style={{ fontSize: '1.2rem', marginTop: '2rem', borderBottom: '1px solid currentColor' }}
          onClick={closeMobileMenu}
        >
          LinkedIn
        </a>
      </div>
    </>
  );
};

export default Header;
