import React from 'react';





// ********* if you are going to use *Stateless function => means if you are not going to use only one method, like render, it does not make sense
//to use entire react Component.
//What all Header class does is 
// class Header extends React.Component {
//   render(){
//     return (
//       <header className="top">
//         <h1>Catch
//         <span className="of the">
//           <span className="of">of</span>
//           <span className="the">the</span>
//         </span>
//         Day
//         </h1>
//         <h3 className="tagline">{this.props.tagline}</h3>
//       </header>
//     )
//   }
// }
//***************
export default Header;

//in each component we can make as many attributes as we want. ex) <Header tagline="Fresh Seafood"> It's called Props and it just supplies extra information
//You can name it whatever you want. It shows up on dev tool but not on interface
//use props anywhere in the render method
