import React from "react";
import "./Survey.css";
// import breeds from "../../../breeds.json";
import breeds from "../../../breeds.js";
import Results from "../Results/Results.js";

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

        // this.setState({ 
        //     answers: {
        //         [event.target.name]: answerNumber
        //     } 
        // }, () => { 
        //     console.log('state after answer ', this.state) 
        // });

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
        return (<div><div> Here is the best match</div>
        <div>{this.state.bestMatch.name}
                <img src={this.state.bestMatch.image}/>
        </div></div>);
    }
    else{
        return (
            <div className="titlebox-survey">
                <h1>Dog Breed Choices</h1>
                <p>Select two dogs to breed and discover how many bla bla bla bl!</p>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
                    <div className="form-group">
                        <h3><strong>Question 3</strong></h3>
                        <h4>Select grooming preferences:</h4>
                        <select value={this.state.valueq3} onChange={this.handleChange} className="form-control" name="valueq3">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1 Bath once a month...if I feel like it</option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 Brush hair every day, needs to be taken to groomer every three months</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h3><strong>Question 4</strong></h3>
                        <h4>Temperment:</h4>
                        <select value={this.state.valueq4} onChange={this.handleChange} className="form-control" name="valueq4">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1 Will likely go home with strangers</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 Guard Dog</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h3><strong>Question 5</strong></h3>
                        <h4>For outdoor activities, what best suits you?</h4>
                        <select value={this.state.valueq5} onChange={this.handleChange} className="form-control" name="valueq5">
                            <option selected="selected" value="0" disabled selection>Please select:</option>
                            <option value="1">1 Walking</option>
                            <option value="2">2 Biking (dog in basket)</option>
                            <option value="3">3 Hiking</option>
                            <option value="4">4 Biking (dog running along side)</option>
                            <option value="5">5 Marathon Runner</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary btn-md" id="submit"><span className="glyphicon glyphicon-fire"></span>Submit</button>
                    </div>



                </form>
            </div>
        );
    }

}//end of renderPage
//     {
//     this.state.bestMatch && (
//         <div> Here is the best match</div>)
// } 

    render() {
        return ( 
            <div>
            {this.renderPage()} 
            </div> 
        );
    }
}

export default Survey;

