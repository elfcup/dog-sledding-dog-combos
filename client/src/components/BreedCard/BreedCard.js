import React from "react";
import "./BreedCard.css";

const BreedCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src="img/husky.jpg" />
          
        </div>
    </div>    
);

export default BreedCard;
