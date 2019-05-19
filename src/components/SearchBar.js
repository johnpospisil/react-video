import React from 'react';

class SearchBar extends React.Component {
  render() {
    return <div className="search-bar ui segment">
      <form className="ui form">
        <div className="filed">
          <label>Video Search</label>
          <input type="text"></input>
        </div>
      </form>
    </div>;
  }
}

export default SearchBar;