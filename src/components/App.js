import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order'

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}

export default App;

//tagline(props) was defined in Header.js use it by giving the value tagline = "dsfsdfsdfs"
//inside of the constructor, line7, can not use 'this' without calling super() because React component we are extending needs to be initialized first.
