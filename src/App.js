import React, { Component } from 'react';
import './App.css';
import breeds from './breeds.json'
import image from './breeds.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import BreedCard from './components/BreedCard'

class App extends Component {
    state = {
        message: "Dog Sled Dog Breed Combo!",
        // topScore: 0,
        // curScore: 0,
        breeds: breeds,
        image: image,
        // unselectedBreeds: breeds
    }

    componentDidMount() {
    }

    // shuffleArray = array => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // selectBreeds = name => {
    //     const findBreed = this.state.unselectedBreeds.find(item => item.name === name);

    //     if(findBreed === undefined) {
    //         // failure to select a new Avenger
    //         this.setState({ 
    //             message: "You guessed incorrectly!",
    //             topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
    //             curScore: 0,
    //             breeds: breeds,
    //             unselectedBreeds: breeds
    //         });
    //     }
    //     else {
    //         // success to select a new Avenger
    //         const newBreeds = this.state.unselectedBreeds.filter(item => item.name !== name);
            
    //         this.setState({ 
    //             message: "You guessed correctly!",
    //             curScore: this.state.curScore + 1,
    //             breeds: breeds,
    //             unselectedBreeds: newBreeds
    //         });
    //     }

    //     this.shuffleArray(breeds);
    // };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    // curScore={this.state.curScore}
                    // topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.breeds.map(breeds => (
                        <BreedCard
                            name={breeds.name}
                            image={breeds.image}
                            // selectBreed={this.selectBreed} 
                            // curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

