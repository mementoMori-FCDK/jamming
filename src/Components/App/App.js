import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist  from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{id: 1, name: 'song1', artist: 'artist1', album: 'album1'},
                      {id: 2, name: 'song2', artist: 'artist2', album: 'album2'},
                      {id: 3, name: 'song3', artist: 'artist3', album: 'album3'}],
      playlistName: "playlist",
      playlistTracks: [{id: 4, name: 'p_song1', artist: 'artist1', album: 'album1'},
                       {id: 5, name: 'p_song2', artist: 'artist2', album: 'album2'},
                       {id: 6, name: 'p_song3', artist: 'artist3', album: 'album3'}]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(newTrack) {
    let savedPlaylist = this.state.playlistTracks;
    if (savedPlaylist.find(track => track.id === newTrack.id)) {
      return;
    } else {
      savedPlaylist.push(newTrack);
      this.setState({ playlistTracks: savedPlaylist});
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
