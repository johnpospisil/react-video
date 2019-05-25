import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {videos: []}; // When App is created, 'this.state.videos' property is
  // set to be empty

  onTermSubmit = async term => { // when a user submits a search term, do this...
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response);
    // set 'this.state.videos' to the response.data.items from the youtube response
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;