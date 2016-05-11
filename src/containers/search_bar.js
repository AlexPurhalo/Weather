// 1. Firstly we import React module
import React, { Component } from 'react';

// 2. Then we define 'SearchBar' class adding the export to make it available for App component
// 3. Here we render a search form with input field
export default class SearchBar extends Component {
    render() {
        return (
          <form className="input-group">
              <input />
          </form>
        );
    }
}