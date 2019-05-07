import React from "react";
import "./DogSledding.css";
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
// import breeds from "../../../breeds.js";
var elfieMalteseSledding = require("./elfiemaltese_sled.jpg");
var elfieHuskySledding = require("./elfiehusky_sled.jpg");

const DogSledding = props => (
    <div className="titlebox-dogsledding">
        <h1>Dog Sledding!</h1>
        <p>How many Maltese dogs would be needed to pull a dog sled, the equivalance of an 8-husky dog team?</p>
        < img src={elfieHuskySledding} />
        < img src={elfieMalteseSledding} />

        {/* <div className="form-group">
            <ButtonToolbar className="sledButtons">
                <Button img src={elfieHuskySledding}>Husky</Button>
                <Button img src={elfieMalteseSledding}>Maltese</Button>                
            </ButtonToolbar>
        </div> */}
    </div>
);

export default DogSledding;

