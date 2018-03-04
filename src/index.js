import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

// Create a new functional component
const App = () => {       // const will never change
return (
  <div>
    <SearchBar/>
  </div>
  );  //JSX, allows to write HTML in JS
}
// App --> class
// <App/> --> Instance

// Take this component's HTML and put it on the page
ReactDOM.render(<App/>, document.querySelector(".container"));