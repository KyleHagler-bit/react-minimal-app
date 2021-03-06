import React from 'react';
import ReactDOM from 'react-dom';

// CSS files are referenced here but not directly used in this code
// Webpack (magic) sees that we import the css file and takes care
// of bringing it into the html for us! Webpack is magic.
import './index.css';

// Just an element in a variable (nothing special)
const elem1 = <h1 id='two'>Hello World 2</h1>;

// A real react component: a function that returns an element! 
// Can now reference this using JSX Syntax: <Elem 2/>
const Elem2 = () => <h1 id='three'>Hello World 3</h1>;

// We can also just straight up mount an inline element to the DOM:
ReactDOM.render(<h1 id='one'>Hello World 1</h1>, document.getElementById('root1'));

// Mount an element that's just stored in a variable:
ReactDOM.render(elem1, document.getElementById('root2'));

// Mount a true react component using JSX Syntax:
ReactDOM.render(<Elem2 />, document.getElementById('root3'));
