import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


const AppRoutes = ({ onFormSubmit, isFormSubmitted }) => {
  return (
    <Routes>
      <Route
        path="/react-portfolio/"
        element={<Welcome
          name={'Ryan Acevedo Slaughter'}
          title={'Full Stack Developer'}
          credentials={'University of California, Berkeley - Certificated Full Stack Developer Program'}
          degrees={'Florida State University - Master of Science in Curriculum and Instruction'}
        />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route
        path="/contact"
        element={<Contact onFormSubmit={onFormSubmit} isFormSubmitted={isFormSubmitted} />}
      />
    </Routes>
  );
};

export default AppRoutes;
