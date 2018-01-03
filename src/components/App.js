import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order'
import sampleFishes from '../sample-fishes.js';
import base from '../base';


class App extends React.Component {
  constructor() {
    super();

    //binds addFish method to component itself which makes it possible to use 'this' inside of the method (this => component)
    this.addFish = this.addFish.bind(this);

    //binds loadSamples method to component itself
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
      //get initial state. Either array or object is fine
    this.state = {
      fishes: {},
      order: {}
    };
  }
    componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //updarte our state
    this.setState({ order });
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
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}
        />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

// key={key} for React use. hence ... need to create index={key} to index fish
//Order why only pass fishes and orders instaead of passing the entire state down? Only pick and choose what you needs
export default App;

//tagline(props) was defined in Header.js use it by giving the value tagline = "dsfsdfsdfs"
//inside of the constructor, line7, can not use 'this' without calling super() because React component we are extending needs to be initialized first.
