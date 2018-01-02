import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order'
import sampleFishes from '../sample-fishes.js';


class App extends React.Component {
  constructor() {
    super();

    //binds addFish method to component itself which makes it possible to use 'this' inside of the method (this => component)
    this.addFish = this.addFish.bind(this);

    //binds loadSamples method to component itself
    this.loadSamples = this.loadSamples.bind(this);

      //get initial state. Either array or object is fine
    this.state = {
      fishes: {},
      order: {}
    };
  }

addFish(fish) {
  //update state
  const fishes = {...this.state.fishes};
  //add in our new fish
  const timestamp = Date.now();
  fishes[`fish-${timestamp}`] = fish;
  // set state
  this.setState({ fishes });

}

loadSamples() {
  this.setState({
    fishes: sampleFishes
  });
}

// passing down addFish and loadSamples via props
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}


export default App;

//tagline(props) was defined in Header.js use it by giving the value tagline = "dsfsdfsdfs"
//inside of the constructor, line7, can not use 'this' without calling super() because React component we are extending needs to be initialized first.
