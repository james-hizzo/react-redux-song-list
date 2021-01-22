import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; // action creator

class SongList extends Component {
  // this.props === { songs: state.songs }

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
    
  render() {
    console.log("Props from render: ", this.props)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// can be called anything but usually called mapStateToProps
// this gets called with all of the data (state) inside our redux store 
const mapStateToProps = (state) => {
  console.log("Map State to Props ", state);
  return { songs: state.songs };
};

// connect() returns a function, it's then invoked using SongList
// connect is a react component - it talks to the Provider
export default connect(
  mapStateToProps, 
  { selectSong: selectSong } // can be just { selectSong } also, behind 
  // the scenes the connect function takes action being returned and throws it 
  // into the the dispatch function for us (like store.dispatch in the ins. company)
)(SongList);