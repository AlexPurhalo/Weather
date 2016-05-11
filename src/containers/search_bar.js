import React, { Component } from 'react';

// Here we add a button into form group that will be rendered with other tags
export default class SearchBar extends Component {
    render() {
        return (
          <form className="input-group">
              <input />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
          </form>
        );
    }
}