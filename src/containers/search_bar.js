import React, { Component } from 'react';

export default class SearchBar extends Component {
// 3. We want add default state to our properties.
//    For this we use special 'constructor' function

    constructor(props) {
// 4. As we see 'constructor' function takes single 'props' parameter.
//    After then we've added 'super' keyword to 'props' we inherit React's functionality.
        super(props);

// 5. Eventually we set empty string to 'term' property as default value
        this.state = { term: '' };

// 7. Here we make 'onInputChange' function available to work binding its by 'this' argument to bind method         
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
//  6. Here we change value of 'term' property adding there 'event.target.value' that equal to user's input

        this.setState({ term: event.target.value });
//  8. To make sure that function is working we can output 'term' value to console by 'console.log(event.target.value)'
    }

    render() {
        return (
          <form className="input-group">
              <input
                placeholder="Get a five-day forecast in your favorite cities."
                className="form-control"
// 1. We want make 'value' equal to 'term' property that can be any text
                value={this.state.term}
// 2. We want make 'onChange' equal to 'onInputChange' func.
//    This function will come in work when user type in some text from keyboard
                onChange={this.onInputChange} />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
          </form>
        );
    }
}