import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyC1M5NwhMIlE-9QWLb14WYUrthTc4uDiZY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {       // const will never change
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
      );  //JSX, allows to write HTML in JS
  }
}

// Take this component's HTML and put it on the page
ReactDOM.render(<App/>, document.querySelector(".container"));