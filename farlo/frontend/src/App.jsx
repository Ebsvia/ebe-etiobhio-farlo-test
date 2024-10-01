import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from './components/Shows.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shows />} />
      </Routes>
    </Router>
  );
};

export default App;



