import React,{ } from 'react';
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom';
import routes from './Routes';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';
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




          <routes path="/home" exact component={Home} />
          <routes path="/aboutUs" component={AboutUs} />
          <routes path="/contactUs" component={ContactUs} />
        
      </div>
    </Router>
  );
}

export default App;