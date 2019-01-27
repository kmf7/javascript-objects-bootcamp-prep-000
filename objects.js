var playlist= {Jewel:'Hands'};
function updatePlaylist(playlist,artistname, songtitle){
  playlist[artistname]=songtitle;
  return playlist;
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
 
}