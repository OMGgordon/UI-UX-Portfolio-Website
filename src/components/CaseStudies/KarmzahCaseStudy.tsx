import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './HottseatCaseStudy.css';
import karmzahImage from './Assets/Home.png';


const KarmzahCaseStudy = () => {
  const navigate = useNavigate();
  const goToProjects = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="case-study-layout">
      <button className="back-to-projects-btn" onClick={goToProjects}>
        <ArrowLeft size={20} style={{ marginRight: '8px' }} />
        Back to Projects
      </button>
      <h1 className="case-title">Karmzah Run</h1>
      <div className="case-subtitle">Desktop Game Design</div>
      <div className="case-cards">
        <div className="case-card"><div className="case-card-label">CLIENT</div><div>Karmzah Studios</div></div>
        <div className="case-card"><div className="case-card-label">TIMELINE</div><div>2 months</div></div>
        <div className="case-card"><div className="case-card-label">ROLE</div><div>Game Designer</div></div>
        <div className="case-card"><div className="case-card-label">FIGMA FILES</div><div><a href="https://www.figma.com/design/O4ujdhBa4gvImpEnZHS4h2/LetiArts_Karmzah?node-id=231-6865&t=nS1mJ4G8FJQu0MAS-1" target="_blank" rel="noopener noreferrer">Visit Site</a></div></div>
      </div>
      <section className="case-section">
        <h2>Overview</h2>
        <p>Karmzah Run is a desktop game designed to provide users with a fun adventure gaming experience. The game features engaging levels, unique characters, and a focus on accessibility for all players.</p>
      </section>
      <section className="case-section">
        <h2>Contribution</h2>
        <p><ul>
            <li>a. <b>Game Level & Chapter Design</b> -- Designed 30+ engaging levels with progressive difficulty curves, ensuring balanced gameplay.

Structured 5 thematic chapters (e.g., jungle, desert) with unique obstacles and visual storytelling.

Prototyped level mechanics (e.g., jump timing, power-up placement) in Figma and Unity for playtesting.</li>     
            <li>b. <b>UI/UX Systems & Player Flow</b> -- Created user flow diagrams to streamline onboarding, gameplay, and reward systems.<li>Designed intuitive UI elements:

<li>Heads-Up Display (HUD): Score tracker, power-up indicators, and pause menu.</li>

<li>Menus: Chapter selection, character customization, and settings.</li>

<li>Reward Pop-ups: Animated loot boxes and achievement unlocks.</li><li>Ensured touch-friendly controls (e.g., button sizing, swipe gestures) for mobile players.</li></li>
            <li>c. <b>Character & Asset Design Collaboration</b></li><li><li>Partnered with artists to design:</li><li>Playable Characters: Silhouette readability, outfit customization options.</li><li>Obstacles & Hurdles: Thematic consistency (e.g., vines in jungle levels).</li><li>Power-Ups: Visual feedback (e.g., glow effects, sound cues) for usability.</li></li>
            
            <li>Iterated on character movement animations to enhance feel (e.g., sliding, double jumps).</li>
            <li>d. <b>Playtesting & Iteration</b> -- Conducted usability tests with players to refine difficulty spikes and UI clarity.Reduced early-level drop-off rate by 35% by simplifying initial obstacles.</li></li>
          </ul></p>
      </section>
      <section className="case-section">
        <h2>The Challenge</h2>
        <p>The main challenge was to design a game that is both accessible and enjoyable for a wide range of players, including those with physical disabilities.</p>
      </section>
      <div className="case-images">
        <img src={karmzahImage} alt="Game Screenshot" />
      </div>
      <section className="case-section">
        <h2>The Solution</h2>
        <p>We implemented customizable controls, clear visual cues, and a progressive difficulty curve to ensure the game is accessible and fun for everyone.</p>
      </section>
      <section className="case-section">
        <h2>Key Features</h2>
        <ul>
          <li>Accessible game controls</li>
          <li>Engaging adventure levels</li>
          <li>Unique character abilities</li>
          <li>Progressive difficulty</li>
        </ul>
      </section>
      <section className="case-section">
        <h2>Results</h2>
        <div className="case-results">
          <div className="case-result"><div className="case-result-value">80%</div><div>User Satisfaction</div></div>
          <div className="case-result"><div className="case-result-value">+500</div><div>Active Players</div></div>
          <div className="case-result"><div className="case-result-value">95%</div><div>Accessibility Score</div></div>
        </div>
      </section>
    </section>
  );
};

export default KarmzahCaseStudy; 