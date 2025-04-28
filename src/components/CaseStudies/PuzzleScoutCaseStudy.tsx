import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './HottseatCaseStudy.css';
import screen1 from './Assets/screen11.png';
import screen2 from './Assets/screen12.png';
import screen3 from './Assets/screen13.png';
import screen4 from './Assets/screen14.png';
import screen5 from './Assets/screen15.png';
import screen6 from './Assets/screen16.png';
import screen7 from './Assets/screen17.png'; 
import screen8 from './Assets/screen18.png';
import screen9 from './Assets/screen19.png';
import screen10 from './Assets/screen20.png';


const images = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10];
const PuzzleScoutCaseStudy = () => {
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
      <h1 className="case-title">Puzzle Scout</h1>
      <div className="case-subtitle">UI/UX Design</div>
      <div className="case-cards">
        <div className="case-card"><div className="case-card-label">CLIENT</div><div>Leti Arts</div></div>
        <div className="case-card"><div className="case-card-label">TIMELINE</div><div>1.5 months</div></div>
        <div className="case-card"><div className="case-card-label">ROLE</div><div>UI/UX Designer</div></div>
        <div className="case-card"><div className="case-card-label">FIGMA FILES</div><div><a href="https://www.figma.com/design/xrA0xw5DOTW5OBxZsiJiEp/puzzle-scout?node-id=621-1016&p=f" target="_blank" rel="noopener noreferrer">Visit Site</a></div></div>
      </div>
      <section className="case-section">
        <h2>Overview</h2>
        <p>Puzzle Scout is a mobile game designed to provide users with a fun and challenging puzzle-solving experience. The game features a clean and modern design, with a focus on seamless user experience and progressive difficulty.</p>
      </section>
      <section className="case-section">
        <h2>Contribution</h2>
        <p>To begin with the designing of the user interface for the puzzle scout game, I was tasked with understanding how the target audience of the game (children) relate with mobile games and why they enjoy certain games over others. From my user research I found out some reasons, which are Bright Colors and Fun Animations, Simple and Addictive Gameplay, Reward and Progression Systems, Social and Multiplayer Features, Popularity and Trends (FOMO - Fear Of Missimg Out), Creativity and customization, Mini-games and Quick Sessions, Humor and Surprised Elements, Low Difficulty Curve and Free-to-Play Model. I then did a competitor analysis with some popular games like Candy crush and Angry Birds. After all this then I integrated all into intuitive user interface for kids.</p>
      </section>
      <section className="case-section">
        <h2>The Challenge</h2>
        <p>The main challenge was to design puzzles that are both engaging and accessible, while ensuring the interface remains intuitive for all age groups even though the target audiences are kids, we wanted every age group to love and enjoy the game just through the user interface.</p>
      </section>
      <div className="case-images-grid">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="image-frame" key={i}>
            {images[i] ? (
              <img
                src={images[i]}
                alt={`Mobile screen ${i + 1}`}
                style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '0.7rem' }}
              />
            ) : (
              <span>Image {i + 1}</span>
            )}
          </div>
        ))}
      </div>
      <section className="case-section">
        <h2>The Solution</h2>
        <p>We created a modular puzzle system, clear visual feedback, and a hint system to help users progress without frustration. The UI was designed for clarity and ease of use.</p>
      </section>
      <section className="case-section">
        <h2>Key Features</h2>
        <ul>
          <li>Modular puzzle system</li>
          <li>Progressive difficulty</li>
          <li>Hint and help system</li>
          <li>Modern, clean UI</li>
        </ul>
      </section>
      <section className="case-section">
        <h2>Results</h2>
        <div className="case-results">
          <div className="case-result"><div className="case-result-value">90%</div><div>User Enjoyment</div></div>
          <div className="case-result"><div className="case-result-value">+1,000</div><div>Puzzles Solved</div></div>
          <div className="case-result"><div className="case-result-value">4.8/5</div><div>App Store Rating</div></div>
        </div>
      </section>
    </section>
  );
};

export default PuzzleScoutCaseStudy; 