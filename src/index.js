import {Playlist} from './playlists/api.js';
import { display } from './playlists/observe/display.js';
import { renderDisplay } from './playlists/observe/renderDisplay.js';

// Website Chase used for help: https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31 

// Order of playlist data: [NAME, DURATION, PLAYS, SONGS...]

let testPlaylist = ['Playlist 1', 1, 5, 'song 1', 'song 2', 'song 3'];

// TEST FOR SHOW
const playlist = Playlist.Show(testPlaylist);
const showDisplay = display(playlist);
//document.querySelector('#app').innerHTML = renderDisplay(showDisplay);

// TEST FOR ADD
let testPlaylist1 = ['Playlist 1', 1, 7, 'song 1', 'song 2', 'song 3', 'song 1'];
let testPlaylist2 = ['Playlist 2', 2.5, 2, 'song 1', 'song 2', 'song 3'];

const playlists = Playlist.Add(testPlaylist1, testPlaylist2);
const addDisplay = display(playlists);
//document.querySelector('#app').innerHTML = renderDisplay(addDisplay);

// TEST FOR REMOVE
let removePlaylist = Playlist.RemovePlaylist(testPlaylist, 'song 1');

// TEST FOR FILTER DUPLICATES
let testPlaylist6 = ['Playlist 1', 1, 7, 'song 1', 'song 2', 'song 3', 'song 1'];
const dupliDisplay = display(Playlist.FilterDuplicates(testPlaylist6));
//document.querySelector('#app').innerHTML = renderDisplay(dupliDisplay);

//TEST FOR SORTING BY NUMBER OF PLAYS PER PLAYLIST
let testPlaylist3 = ['Playlist 1', 1, 7, 'song 1', 'song 2', 'song 3', 'song 1'];
let testPlaylist4 = ['Playlist 2', 2.5, 2, 'song 1', 'song 2', 'song 3'];
let testPlaylist5 = ['Playlist 3', 2.5, 1, 'song 1', 'song 2', 'song 3'];
const sortPlaylist = Playlist.PlaylistSort(2)(testPlaylist3, testPlaylist4, testPlaylist5);
document.querySelector('#app').innerHTML = renderDisplay(removePlaylist);
