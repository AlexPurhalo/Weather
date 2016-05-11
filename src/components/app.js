import React, { Component } from 'react';

// 4. Here we import a 'SearchBar' component from the search_bar.js file
import SearchBar from '../containers/search_bar'

// 5. In App class that is component we render a 'SearchBar' component that was recently imported from search_bar.js
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
