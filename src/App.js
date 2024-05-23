import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Achievement from './Achievement';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

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
