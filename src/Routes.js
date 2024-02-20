import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';

const routes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: AboutUs },
  { path: '/contactUs', component: ContactUs },
  { path: '/donate', component: Donate }
];

function RenderRoutes() {
  return routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));
}

export default RenderRoutes;