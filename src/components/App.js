import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }; 

  onTermSubmit = async term => { // when a user submits a search term, do this...
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the App!", video);
  };

  render() {
    return (
      <div className="ui container">
        {/* The prop and callback do not have to have the same name, but usually do. */}
        {/* See below fro examples */}
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;