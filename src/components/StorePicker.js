//do import React from 'react'; to every file that needs react
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  //^^^ one way of binding non native react method to component
  // super runs react component firtst then custom component
  // since render is bound to the component you can do this.goToStore but if you are using in custom class it needs to be bound
  // to component frist.

  goToStore(event) {
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`)
    // second we're going to transition from / to /store/:storeId
    //surfacing router (to make current react component avail (StorePciker) use context)
    this.context.router.transitionTo(`/store/${storeId}`);
  }
//(`/store/${storeId}`)  Careful not to use '' instead of ``
  render(){
    //anywhere else
     return (
       <form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>

        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={
            getFunName()} ref={(input)=>{this.storeInput=input}} />
        <button type="submit">Visit store</button>
       </form>
     ) //all html needed will go inside (). since class is reserved by js, className will be used
       //short cut -> form.name of the class
       //things like img tag that did not need closing tag in html needs to self close here
       //render method is bound to the class so  "this." refers to, equal to the component that it's in. I here it's 'StorePicker'
       //madeup method, which is non native React method needs something to have this. bound to the component
       //ref={(input)=>{this.storeInput=input}} /> using function ref {()} // ref is actual way to reference the input
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;

//We are setting contextTypes to router
//What it does is...tell React the StorePicker component expects something called 'router'

//React like small nice component. Not having something availble globally


//  {/* to comment out within jsx, you can't do // use {/* comment*/}
//   {/*comment location matters*/}
