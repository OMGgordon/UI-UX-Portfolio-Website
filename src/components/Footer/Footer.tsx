import { ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Github as GitHub } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer py-12">
      <div className="container mx-auto px-4">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Gordon Opoku</span>
            </div>
            <p className="footer-description">
              Creating intuitive and beautiful digital experiences that solve real problems and delight users.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Home
              </a>
              <a href="#about" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> About
              </a>
              <a href="#projects" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Projects
              </a>
              <a href="#process" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Process
              </a>
              <a href="#contact" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Contact
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> UI Design
              </a>
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> UX Research
              </a>
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Prototyping
              </a>
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Design Systems
              </a>
              <a href="#" className="footer-link">
                <ChevronRight size={16} className="footer-link-icon" /> Website Design
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-links">
              <a href="mailto:gordonopoku123@gmail.com" className="footer-link">
                <Mail size={16} className="footer-link-icon" /> gordonopoku123@gmail.com
              </a>
              <a href="tel:+233548472037" className="footer-link">
                <Phone size={16} className="footer-link-icon" /> +233548472037
              </a>
              <p className="footer-link">
                <MapPin size={16} className="footer-link-icon" /> Accra, Ghana
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Gordon Opoku. All rights reserved.
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/gordon-opoku-97a63224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://x.com/omg_skippa?t=AZP2CayTtwpjvUOp2GlSeA&s=35" className="footer-social-link" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            
            <a href="https://github.com/OMGgordon" className="footer-social-link" aria-label="GitHub">
              <GitHub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;