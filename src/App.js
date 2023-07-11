import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'; // Update import statement
import Routes from './Routes';
import Welcome from './components/Welcome';

const App = () => {
  useEffect(() => {
    // Add any side effects or dependencies here
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
