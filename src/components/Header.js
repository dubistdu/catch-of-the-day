import React from 'react';

// create var Header and 'render' part inside. Pass props, but since it's not bound to React anymore, get rid of this
  const Header = (props) => {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
           Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    )
  }
export default Header;

//in each component we can make as many attributes as we want. ex) <Header tagline="Fresh Seafood"> It's called Props and it just supplies extra information
//You can name it whatever you want. It shows up on dev tool but not on interface
//use props anywhere in the render method
