import React from "react";
import "./BreedCard.css";

const BreedCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectBreed(props.name)} 
            >
                <img alt={props.name} src={props.image} />
            
            </a>
        </div>
        
    </div>
    
);

export default BreedCard;
