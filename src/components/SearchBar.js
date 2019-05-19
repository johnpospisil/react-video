import React from 'react';

class SearchBar extends React.Component {
state = { term: ''};

onInputChange = (event) => {
  this.setState({ term: event.target.value });
};

onFormSubmit = event => {
  event.preventDefault(); // prevent the browser from refreshing when ENTER is pressed
  // TODO: Make sure we call callback from parent component
}

  render() {
    return <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="filed">
          <label>Video Search</label>
          <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
        </div>
      </form>
    </div>;
  }
}

export default SearchBar;