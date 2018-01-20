import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  // If you create a search bar out of a form element,
  // When you press enter on your keyboard whlile a form element child is focused
  // The browser automatically think that you're trying to submit the contents (Post Request)
  // if not event handle, it will refresh the page. In this case, onFormSubmit will prevent page from refresh.
  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forcat in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}