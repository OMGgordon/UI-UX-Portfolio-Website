import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["UI/UX Designer", "Problem Solver", "Visual Storyteller"];

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 120;
    const deleteSpeed = 50;
    const pauseDelay = 1500;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }
      
      if (!isDeleting && typedText === currentPhrase) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      }
    };
    
    const timer = setTimeout(
      type, 
      isDeleting ? deleteSpeed : typeSpeed
    );
    
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <section className="hero">
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Gordon Opoku</h1>
          <div className="hero-title-container">
            <h2 className="hero-title">
              <span className="hero-title-typed">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          <p className="hero-description">
            Creating intuitive and beautiful digital experiences that solve real problems.
            I combine design thinking with user empathy to craft interfaces that delight.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download CV <Download size={16} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image"></div>
          <div className="hero-shape-1"></div>
          <div className="hero-shape-2"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default Hero;