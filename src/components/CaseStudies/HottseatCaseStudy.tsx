import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './HottseatCaseStudy.css';
import screen1 from './Assets/screen1.png';
import screen2 from './Assets/screen2.png';
import screen3 from './Assets/screen3.png';
import screen4 from './Assets/screen4.png';
import screen5 from './Assets/screen5.png';
import screen6 from './Assets/screen6.png';
import screen7 from './Assets/screen7.png';
import screen8 from './Assets/screen8.png';
import screen9 from './Assets/screen9.png';
import screen10 from './Assets/screen10.png';

const images = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10];

const HottseatCaseStudy = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/'); // Go to homepage
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM is updated
  };

  return (
    <section className="case-study-layout">
      <button className="back-to-projects-btn" onClick={goToProjects}>
        <ArrowLeft size={20} style={{ marginRight: '8px' }} />
        Back to Projects
      </button>
      <h1 className="case-title">Hottseat Game Hub</h1>
      <div className="case-subtitle">UX/UI Design</div>
      <div className="case-cards">
        <div className="case-card"><div className="case-card-label">CLIENT</div><div>Leti Arts</div></div>
        <div className="case-card"><div className="case-card-label">TIMELINE</div><div>3 months</div></div>
        <div className="case-card"><div className="case-card-label">ROLE</div><div>UI/UX Designer</div></div>
        <div className="case-card"><div className="case-card-label">FIGMA FILES</div><div><a href="https://www.figma.com/design/BNV1EiCoAwWa55jOhWWgcC/LetiArts_HotSeat?node-id=8-6494&p=f" target="_blank" rel="noopener noreferrer">Visit Site</a></div></div>
      </div>
      <section className="case-section">
        <h2>Overview</h2>
        <p>Hottseat Game Hub is a gaming platform designed to provide users with a seamless experience for discovering, playing, and sharing HTML5 games. The app supports both freemium and subscription-based models, offering a diverse range of gaming options for users of all preferences.</p>
      </section>

      <section className="case-section">
        <h2>Contribution</h2>
        <p><ul>
          <li>
          <li>User-Centered Discovery -- Conducted stakeholder workshops to define goals, translating them into user flows and feature prioritization.
          Analyzed competitor gaming platforms to identify UX gaps and opportunities.</li>


          <li>Wireframing & Prototyping -- Designed low-fidelity wireframes for core flows (onboarding, game library, profiles).

Created high-fidelity Figma prototypes with micro-interactions (e.g., animated game cards, smooth transitions).</li>



          <li>Key Screens Designed:<ol><li>Landing Page: Optimized layout for game discovery, increasing demo downloads by 15%.</li><li>Onboarding: Reduced signup steps from 5 to 3, improving completion rates by 40%.</li><li>Game Hub: Designed intuitive categorization (genres, trending) and search filters.</li><li>Profile System: Integrated avatar customization and achievement tracking.</li></ol></li>

          <li>Usability Testing -- Conducted remote user tests with gamers, iterating on pain points (e.g., simplified navigation).</li>

          </li>
            </ul>Result: Launched a visually cohesive platform with 20% higher Day-7 retention than industry benchmarks.</p>
      </section>

      <section className="case-section">
        <h2>The Challenge</h2>
        <p>The main challenge was to create an intuitive interface that could handle a large library of games, support personalization, and enable social features, all while remaining accessible to users of all ages and technical abilities.</p>
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
        <p>We developed a clean, minimalist interface with a focus on progressive disclosure of information. Users can easily browse, search, and play games, with personalized recommendations and social leaderboards. The design is mobile-first and highly responsive.</p>
      </section>
      <section className="case-section">
        <h2>Key Features</h2>
        <ul>
          <li>Personalized game recommendations</li>
          <li>Subscription and freemium models</li>
          <li>Social sharing and leaderboards</li>
          <li>Mobile-first responsive design</li>
          <li>Secure user authentication</li>
        </ul>
      </section>
      <section className="case-section">
        <h2>Results</h2>
        <div className="case-results">
          <div className="case-result"><div className="case-result-value">87%</div><div>User Satisfaction</div></div>
          <div className="case-result"><div className="case-result-value">45%</div><div>Increase in Daily Active Users</div></div>
          <div className="case-result"><div className="case-result-value">92%</div><div>Task Completion Rate</div></div>
        </div>
      </section>
    </section>
  );
};

export default HottseatCaseStudy; 