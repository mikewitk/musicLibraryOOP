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

Playlist.prototype.overallRating = function overallRating() {
  
  let sum = 0;
  let average = 0;

  this.tracks.forEach( (track) => {
    sum += track.rating
    });
  
  average = sum / this.tracks.length;
  return ("The playlist '" + this.name + "' have an average rating of '" + average + "'")
}

Playlist.prototype.totalDuration = function totalDuration() {

  let sum = 0;

  this.tracks.forEach( (track) => {
    sum+= track.length
  });

  let minutes = Math.floor(sum / 60);
  let seconds = sum - minutes * 60;

  return ("The playlist '" + this.name + "' have a total duration of " + minutes + "min " + seconds +  "s.")
}

function Track( title, rating, length ) {
  this.title = title,
  this.rating = rating,
  this.length = length
}


// Tests

let newLibrary = new Library( "Songs for You", "Mike Witk" );
// console.log("This is my new library: ", newLibrary );

let playlist1 = new Playlist( "To Code" );
let playlist2 = new Playlist( "To Chase Dreams" );
let playlist3 = new Playlist( "Chill AF" );

newLibrary.addPlaylist( playlist1 );
newLibrary.addPlaylist( playlist2 );
newLibrary.addPlaylist( playlist3 );

// console.log( "This is my library with new playlist: ", newLibrary);

let track1 = new Track( "Hideout", 3, 131 );
let track2 = new Track( "Quietly", 5, 140 );
let track3 = new Track( "Clocks Forward", 4, 150 );
let track4 = new Track( "Home", 2, 225 );
let track5 = new Track ( "Second Wind", 5, 135 );

playlist1.addTracks( track1 );
playlist1.addTracks( track3 );
playlist1.addTracks( track4 );
// console.log( "These are the tracks on my playlist1: ", playlist1 );

playlist2.addTracks( track2 )
playlist2.addTracks( track4 )
playlist2.addTracks( track5 )

playlist3.addTracks( track1 )
playlist3.addTracks( track2 )
playlist3.addTracks( track3 )
playlist3.addTracks( track4 )
playlist3.addTracks( track5 )


playlist1.overallRating();
playlist1.totalDuration();
playlist2.overallRating();
playlist2.totalDuration();
playlist3.overallRating();
playlist3.totalDuration();

console.log( "This is my new library: ", newLibrary );

console.log( playlist1.overallRating() )
console.log( playlist1.totalDuration() )
console.log( playlist2.overallRating() )
console.log( playlist2.totalDuration() )
console.log( playlist3.overallRating() )
console.log( playlist3.totalDuration() )