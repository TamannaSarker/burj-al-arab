import React from 'react';
import './AppRoute.css'
import {
    BrowserRouter as Router,
    Route,} from "react-router-dom";
import Form from '../Form/Form';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import Card from '../Card/Card';
import Confirmation from '../Confirmation/Confirmation';
function AppRoute() {
     return (
        <>
           <Router>
            <Menu />
            <Route path="/" exact component={Card}  />
             <Route path="/form" component={Form}   />
             <Route path="/contact" component={Contact}   />
             <Route path="/login" component={Login}   />
             <Route path="/confirm"  component={Confirmation}/>
           </Router>    
        </>
     )
     
 
};

export default AppRoute;