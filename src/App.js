import React,{ } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Header from './component/Header';

import './styles/Home.css';
import './styles/AboutUs.css';

import './styles/ContactUs.css';
import './styles/nicepage.css';





function App() {
  return (
    <Router>
      <div>
        <Header>
          <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1" data-responsive-from="MD">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" activeClassName="active">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </Header>

        <Routes> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
