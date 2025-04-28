import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Process from './components/Process/Process';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import HottseatCaseStudy from './components/CaseStudies/HottseatCaseStudy';
import KarmzahCaseStudy from './components/CaseStudies/KarmzahCaseStudy';
import PuzzleScoutCaseStudy from './components/CaseStudies/PuzzleScoutCaseStudy';
import KabodCaseStudy from './components/CaseStudies/KabodCaseStudy';
import './App.css';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const hideHeader = location.pathname.startsWith('/case-study/');
  const hideFooter = location.pathname.startsWith('/case-study/');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader-text">G</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="app">
        {!hideHeader && <Header />}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <section id="projects" className="projects section-padding">
                  <Projects />
                </section>
                <Process />
                <Contact />
              </>
            } />
            <Route path="/case-study/hottseat" element={<HottseatCaseStudy />} />
            <Route path="/case-study/karmzah" element={<KarmzahCaseStudy />} />
            <Route path="/case-study/puzzlescout" element={<PuzzleScoutCaseStudy />} />
            <Route path="/case-study/kabod" element={<KabodCaseStudy />} />
          </Routes>
        </main>
        {!hideFooter && <Footer />}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;