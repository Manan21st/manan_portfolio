import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbars';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Achievement from './components/achievement/Achievement';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
