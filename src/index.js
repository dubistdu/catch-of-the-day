// let's go!
import React from 'react';

// this imports only one element from react dom. import ReactDom from 'react-dom' import the whole React library
import{ render } from 'react-dom';

//Router setting. Even a router is a component in React
import{ BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}
// ^^^ Match can't be a direct child of BrowserRouter. Hence div
// Do not comment within return. It messes up for some reason

//jsx '<' open Component, '/>' close Component
//second argument. What Dom element should render out to
render (<Root/>, document.querySelector('#main'));

//render (<name Of components that render/>);
