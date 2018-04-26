import React from "react";
import "./DogSledding.css";
// import "../../../../public/img/elfiemaltese_sled.jpg";
var elfieSledding = require("./elfiemaltese_sled.jpg");

    

const DogSledding = props => (
    <div className="titlebox-dogsledding">
        <h1>Dog Sledding!</h1>
        <p>Of your best fit breed, how many dogs would be needed to pull a dog sled, the equivalance of and 8-husky dog team.</p>
    
       
            <div className="form-group">
           
            < img src={elfieSledding} />
               
            </div>
            <div className="form-group">
               
            </div>
    </div>
   
);

export default DogSledding;

