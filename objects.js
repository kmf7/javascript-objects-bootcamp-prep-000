var playlist= {Jewel:'Hands'};
function updatePlaylist(playlist,artistname, songtitle){
  playlist[artistname]=songtitle;
  return playlist;
}
function removeFromPlaylist(playlist,artistname){
  var playlist2= delete playlist.artistname;
  playlist2;
 
}