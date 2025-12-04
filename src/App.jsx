import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Artworks from './pages/Artworks.jsx';
import Calculator from './pages/Calculator.jsx';
import CpuScheduler from './pages/CpuScheduler.jsx';
import './styles/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/cpu" element={<CpuScheduler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


