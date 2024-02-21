import React,{ } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import RenderRoutes from './Routesouter';
/*import Donate from './pages/Donate'; */




function App() {
  return (
    <Router>
      <div>
        <Router>
          <Route path="/home" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contactUs" component={ContactUs} />
        </Router>
      </div>
    </Router>
  );
}

export default App;