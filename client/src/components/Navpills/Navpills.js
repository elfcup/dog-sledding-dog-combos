import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
                <li onClick={() => props.handlePageChange("Home")}>
                    <a>Home</a>
                </li>
                <li onClick={() => props.handlePageChange("Survey")}>
                    <a>Survey</a>
                </li>
                <li onClick={() => props.handlePageChange("Results")}>
                    <a>Results</a>
                </li>
                <li onClick={() => props.handlePageChange("DogSledding")}>
                    <a>DogSledding</a>
                </li>
            </ul>
);
            <p><a href="/">Reset</a></p>
        
            {/* <p> {props.message} </p> */}
            </div>
          
);

export default Navpills;

