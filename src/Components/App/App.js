import './App.css';
import React from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';

class App extends React.Component() {
  constructor(props){
    super(props)
    this.state.searchResults = []
  }
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

