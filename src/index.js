import {Playlist} from './playlists/api.js';
import { display } from './playlists/observe/display.js';
import { renderDisplay } from './playlists/observe/renderDisplay.js';

// Order of playlist data: [NAME, DURATION, PLAYS, SONGS...]

let testPlaylist = ['Playlist 1', 1, 5, 'song 1', 'song 2', 'song 3'];

// TEST FOR SHOW
const playlist = Playlist.Show(testPlaylist);
const showDisplay = display(playlist);

// TEST FOR ADD
let testPlaylist1 = ['Playlist 1', 1, 7, 'song 1', 'song 2', 'song 3', 'song 1'];
let testPlaylist2 = ['Playlist 2', 2.5, 2, 'song 1', 'song 2', 'song 3'];

const playlists = Playlist.Add(testPlaylist1, testPlaylist2);
//console.log(playlists);

const addDisplay = display(playlists);

// TEST FOR FILTER DUPLICATES
const dupliDisplay = display(Playlist.FilterDuplicates(testPlaylist1));
document.querySelector('#app').innerHTML = renderDisplay(dupliDisplay);

//TEST FOR SORTING BY NUMBER OF PLAYS PER PLAYLIST
let testPlaylist3 = ['Playlist 1', 1, 7, 'song 1', 'song 2', 'song 3', 'song 1'];
let testPlaylist4 = ['Playlist 2', 2.5, 2, 'song 1', 'song 2', 'song 3'];
let testPlaylist5 = ['Playlist 3', 2.5, 1, 'song 1', 'song 2', 'song 3'];
const sortPlaylist = Playlist.PlaylistSort(2)(testPlaylist3, testPlaylist4, testPlaylist5);

// document.querySelector('#app').innerHTML = renderDisplay(sortPlaylist);