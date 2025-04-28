import { ArrowUpRight } from 'lucide-react';
import './Projects.css';
import hotseatImage from './Assets/hotseat.jpg';
import karmzahImage from './Assets/Chapter.png';
import puzzleScoutImage from './Assets/puzzle.jpg';
import kabodImage from './Assets/Kabod.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Hottseat Game Hub',
      category: 'UX/UI Design',
      description: 'Hottseat Game Hub is a gaming platform designed to provide users with a seamless experience for discovering, playing, and sharing HTML5 games. With a focus on both freemium and subscription-based models, the app offers a diverse range of gaming options for users of all preferences.',
      image: hotseatImage,
      tags: ['Mobile', 'Game', 'Subscription'],
      link: '/case-study/hottseat'
    },
    {
      id: 2,
      title: 'Karmzah Run',
      category: 'Desktop Game Design',
      description: 'Karmzah Run is a desktop game designed to provide users with fun Adventure gaming experience on their desktop',
      image: karmzahImage,
      tags: ['Desktop', 'Game'],
      link: '/case-study/karmzah'
    },
    {
      id: 3,
      title: 'Puzzle Scout',
      category: 'UI/UX Design',
      description: 'Puzzle Scout is a mobile game designed to provide users with a fun and challenging puzzle-solving experience. The game features a clean and modern design, with a focus on providing users with a seamless experience for solving puzzles and progressing through the game.',
      image: puzzleScoutImage,
      tags: ['Mobile', 'Adventure', 'Game'],
      link: '/case-study/puzzlescout'
    },
    {
      id: 4,
      title: 'Kabod Physiotherapy',
      category: 'Web Design',
      description: 'Kabod Physiotherapy is a website designed to provide users with a comprehensive physiotherapy service. The website features a clean and modern design, with a focus on providing users with a seamless experience for booking appointments and accessing information about the physiotherapy services offered.',
      image: kabodImage,
      tags: ['Web', 'Healthcare', 'Design Systems'],
      link: '/case-study/kabod'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
          Explore some of my recent design work, showcasing my approach to solving complex user experience challenges.
        </p>
        
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.link.startsWith('/case-study') ? (
                  <Link to={project.link} className="project-link">
                    View Case Study <ArrowUpRight size={16} className="ml-1" />
                  </Link>
                ) : (
                  <a href={project.link} className="project-link">
                    View Case Study <ArrowUpRight size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;