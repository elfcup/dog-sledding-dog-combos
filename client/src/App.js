
import React, { Component } from 'react';
import './App.css';
import breeds from './breeds.json'
import image from './breeds.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import BreedCard from './components/BreedCard'
// import Home from './components/Pages/Home'
import Survey from './components/Pages/Survey'
// import Results from './components/Pages/Results'
// import DogSledding from './components/Pages/DogSledding'

class App extends Component {
  state = {
    message: "Dog Sled Breed Combo",
    breeds: breeds,
    image: image,
  }

  componentDidMount() {
    }

  render() {
    return (
      <Wrapper>
        <Navpills
          message={this.state.message}
        />
        <Survey />
        {
          this.state.breeds.map(breeds => (
            <BreedCard
              name={breeds.name}
              image={breeds.image}
            />
          ))
        }
      </Wrapper>
    );
     };
}


export default App;
