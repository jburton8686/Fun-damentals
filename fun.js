/* ONE




1. Create a Function Declaration called warGames, that takes a single argument - name, 
and returns "Would you like to play a game, " concat with the name passed in. 

2. Invoke and console log that function and pass in your name.
3. Save the file
4. Open the terminal in VSCode, under 'View' -> 'Integrated Terminal' 
5. run the following command 'node fun.js'
6. You should see the output of your console log. Sweet!!!!
*/
console.log("===ONE===\n\n");
function warGames(name) {
  return "Would you like to play a game, " + name;
}
console.log(warGames("Bob"));
/* TWO
1. Create a Function Declaration called pluralizeAnimals, that will take a single argument - animals. 
This function is going to take an array, and create a new array that has transformed the items in that array from singluar to plural, by appending an 's' to every element of the array. 
2. Invoke the function pluralizedAnimals, and pass it our array 'farmAnimals', be sure to console log out the result of that function, so you can see if it's working. 
3. Repeat ONE steps 4-6 to get the output!
*/
console.log("===TWO===\n\n");
let farmAnimals = ["pig", "chicken", "cow", "hen", "sheep", "duck", "goose"];
Object.freeze(farmAnimals);
function pluralizeAnimals(animals) {
  return animals.map(function(a) {
    return a + "s";
  });
}
const plAnimals = arr => arr.map(x => x + "s");
console.log (pluralizeAnimals(farmAnimals));
console.log(plAnimals(farmAnimals));

/*THREE
1. We've got this sweet playlist, there are times when we only want to show Song. Create a function called onlySongs, that will take a single argument, 'playlist', and what we want this function to return is an array of songs as strings, rather than what it is currently, an array of objects. 
2. Invoke your new function onlySongs assign it to a new variable 'justSongs', and console log out that variable. 
*/
console.log("===THREE===\n\n");
const sweetPlaylist = [
  {
    song: "Every Breath You Take",
    artist: "The Police",
    id: 101,
    favorite: true
  },
  { song: "Billie Jean", artist: "Michael Jackson", id: 102, favorite: true },
  {
    song: "Flashdance... What a Feeling",
    artist: "Irene Cara",
    id: 103,
    favorite: true
  },
  { song: "Down Under", artist: "Men at Work", id: 104, favorite: false },
  { song: "Beat It", artist: "Michael Jackson", id: 105, favorite: false },
  {
    song: "Total Eclipse of the Heart",
    artist: "Bonnie Tyler",
    id: 106,
    favorite: false
  },
  { song: "Maneater", artist: "Hall & Oates", id: 107, favorite: true },
  {
    song: "Baby, Come to Me",
    artist: "Patti Austin and James Ingram",
    id: 109,
    favorite: true
  }
];
//function onlySongs(playlist) {  
//  return playlist.map(function(s) {
//    return s.song;
//});
// return os;
//}

//    var onlySongs = justSongs
 //   console.log(justSongs);
// shorthand --- const oSongs = plist => plist.map(x => x.song);
//consloe.log(oSongs(sweetPlaylist));

//    var onlySongs = sweetPlaylist.map(function(playlist) {
//      return playlist["song"];
//    });
 //   console.log(onlySongs);
   // let justSongs = onlySongs(sweetPlaylist);
   // console.log(justSongs); ---- changing the two items above to one item.

/*FOURS
1. Create a function, favorites, that will  take a single argument 'playlist', and what it should return is an Array of Songs that are marked 'true' for the property favorite. 
2. Invoke this function favorites, assign it to a new variable 'favs', and console log that variable out to verify that it's correct.
*/
console.log("===FOUR===\n\n");
const favorites = playlist => {
  return playlist.filter(song => song.favorite).map(x => x.song);
};
let favs = favorites(sweetPlaylist);
console.log(favs);
//function favorites(playlist) {
//  if (favorite = true) {
//   return song;
//  } else { (favorite = false)
//    return null;
//    let favorites = favs;

//}
