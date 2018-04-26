import React from "react";
import "./Navpills.css";
import { Link } from "react-router-dom";

const Navpills = props => (  
            
        <ul className="nav nav-tabs">
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Survey">Survey</Link></li>
            <li><Link to="/DogSledding">DogSledding</Link></li>
        </ul>                 
);

export default Navpills;

