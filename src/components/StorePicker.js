//do import React from 'react'; to every file that needs react
import React from 'react';

class StorePicker extends React.Component {
  render(){
     return (
       <form className="store-selector">
       {/* to comment out within jsx, you can't do // use {/* comment*/}
          {/*comment location matters*/}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit store</button>
       </form>
     ) //all html needed will go inside (). since class is reserved by js, className will be used
       //short cut -> form.name of the class
       //things like img tag that did not need closing tag in html needs to self close here
  }
}

export default StorePicker;

//We've created a component 'StorePciker'
