import React from "react";
import "./Home.css";
import BreedCard from '../../../components/BreedCard/BreedCard.js';
// import breeds from "../../../breeds.js";
import pictures from "../../../cartoon.js";
import Wrapper from '../../../components/Wrapper';
class Home extends React.Component {
    
    
    render() {
        return(
    <div className="titlebox-home">
        <h1>Thinking about adopting a dog?</h1>
        <p>Please enter the survey and answer the following questions to help determine which breed of dog would best suit your life style.</p>
          <Wrapper>      
            {pictures.map(pictures => {
             return( 
                 <BreedCard name={pictures.name} image={pictures.image}/>
                );
            })
              } 
              </Wrapper>
        <div className="form-group">
        

            </div>
    </div>
        );
    }
}


export default Home;

