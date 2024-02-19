import React,{ } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/footer' component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;