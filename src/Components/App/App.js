import './App.css';
import React from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';

class App extends React.Component() {
  constructor(props){
    super(props)
    this.state.searchResults = [{
      name:"",
      artist:"",
      album:"",
      id:"",
    }]
    this.state.playlistName = ""
    this.state.playlistTracks = [{
      name:"",
      artist:"",
      album:"",
      id:"",
    }]

    this.addTrack = this.bind.addTrack
  }

  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

