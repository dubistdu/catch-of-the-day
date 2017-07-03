import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order'

class App extends React.Component {
  constructor() {
    super();
    this
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory/>
      </div>
    )
  }
}

export default App;

//tagline(props) was defined in Header.js use it by giving the value tagline = "dsfsdfsdfs"
//inside of the constructor, line7, can not use this without calling super() because React component we are extending needs to be initialized first.
