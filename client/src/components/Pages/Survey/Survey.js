import React from "react";
import "./Survey.css";

const Survey = props => (
    <div className="titlebox">
        <h1>Dog Breed Choices</h1>
        <p>Select two dogs to breed and discover how many bla bla bla bl!</p>
    
       
            <div className="form-group">
                <label for="exampleFormControlSelect1"></label>
                <h3><strong>Question 1</strong></h3>
                <h4>Select your activity level:</h4>
                <select className="form-control" id="q1">
                    <option value="" disabled selection>Please select:</option>
                    <option value="1">1 Couch Potato</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 Marathon Runner</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1"></label>
                <h3><strong>Question 2</strong></h3>
                <h4>How big is your backyard?</h4>
                <select className="form-control" id="q2">
                    <option value="" disabled selection>Please select:</option>
                    <option value="1">1 I don't have a backyard</option>
                    <option value="2">2 Postage Stamp</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 Football Field</option>
                </select>
            </div>
    </div>
   
);

export default Survey;

