
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import breeds from './breeds.json'
// import image from './breeds.json'
import breeds from './breeds.js'
import image from './breeds.js'

import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
// import BreedCard from './components/BreedCard'
import Home from './components/Pages/Home'
import Survey from './components/Pages/Survey'
import Results from './components/Pages/Results'
import DogSledding from './components/Pages/DogSledding'

class App extends Component {
  state = {
    message: "Dog Breeds",
    breeds: breeds,
    image: image,
  }


  componentDidMount() {
    }

  render() {
    return (
     

  <Router>
    <div>
        <Navpills
          message={this.state.message}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/Survey" component={Survey} />
          <Route exact path="/DogSledding" component={DogSledding} />
         
        </div>
        </Router>

      
     

    );
     };
}


export default App;
