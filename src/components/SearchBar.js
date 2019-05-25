import React from 'react';

class SearchBar extends React.Component {
state = { term: ''}; // 'term' is the user's search term

onInputChange = (event) => {
  this.setState({ term: event.target.value });
};

onFormSubmit = event => {
  event.preventDefault(); 
  // tell the parent component what the user's search term is
  this.props.onFormSubmit(this.state.term);
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