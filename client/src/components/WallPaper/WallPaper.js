import React from "react";
import "./WallPaper.css";

const WallPaper = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
    
);

export default WallPaper;
