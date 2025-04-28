import { Palette, Lightbulb, Users, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'UI Design', proficiency: 95 },
    { name: 'UX Research', proficiency: 90 },
    { name: 'Prototyping', proficiency: 92 },
    { name: 'Interaction Design', proficiency: 88 },
    { name: 'Wireframing', proficiency: 94 },
    { name: 'Design Systems', proficiency: 85 },
  ];

  const tools = [
    'Figma',
    'Sketch',
    'Framer',
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image"></div>
            <div className="about-pattern"></div>
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              I'm Gordon, a passionate UI/UX designer with a keen eye for detail and a deep commitment to creating meaningful digital experiences.
            </p>
            <p className="about-description">
              With several years of experience in the design industry, I've honed my skills in creating intuitive interfaces that not only look great but also solve real user problems. I believe in design that is both beautiful and functional, prioritizing user needs while achieving business goals.
            </p>
            <p className="about-approach">
              My approach to design is holistic - balancing aesthetics, usability, and technical feasibility to create products that users love and businesses value.
            </p>
          </div>
        </div>
        
        <div className="strengths">
          <h3 className="strengths-title">My Strengths</h3>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">
                <Palette size={28} />
              </div>
              <h4>Visual Design</h4>
              <p>Creating attractive, cohesive visual systems that communicate brand values effectively.</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <Users size={28} />
              </div>
              <h4>User Research</h4>
              <p>Understanding user needs through methodical research to inform design decisions.</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <Lightbulb size={28} />
              </div>
              <h4>Problem Solving</h4>
              <p>Approaching design challenges with creativity and strategic thinking.</p>
            </div>
            <div className="strength-card">
              <div className="strength-icon">
                <Layers size={28} />
              </div>
              <h4>Design Systems</h4>
              <p>Building scalable, consistent design systems that enhance team collaboration.</p>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="skills-title">Skills & Expertise</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.proficiency}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tools-section">
          <h3 className="tools-title">Tools I Use</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool">{tool}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;