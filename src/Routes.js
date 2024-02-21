import React from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
/*import Donate from './pages/Donate'; */


const routes = [
  { path: '/pages/Home', component: Home },
  { path: '/pages/AboutUs', component: AboutUs },
  { path: '/pages/ContactUs', component: ContactUs }
];

function RenderRoutes() {
  return routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));
}

export default RenderRoutes;