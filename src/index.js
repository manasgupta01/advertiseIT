import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Nav from './components/Nav';
import Career from './pages/career';

ReactDOM.render(
  <BrowserRouter>
     <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
					
          {/* Add more routes as needed */}
        </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
