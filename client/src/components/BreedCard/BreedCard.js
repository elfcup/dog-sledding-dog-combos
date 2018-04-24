import React from "react";
import "./BreedCard.css";

const BreedCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
          
        </div>
    </div>
    
);

export default BreedCard;
