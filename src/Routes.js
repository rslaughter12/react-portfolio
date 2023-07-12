import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


const AppRoutes = ({ onFormSubmit, isFormSubmitted }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Welcome
          name={'Ryan Acevedo Slaughter'}
          title={'Full Stack Developer'}
          credentials={'University of California, Berkeley - Certificated Full Stack Developer (Anticipated July 2023)'}
          degrees={'Florida State University - Master of Science in Curriculum and Instruction'}
        />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route
        path="/contact"
        element={<Contact onFormSubmit={onFormSubmit} isFormSubmitted={isFormSubmitted} />}
      />
    </Routes>
  );
};

export default AppRoutes;
