import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';


const routes = [
  { path: '/pages/Home', component: Home },
  { path: '/pages/AboutUs', component: AboutUs },
  { path: '/pages/ContactUs', component: ContactUs },
  { path: '/pages/Donate', component: Donate }
];

function RenderRoutes() {
  return routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));
}

export default RenderRoutes;