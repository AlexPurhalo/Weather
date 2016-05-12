import React, { Component } from 'react';
// 12. here we add ability to create connection between component and dispatch function
import { connect } from 'react-redux';
// 13. here we create relationship between actions and container component
import { bindActionCreators } from 'redux';
// 14. here we add our 'fetchWeather' action to our file
import { fetchWeather } from '../actions/index';

// 15. here we've deleted default export and added this for 'connect' method
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
//  9. To make 'this.onFormSubmit' function available blind its by adding 'bind' method with 'this' word as argument
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {

        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

//  8. Here we pass data with city's name as 'term' to fetchWeather
//     This function will create request that will get the data for current city
//     To make function available for using in this component need add binding between component and action
        this.props.fetchWeather(this.state.term);
//  16. After request sending we want clear input by making its equal to empty string
        this.setState({ term: '' });
    }

    render() {
        return (
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

// 10. Here we add a function that bind action with dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather}, dispatch)
}

// 11. When here we create a connection between dispatch and component.
//     We do this to make a 'fetchWeather' function available to using in 'onFormSubmit' function.
//     As we remember we make 'fetchWeather' available because we want pass a 'term' with some city.
//     We pass there 'city' to fetch a data with information about weather from file located in internet.
//     Don't worry about null this passed only for convention applying.
//     To make supply process of data connection we need import some stuff
export default connect(null, mapDispatchToProps)(SearchBar)