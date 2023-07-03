import React, { useEffect } from 'react';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import {
  Typography,
} from '@material-ui/core';

const App = () => {
  const name = 'Ryan';
useEffect(() => {}, [
]); 
  return (
    <div className="App">
      <Navbar/>
      <Welcome
        name={'Ryan Acevedo Slaughter'}
        title={'Full Stack Developer'}
        credentials={'University of California, Berkeley - Certificated Full Stack Developer (Anticipated July 2023)'}
        degrees={'Florida State University - Master of Science in Curriculum and Instruction'}
      />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};


export default App;