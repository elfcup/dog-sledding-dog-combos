// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
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
        <Title />
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
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

};
}


export default App;
