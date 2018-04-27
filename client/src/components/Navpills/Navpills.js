import React from "react";
import "./Navpills.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ButtonToolbar } from 'react-bootstrap';

const Navpills = props => (          
    <ButtonToolbar className="navButtons">
        <Button><Link to="/Register">Register</Link></Button>
        <Button><Link to="/">Home</Link></Button>
        <Button><Link to="/Survey">Survey</Link></Button>
        <Button><Link to="/DogSledding">DogSledding</Link></Button>
    </ButtonToolbar>        
     // <div className="nav nav-tabs">
        //     <p><Link to="/Register">Register</Link></p>
        //     <p><Link to="/">Home</Link></p>
        //     <p><Link to="/Survey">Survey</Link></p>
        //     <p><Link to="/DogSledding">DogSledding</Link></p>
        // </div>
);

export default Navpills;

