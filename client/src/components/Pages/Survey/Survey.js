import React from "react";
import "./Survey.css";

class Survey extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        valueq1: 0,
        valueq2: 0,
        valueq3: 0,
        valueq4: 0,
        valueq5: 0,
       
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

    handleChange(event) {
        const answerNumber = parseInt(event.target.value);
        this.setState({[event.target.name]: answerNumber},
        function(){console.log('state after answer ', this.state)});
        
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
     
        const answers = Object.values(this.state);// [this.state.valueq1, this.state.valueq2];
       console.log("==========", answers);
    }

    

    render() {
        return (
    <div className="titlebox-survey">
        <h1>Dog Breed Choices</h1>
        <p>Select two dogs to breed and discover how many bla bla bla bl!</p>
    
       <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="exampleFormControlSelect1"></label>
                <h3><strong>Question 1</strong></h3>
                <h4>Select your activity level:</h4>
                <select value={this.state.valueq1} onChange={this.handleChange} className="form-control" name="valueq1">

                <option selected="selected" value="0" disabled selection>Please select:</option>
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
                    <select value={this.state.valueq2} onChange={this.handleChange} className="form-control" name="valueq2">
                <option selected="selected" value="0" disabled selection>Please select:</option>
                    <option value="1">1 I don't have a backyard</option>
                    <option value="2">2 Postage Stamp</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 Football Field</option>
                </select>
            </div>
            <br></br>
        <div className="text-right">
            <button type="submit" className="btn btn-primary btn-md" id="submit"><span className="glyphicon glyphicon-fire"></span>Sumbit</button>
        </div>
        </form>
    </div>
   
);
}
}

export default Survey;

