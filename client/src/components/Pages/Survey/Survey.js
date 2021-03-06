import React from "react";
import "./Survey.css";
import { Form } from "react-bootstrap";
import breeds from "../../../breeds.js";

// import dogpack from "../../../dogpack.js";
// import Wrapper from '../../../components/Wrapper';
// import BreedCard from '../../../components/BreedCard/BreedCard.js';
var dogpackPaper = require("./dogpack.jpg");

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: {
                valueq1: 0,
                valueq2: 0,
                valueq3: 0,
                valueq4: 0,
                valueq5: 0,
            },
            bestMatch: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const answerNumber = parseInt(event.target.value);
        const questionName = event.target.name;

        this.setState(prevState => {
            const answerCopy = Object.assign({}, prevState.answers); // create a copy of the old answers
            answerCopy[questionName] = answerNumber; // update the question they answered
            return {
                answers: answerCopy
            }
        }, () => {
            console.log('state after answer ', this.state) 
        })
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();

        const answers = Object.values(this.state.answers);// [this.state.valueq1, this.state.valueq2];
        console.log("==========", answers);

        var bestMatch = {
            name: "",
            image: "",
            breedDifference: Infinity,
            breedSignedDifference: Infinity
        };

        for (var i = 0; i < breeds.length; i++) {
            const currentBreed = breeds[i];
            console.log("+++++++breeds: " + currentBreed.name);
            // This above console log will list all of the friends in the friends array
            
            // calculate the signed difference
            let signedDifference = 0;
            for (var j = 0; j < currentBreed.score[j]; j++) {
                signedDifference += parseInt(currentBreed.score[j]) - parseInt(answers[j])
            }

            // then calculate the absolute difference
            const absoluteDifference = Math.abs(signedDifference);
            // if the absolute differences match, take the lower signed difference
            const differencesMatch = absoluteDifference === bestMatch.breedDifference
            const hasLowerSignedDifference = signedDifference < bestMatch.breedSignedDifference
            const hasLowerAbsoluteDifference = absoluteDifference < bestMatch.breedDifference
            if (differencesMatch && hasLowerSignedDifference) {
                bestMatch.name = currentBreed.name;
                bestMatch.image = currentBreed.image;
                bestMatch.breedDifference = absoluteDifference;
                bestMatch.breedSignedDifference = signedDifference;
            } else if (hasLowerAbsoluteDifference) {
                bestMatch.name = currentBreed.name;
                bestMatch.image = currentBreed.image;
                bestMatch.breedDifference = absoluteDifference;
                bestMatch.breedSignedDifference = signedDifference;
            }
        }
        console.log("+++++best match", bestMatch);
        this.setState({ bestMatch: bestMatch});
  }

renderPage = () => {
    if(this.state.bestMatch)
    {
        return (<div className="makeStuffCentered"><div><h3 className="makeWordsCentered"> Here is the best match according to your answers:</h3></div>
        <br></br>
        <div className="resultsImage"><h1><strong>{this.state.bestMatch.name}</strong></h1>
        <br></br>
                <img src={this.state.bestMatch.image}/>
        </div></div>);
    }
    else{
        return (
            
            <div className="titlebox-survey">
                <br></br>
                <br></br>           
                
                <div className="dogpackImage">
                    
                    < img src={dogpackPaper} />
                
                </div>
               
                
               
                <h1>Take Survey!</h1>
                <p>Please select an item from each question to help best select which dog breed would best suit you.</p>              
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <Form>
                    <div className="form-group">
                        <h3><strong>Question 1</strong></h3>
                        <h4>Select your activity level:</h4>
                        <select value={this.state.valueq1} onChange={this.handleChange} className="form-control" name="valueq1">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1. I am a Couch Potato</option>
                            <option value="2">2. Mildly Active</option>
                            <option value="3">3. Moderatly Active</option>
                            <option value="4">4. Very Active</option>
                            <option value="5">5. I am a Marathon Runner</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <h3><strong>Question 2</strong></h3>
                        <h4>How big is your backyard?</h4>
                        <select value={this.state.valueq2} onChange={this.handleChange} className="form-control" name="valueq2">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1. I have an awesome backyard, but I will not let a dog in it</option>
                            <option value="2">2. I don't have a backyard</option>
                            <option value="3">3. Postage Stamp</option>
                            <option value="4">4. Medium sized</option>
                            <option value="5">5. Football Field</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <h3><strong>Question 3</strong></h3>
                        <h4>Select grooming preferences:</h4>
                        <select value={this.state.valueq3} onChange={this.handleChange} className="form-control" name="valueq3">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1. I will never bathe a dog, I am too good for that</option>
                            <option value="2">2. Bath once a month...if I feel like it</option>
                            <option value="3">3. I will tolerate lots of shedding</option>
                            <option value="4">4. Needs haircuts every three months</option>
                            <option value="5">5. Brush hair every day, needs haircut every three months</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <h3><strong>Question 4</strong></h3>
                        <h4>Temperment:</h4>
                        <select value={this.state.valueq4} onChange={this.handleChange} className="form-control" name="valueq4">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1. A quiet dog that hardly moves</option>
                            <option value="2">2. Loves people, including strangers</option>
                            <option value="3">3. Middle Ground</option>
                            <option value="4">4. Moderately Protective</option>
                            <option value="5">5. Guard Dog</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <h3><strong>Question 5</strong></h3>
                        <h4>For outdoor activities, what best suits you?</h4>
                        <select value={this.state.valueq5} onChange={this.handleChange} className="form-control" name="valueq5">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1. I don't ever go outside, I am afraid of the sun</option>
                            <option value="2">2. Walking</option>
                            <option value="3">3. Hiking</option>
                            <option value="4">4. Biking (dog running along side)</option>
                            <option value="5">5. Marathon Runner</option>
                        </select>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary btn-md" id="submit"><span className="glyphicon glyphicon-fire"></span>Submit</button>
                    </div>


            </Form>
                </form>
            </div>
        );
    }
}

    render() {
        return ( 
            <div>
            {this.renderPage()} 
            </div> 
        );
    }
}

export default Survey;

