import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './HottseatCaseStudy.css';
import kabodImage from './Assets/Kabod.jpg';


const KabodCaseStudy = () => {
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
      <h1 className="case-title">Kabod Physiotherapy</h1>
      <div className="case-subtitle">Web Design</div>
      <div className="case-cards">
        <div className="case-card"><div className="case-card-label">CLIENT</div><div>Kabod Physiotherapy</div></div>
        <div className="case-card"><div className="case-card-label">TIMELINE</div><div>2 months</div></div>
        <div className="case-card"><div className="case-card-label">ROLE</div><div>Web Designer</div></div>
        <div className="case-card"><div className="case-card-label">WEBSITE</div><div><a href="https://kabod-physiotherapy.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a></div></div>
      </div>
      <section className="case-section">
        <h2>Overview</h2>
        <p>Kabod Physiotherapy is a website designed to provide users with comprehensive physiotherapy services. The site features a clean and modern design, with a focus on seamless appointment booking and easy access to information.</p>
      </section>
      <section className="case-section">
        <h2>Contribution</h2>
        <p><ul><li>a. <b>UI/UX Design & Development</b> -- designed a clean, modern, and user-friendly interface to enhance patient engagement. Ensured mobile responsiveness for seamless access across devices.

   <li>b. <b>Appointment Booking System</b> -- Developed an intuitive online booking system for easy scheduling of physiotherapy sessions. Integrated real-time availability checks to minimize user frustration.</li>

<li>c. <b>Content Organization & Accessibility</b> -- Structured service information in a clear, easy-to-navigate format for patients. Implemented SEO best practices to improve visibility and attract more users.</li>

<li>d. <b>Performance Optimization</b> -- Optimized loading speeds and ensured secure data handling for patient confidentiality. Conducted user testing to refine the experience based on feedback.</li>

<li>e. <b>Brand Consistency & Visual Identity</b> - Aligned the website’s design with Kabod Physiotherapy’s branding (colors, fonts, tone). Added interactive elements (e.g., FAQs, service explainers) to improve engagement.</li></li></ul>

Result: The website now provides a smooth, professional, and efficient platform for patients to book appointments and access physiotherapy resources.</p>
      </section>
      <section className="case-section">
        <h2>The Challenge</h2>
        <p>The main challenge was to design a website that is both informative and easy to navigate, ensuring users can quickly find the services and book appointments.</p>
      </section>
      <div className="case-images">
        <img src={kabodImage} alt="Physiotherapy Website Screenshot" />
      </div>
      <section className="case-section">
        <h2>The Solution</h2>
        <p>We implemented a user-friendly navigation system, clear service descriptions, and an intuitive booking form to enhance the user experience.</p>
      </section>
      <section className="case-section">
        <h2>Key Features</h2>
        <ul>
          <li>Online appointment booking</li>
          <li>Clear service descriptions</li>
          <li>Responsive design</li>
          <li>Modern, accessible UI</li>
        </ul>
      </section>
      <section className="case-section">
        <h2>Results</h2>
        <div className="case-results">
          <div className="case-result"><div className="case-result-value">85%</div><div>User Satisfaction</div></div>
          <div className="case-result"><div className="case-result-value">+200</div><div>Appointments Booked</div></div>
          <div className="case-result"><div className="case-result-value">98%</div><div>Mobile Usability</div></div>
        </div>
      </section>
    </section>
  );
};

export default KabodCaseStudy; 