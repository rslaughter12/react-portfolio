import React, { useEffect } from 'react';

import {
  Navbar,
  Welcome,
} from './components';

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
        credentials={'University of California, Berkeley - Certificated Full Stack Developer'}
        degrees={'Florida State University - Master of Science in Curriculum and Instruction'}

      />
    </div>
  );
};


export default App;