import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Routes';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';



const App = () => {
  useEffect(() => {
    // Add any side effects or dependencies here
  }, []);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        console.log('Error:', response.status);
        // Handle error case, e.g., display an error message
      }
    } catch (error) {
      console.log('Error:', error.message);
      // Handle error case, e.g., display an error message
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes onFormSubmit={handleFormSubmit} isFormSubmitted={isFormSubmitted} />
      </Router>
    </div>
  );
};

export default App;
