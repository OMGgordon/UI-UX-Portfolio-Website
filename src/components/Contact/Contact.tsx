import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github as GitHub } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Talk About Your Project</h3>
            <p className="contact-subheading">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-content">
                  <span className="contact-method-label">Email</span>
                  <a href="mailto:gordonopoku123@gmail.com" className="contact-value-link">
                    gordonopoku123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-method-content">
                  <span className="contact-method-label">Phone</span>
                  <a href="tel:+233548472037" className="contact-value-link">
                    +233548472037
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-content">
                  <span className="contact-method-label">Location</span>
                  <span className="contact-method-value">
                    Accra, Ghana
                  </span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/gordon-opoku-97a63224a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/omg_skippa?t=AZP2CayTtwpjvUOp2GlSeA&s=35" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/OMGgordon" className="social-link" aria-label="GitHub">
                <GitHub size={20} />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                Send Message
              </button>
              
              {formStatus.submitted && (
                <div className={`mt-4 p-3 rounded-lg text-center ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;