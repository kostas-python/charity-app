import React,{ } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './Navbar';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import ContactUs from './pages/Donate';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;