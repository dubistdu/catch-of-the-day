import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render(){
    return(
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
      </div>

    )
  }
}

export default Inventory;


//    return(
      // <div>
      //   <h2>Inventory</h2>
      //   <AddFishForm />
      // </div>
      // --> needs <div> wrap around to use <AddFishForm /> which is Adjacent JSX element
// JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant
