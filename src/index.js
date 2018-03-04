import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = "AIzaSyC1M5NwhMIlE-9QWLb14WYUrthTc4uDiZY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {       // const will never change
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar 
          onSearchTermChange = {videoSearch}
        />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          videos={this.state.videos} 
          onVideoSelect= {(selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
      );  //JSX, allows to write HTML in JS
  }
}

// Take this component's HTML and put it on the page
ReactDOM.render(<App/>, document.querySelector(".container"));