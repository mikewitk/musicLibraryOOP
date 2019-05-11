// Library -> object 
//  |- name -> string
//  |- creator -> string 
//  |- playlists -> array of playlist

// playlist -> object 
//  |- name -> string 
//  |- tracks -> array of tracks
//  |- overallRating -> avrg of tracks rating
//  |- totalDuration -> sum of tracks length
// 
// tracks -> object
//  |- title -> string
//  |- rating -> integer (1 to 5)
//  |- length -> integer

function Library( name, creator ) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

Library.prototype.addPlaylist = function addPlaylist( playlist ) {
  this.playlists.push( playlist )
}

function Playlist( name ) {
  this.name = name,
  this.tracks = []
}

Playlist.prototype.addTracks = function addTracks( track ) {
  this.tracks.push( track );
}

Playlist.prototype.overallRating = function overallRating( ) {
  
  let sum = 0;
  let average = 0;

  this.tracks.forEach( (track) => {
    sum += track.rating
    });
  
  average = sum / this.tracks.length;
  return "The average rating is: " + average
}

function Track( title, rating, length ) {
  this.title = title,
  this.rating = rating,
  this.length = length
}


// Tests

let newLibrary = new Library( "My Library", "Mike Witk" );
// console.log("This is my new library: ", newLibrary );

let playlist1 = new Playlist( "My Playlist" );
let playlist2 = new Playlist( "My second playlist" );
let playlist3 = new Playlist( "My third playlist" );

newLibrary.addPlaylist( playlist1 );
// newLibrary.addPlaylist( playlist2 );
// newLibrary.addPlaylist( playlist3 );

// console.log( "This is my library with new playlist: ", newLibrary);

let track1 = new Track( "Hideout", 3, 131 );
let track2 = new Track( "Quietly", 5, 140 );
let track3 = new Track( "Clocks Forward", 4, 150 );
let track4 = new Track( "Home", 2, 225 );
let track5 = new Track ( "Second Wind", 5, 135 );

playlist1.addTracks( track1 );
playlist1.addTracks( track3 );
playlist1.addTracks( track4 );
console.log( "These are the tracks on my playlist1: ", playlist1 );

console.log( playlist1.overallRating() );
