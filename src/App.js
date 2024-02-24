import React,{ } from 'react';
import { BrowserRouter as Router, Route, Routes,NavLink } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';

/*import Donate from './pages/Donate'; */




function App() {
  return (
    <Router>
      <div>
        <nav>
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


        <Routes> {/* Wrap your routes with Routes */}
          <Route path="/home" element={<Home />} /> {/* Use element prop to render the component */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;