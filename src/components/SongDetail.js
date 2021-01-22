import React from 'react';
import { connect } from 'react-redux';

// const SongDetail = (props) => { gonna destructure to below
const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Please select a song</div>
  }
  console.log("Props from SongDetail: ", mySelectedSong)
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {mySelectedSong.title} 
        <br />
        Duration: {mySelectedSong.duration}
      </p>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);