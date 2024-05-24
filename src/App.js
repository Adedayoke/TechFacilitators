import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Courses from './pages/Courses';
import CoursePricing from './pages/CoursePricing';
import './styles/index.css';
import { BrowserRouter, Routes, Route, useHref } from 'react-router-dom';
// import { PageContext } from './context/PageContext';
// import React, { useContext } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/coursepricing' element={<CoursePricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
