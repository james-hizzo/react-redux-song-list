import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Scarborough Fair', duration: '4:05' },
    { title: 'Isolation', duration: '3:32' },
    { title: 'She Sells Santuary', duration: '4:01' },
    { title: 'Jolene', duration: '2:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong;
};

export default combineReducers({
  // songs and selectedSong are what will show up in our state
  songs: songsReducer,
  selectedSong: selectedSongReducer
});