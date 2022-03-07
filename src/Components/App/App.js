import './App.css';
import React from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';

class App extends React.Component() {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
          </div>
        </div>
      </div>
    )
  }
}

export default App;

