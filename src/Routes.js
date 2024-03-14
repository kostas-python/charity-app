import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/component/Home';
import AboutUs from '../src/component/AboutUs';
import ContactUs from '../src/component/ContactUs';
/*import Donate from './pages/Donate'; */



const routes = [
  { path: '/home', component: Home },
  { path: '/aboutUs', component: AboutUs },
  { path: '/contactUs', component: ContactUs }
];

function RenderRoutes() {
  return routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));
}

export default RenderRoutes;
