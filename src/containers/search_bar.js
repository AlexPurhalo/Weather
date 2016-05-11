import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {

        this.setState({ term: event.target.value });
    }

//  2. Here we fill in 'onFormSubmit' by logic that prevent page reloading.
//     As we see we have event parameter that describe user's click.
//     To avoid reloading we add a 'preventDefault' method that does its work
    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
//  1. When we click on 'Submit' button we are reloading.
//     To avoid reloading we pass 'onFormSubmit' function that
//     This function solve problem with sending of POST request that reloads our page
          <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                placeholder="Get a five-day forecast in your favorite cities."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
          </form>
        );
    }
}