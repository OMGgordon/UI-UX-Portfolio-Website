import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="logo" aria-label="Gordon Opoku">
          <span className="logo-text">G</span>
        </a>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'hidden' : 'hidden md:flex'}`}>
          <ul className="flex space-x-8">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#process" className="nav-link">Process</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li>
              <a 
                href="/cv/GordonCV.pdf"
                download="Gordon_Opoku_CV.pdf"
                className="nav-link flex items-center gap-1"
              >
                <Download size={16} />
                CV
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className="mobile-menu-toggle md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav">
          <li><a href="#about" onClick={closeMobileMenu} className="mobile-nav-link">About</a></li>
          <li><a href="#projects" onClick={closeMobileMenu} className="mobile-nav-link">Projects</a></li>
          <li><a href="#process" onClick={closeMobileMenu} className="mobile-nav-link">Process</a></li>
          <li><a href="#contact" onClick={closeMobileMenu} className="mobile-nav-link">Contact</a></li>
          <li>
            <a 
              href="/cv/GordonCV.pdf"
              download="Gordon_Opoku_CV.pdf"
              onClick={closeMobileMenu}
              className="mobile-nav-link flex items-center gap-1"
            >
              <Download size={16} />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;