// let's go!
import React from 'react';

// this imports only one element from react dom. import ReactDom from 'react-dom' import the whole React library
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';
import './css/style.css';
import App from './components/App';

//jsx '<' open Component, '/>' close Component
//second argument. What Dom element should render out to
render (<App/>, document.querySelector('#main'));

//render (<name Of components that render/>);
