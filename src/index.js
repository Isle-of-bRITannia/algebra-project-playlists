import {Playlist} from './playlists/api.js';
import { display } from './playlists/observe/display.js';
import { renderDisplay } from './playlists/observe/renderDisplay.js';

let testPlaylist = ['song 1', 'song 2', 'song 3'];

const playlist = Playlist.Show(testPlaylist);

let testPlaylist1 = ['song 1', 'song 2', 'song 3', 'song 1'];
let testPlaylist2 = ['song 1', 'song 2', 'song 3'];

const playlists = Playlist.Add(testPlaylist1, testPlaylist2);
console.log(playlists);

//const finalDisplay = display(playlists);
const finalDisplay = display(Playlist.FilterDuplicates(testPlaylist1));
document.querySelector('#app').innerHTML = renderDisplay(finalDisplay);