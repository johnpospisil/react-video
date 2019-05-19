import React from 'react';

class SearchBar extends React.Component {
state = { term: ''};

onInputChange = () => {

};

  render() {
    return <div className="search-bar ui segment">
      <form className="ui form">
        <div className="filed">
          <label>Video Search</label>
          {/* Change from an uncontrolled input to a controlled input. */}
          {/* This way data will be saved in the component, and not in the DOM. */}
          <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
        </div>
      </form>
    </div>;
  }
}

export default SearchBar;