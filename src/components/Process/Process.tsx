import { Search, Figma, PenTool, Play } from 'lucide-react';
import './Process.css';

const Process = () => {
  const processSteps = [
    {
      
      icon: <Search size={24} />,
      title: 'Research & Discovery',
      description: 'I begin by understanding the problem space, users, and business goals through comprehensive research.'
    },
    {
      
      icon: <PenTool size={24} />,
      title: 'Ideation & Sketching',
      description: 'Exploring multiple solutions through sketching, wireframing, and collaborative ideation sessions.'
    },
    {
    
      icon: <Figma size={24} />,
      title: 'Design & Prototyping',
      description: 'Creating high-fidelity designs and interactive prototypes that bring the solution to life.'
    },
    {
      
      icon: <Play size={24} />,
      title: 'Testing & Iteration',
      description: 'Validating designs through user testing and iteratively refining based on feedback and insights.'
    }
  ];

  const testimonials = [
    {
      content: "Gordon's designs for our physiotherapy website transformed our healthcare services. His attention to detail and user-centered mindset delivered results beyond our expectations.",
      author: "Caleb Semanyoh",
      position: "Physiotherapist, Kabod Physiotherapy",
    },
    {
      content: "Gordon's contribution to our UI/UX team was great. His designs were not only visually appealing but also user-friendly and functional.",
      author: "Eyram Tawia",
      position: "CEO, Leti Arts",
    },
    {
      content: "Gordon not only delivered exceptional designs but also helped us understand our users better. His systematic approach to design challenges is impressive.",
      author: "Emmanuel Daramola",
      position: "UI/UX Lead, Leti Arts",
    }
  ];

  return (
    <section id="process" className="process section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Design Process</h2>
        
        <div className="process-intro">
          <p>
            I believe in a systematic yet flexible approach to design, focusing on understanding user needs and business goals to create meaningful experiences. My process combines analytical thinking with creative exploration.
          </p>
        </div>
        
        <div className="process-steps">
          <div className="process-line"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">
              
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="testimonials">
          <h3 className="testimonial-heading">Testimonials</h3>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <span className="testimonial-quote">"</span>
                  {testimonial.content}
                </div>
                <div className="testimonial-author">
                  
                  <div className="testimonial-info">
                    <span className="testimonial-name">{testimonial.author}</span>
                    <span className="testimonial-position">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;