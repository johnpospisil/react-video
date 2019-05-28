import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
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
    // console.log("From the App!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {/* The prop and callback do not have to have the same name, but usually do. */}
        {/* See below fro examples */}
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            {/* Usee 11 of 16 columns */}
            <div className="eleven wide column">
              <VideoDetail  video={this.state.selectedVideo}/>
            </div>
            {/* Use 5 of 16 columns */}
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;