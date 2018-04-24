import React from "react";
import "./WallPaper.css";

const WallPaper = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.wallImage}/>
        </div>
    </div>
    
);

export default WallPaper;
